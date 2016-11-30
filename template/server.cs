namespace <%= projectname %> 
{
    ///<summary>
    /// //protected-begin(server-<%= classname %>)
    /// //protected-end(server-<%= classname %>)
    ///</summary>
    public class <%= classname %>
    {
        <% _.forEach(properties, (property) => { %>
        ///<summary>
        /// //protected-begin(server-<%= classname %>-<%= property %>)
        /// //protected-end(server-<%= classname %>-<%= property %>)
        ///</summary>
        public string <%= property %> { get; private set; } 
        <% }); %>
    }
}
