import React, { useState } from "react";
import { Link } from "react-router-dom";
import nukeLogoWhite from "../../assets/nuke-logo-white.png";
// import sidebar from "../../components/sidebar";

const CreatePost = function () {
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
              <a href="">Manage Posts</a>
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
            <h4>Add Post</h4>
            <Link to="/admin-panel/create-post" className="link-btn">
              Manage posts
            </Link>
          </div>

          <div className="content">
            <h2 className="page-title">Manage Post</h2>
            <form>
              <div>
                <label>Blog Title</label>
                <input type="text" name="title" className="input-field" />
              </div>
              <div>
                <label>Body</label>
                <textarea name="body" id="body"></textarea>
              </div>
              <div>
                <label>Cover Image</label>
                <input type="file" name="image" className="input-field" />
              </div>
              <div>
                <label>Topic</label>
                <select name="topic" className="input-field">
                  <option value="Entertainment">Entertainment</option>
                  <option value="Tech-news">Tech news</option>
                  <option value="Health">Health</option>
                  <option value="History">History</option>
                  <option value="Movie-reviews">Movie Reviews</option>
                  <option value="Quotes">Daily Quotes</option>
                  <option value="Facts">Facts</option>
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

export default CreatePost;
