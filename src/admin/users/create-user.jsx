import React, { useState } from "react";
import { Link } from "react-router-dom";
import nukeLogoWhite from "../../assets/nuke-logo-white.png";
// import sidebar from "../../components/sidebar";

const CreateUser = function () {
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
            <h4>Add User</h4>
            <Link to="/admin-panel/manage-users" className="link-btn">
              Manage Users
            </Link>
          </div>

          <div className="content">
            <h2 className="page-title">Create User</h2>
            <form>
            <div>
				<label>Username</label>
				<input type="text" name="username" className="input-field"/>
				</div>
				<div>
				<label>Email</label>
				<input type="email" name="email" className="input-field"/>
				</div>
				<div>
				<label>Password</label>
				<input type="password" name="password" className="input-field"/>
				</div>
				
				<div>
				<label>Comfirm Password</label>
				<input type="password" name="passwordConf" className="input-field"/>
				</div>
	
				<div>
					<label>User</label>
					<select name="role" className="input-field">
						<option value="author">Author</option>
						<option value="admin">Admin</option>
						</select>
					</div>
              <div className="btn-wrap">
                <button type="submit" className="btn">
                  Add post
                </button>
              </div>
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default CreateUser;
