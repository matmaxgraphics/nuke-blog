export default Sidebar = () => {
    
  return (
    <>
      <aside className={`sidebar ${sidebarOpen ? "active" : ""}`}>
        <Link to="/">
          <img
            src={nukeLogoWhite}
            alt="logo for nuke blog"
            className="blog-logo"
          />
        </Link>
        <ul className="sidebar-content">
          <li>
            <Link to="admin-panel/create-post">Manage Posts</Link>
          </li>
          <li>
            <a href="">Manage Categories</a>
          </li>
          <li>
            <a href="">Manage Users</a>
          </li>
        </ul>
      </aside>
    </>
  );
};
