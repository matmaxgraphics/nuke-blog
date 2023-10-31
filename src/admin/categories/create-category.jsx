import React, { useState } from "react";
import { Link } from "react-router-dom";
import nukeLogoWhite from "../../assets/nuke-logo-white.png";
// import sidebar from "../../components/sidebar";

const CreateCategory = function () {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      <section className={`panel-wrapper ${sidebarOpen ? "sidebar-open" : ""}`}>
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
              <Link to="/admin-panel/manage-post">Manage Posts</Link>
            </li>
            <li>
              <Link to="/admin-panel/manage-category">Manage Categories</Link>
            </li>
            <li>
              <Link to="/admin-panel/manage-users">Manage Users</Link>
            </li>
          </ul>
        </aside>
        <main className="admin-content">
          {/* admin panel navbar */}
          <nav>
            
              <div className="toggle-container" onClick={toggleSidebar}>
                <i className="ri-menu-line"></i>
              </div>

              <div className="logout">
                <Link to="/admin-panel/admin-login">
                  <button className="btn">Logout</button>
                </Link>
              </div>
          </nav>

          <div className="button-group">
            <h4>Add Category</h4>
            <Link to="/admin-panel/manage-category" className="link-btn">
              Manage Categories
            </Link>
          </div>

          <div className="content">
            <form>
              <div>
                <label>Category Name</label>
                <input type="text" name="title" className="input-field" />
              </div>
              <div>
                <label>Description (Optional)</label>
                <input type="text" name="description" className="input-field" />
              </div>
              
              <div className="btn-wrap">
                <button type="submit" className="btn">
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default CreateCategory;
