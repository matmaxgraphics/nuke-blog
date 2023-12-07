import React, { useState } from "react";
import { Link } from "react-router-dom";
import PanelMainLayout from "../../layout/PanelMainLayout";
import axios from "axios";

// const client = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/posts"
// })

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((post) => {
        setPosts((posts) => [post, ...posts]);
        setTitle("");
        setBody("");

        console.log(post);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

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
        <form onSubmit={handleSubmit}>
          <div>
            <label>Blog Title</label>
            <input
              type="text"
              name="title"
              className="input-field"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Body</label>
            <textarea
              name="body"
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
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
