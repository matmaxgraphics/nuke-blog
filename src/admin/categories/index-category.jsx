import React, { useState } from "react";
import { Link } from "react-router-dom";
import nukeLogoWhite from "../../assets/nuke-logo-white.png";
// import sidebar from "../../components/sidebar";

const ManageCategory = function () {
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
            <h4>Manage Categories</h4>
            <Link to="/admin-panel/create-category" className="link-btn">
              Add Category
            </Link>
          </div>

          <div className="content">
            {/* <h2 className="page-title">Manage Post</h2> */}

            <table>
              <thead>
                <th>S/N</th>
                <th>Name</th>
                <th colspan="2">Action</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Entertainment</td>
                  <td>
                    <a href="#" class="edit">
                      edit
                    </a>
                  </td>
                  <td>
                    <a href="#" class="delete">
                      delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Tech news</td>
                  <td>
                    <a href="#" class="edit">
                      edit
                    </a>
                  </td>
                  <td>
                    <a href="#" class="delete">
                      delete
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </section>
    </>
  );
};

export default ManageCategory;
