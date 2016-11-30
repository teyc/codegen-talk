var <%= projectname %> = <%= projectname %> || { };

(function(<%= projectname %>) {

    <%= projectname %>.<%= classname %> = <%= classname %>;

    //protected-begin(server-<%= classname %>)
    /**
     * @description <%= classname %>
     * Fill this out with your comments
     **/
    //protected-end(server-<%= classname %>)
    function <%= classname %> () {
        <% _.forEach(properties, property => { %>
            this.<%= property %> = '';
        <% }); %>
    }

} (<%= projectname %>));

