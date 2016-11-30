const gulp  = require('gulp');
const template = require('gulp-template');
const data = require('gulp-data');

const customerModel = {
    projectname: 'CodegenerationSample',
    classname: 'Customer',
    properties: [
        'FirstName',
        'LastName' ,
        'City'
    ]
}

gulp.task('default', () => 
    gulp.src('template/*')
        .pipe(data(() => customerModel))
        .pipe(template())
        .pipe(gulp.dest('dist')));

