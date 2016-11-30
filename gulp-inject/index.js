const through = require('through2')

module.exports = (configuration) => new Injector(configuration); 

/**
 * @parameter configuration is unused
 **/
function Injector(configuration) {
    return through.obj(inject);
    function inject(file, enc, cb) {
        
        let lines = contentsToLines(file);
        let sections = linesToSections(lines);
        console.log(JSON.stringify(sections));
        cb();
    }
}

function contentsToLines(file) {
    let lines = file.contents.toString().split(/\n/);
    return lines;
}

function linesToSections(lines) {
    let document = pdocument(lines, 0);
    console.log(document.join('\n'));
}

// ------------ tokens --------------------

function Protected(name, lines) {
    this.name = name;
    this.lines = lines;
}
Protected.prototype.toString = function() {
    let lines = this.lines.join('\n');
    return `Protected(${this.name})\n${lines}`
}


// ------- parser combinators -------------

function pdocument(lines, pos) {
    
    var result = []

    while (pos < lines.length) {
        let [text, postext] = ptext(lines, pos);
        let [prot, posprot] = pprotected(lines, pos);
        if (text) { 
            result.push(text);
            pos = postext;
        }
        if (prot) {
            result.push(prot);
            pos = posprot;
        }
    } 
    
    return result;
}

function ptext(lines, pos) {
    var result = [];
    while (pos < lines.length) {
        let line = lines[pos];
        if (matchProtectedBegin(line)) {
            // found a protected section
            break;
        }
        result.push(line);
        pos++;
    }
    return [result.join("\n"), pos];
}

function pprotected(lines, pos) {
    var result = [];

    let sectionName = matchProtectedBegin(lines[pos]);
    if (!sectionName) return [null, pos];

    while (pos < lines.length) {
        let line = lines[pos];
        let endSectionName = matchProtectedEnd(line);
        if (endSectionName) {
            if (endSectionName != sectionName) {
                throw 'protected section starts with ${sectionName}, but ends with ${endSectionName}';
            }
            break;
        }
        result.push(line);
        pos++;
    }

    return [new Protected(sectionName, result), pos];
}

function matchProtectedBegin(line) {
    var match = line.match(/protected-begin\((.+)\)/);
    if (match == null) return null;
    return match[1];
}

function matchProtectedEnd(line) {
    var match = line.match(/protected-end\((.+)\)/);
    if (match == null) return null;
    return match[1];
}

