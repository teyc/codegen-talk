var <%= projectname %> = <%= projectname %> || { };

(function(<%= projectname %>) {

    <%= projectname %>.<%= classname %> = <%= classname %>;

    function <%= classname %> () {
        <% _.forEach(properties, property => { %>
            this.<%= property %> = '';
        <% }); %>
    }

} (<%= projectname %>));

