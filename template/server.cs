namespace <%= projectname %> 
{
    public class <%= classname %>
    {
        <% _.forEach(properties, (property) => { %>
        public string <%= property %> { get; private set; } 
        <% }); %>
    }
}
