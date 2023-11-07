import React from "react";
import { Link } from "react-router-dom";
import PanelMainLayout from "../../layout/PanelMainLayout";

function CreatePost() {
  return (
    <PanelMainLayout>
      <div className="button-group">
        <h4>Add Post</h4>
        <Link to="/admin-panel/manage-post" className="link-btn">
          Manage posts
        </Link>
      </div>

      <div className="content">
        <h2 className="page-title">Create Post</h2>
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
    </PanelMainLayout>
  );
}

export default CreatePost;
