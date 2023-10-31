import React, { useState } from "react";
import { Link } from "react-router-dom";
import nukeLogoWhite from "../../assets/nuke-logo-white.png";
// import sidebar from "../../components/sidebar";

const ManagePost = function () {
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
              <a href="">Manage Categories</a>
            </li>
            <li>
              <a href="">Manage Users</a>
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
            <h4>Manage Posts</h4>
            <Link to="/admin-panel/create-post" className="link-btn">
              Add post
            </Link>
          </div>

          <div className="content">
            {/* <h2 className="page-title">Manage Post</h2> */}

            <table>
              <thead>
                <th>S/N</th>
                <th>Title</th>
                <th>Author</th>
                <th colspan="3">Action</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Effect of some chemicals in our body system</td>
                  <td>mateen</td>
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
                  <td>
                    <a href="#" class="publish">
                      publish
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>What if an apple a day draws a doctor nearer?</td>
                  <td>mateen</td>
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
                  <td>
                    <a href="#" class="publish">
                      publish
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

export default ManagePost;
