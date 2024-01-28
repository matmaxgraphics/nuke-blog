import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PanelMainLayout from "../../layout/PanelMainLayout";
import useFetchData from "../../components/HttpRequests/useFetchData";
import usePostRequest from "../../components/HttpRequests/usePostRequest";
import axios from "axios";

// const client = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/posts"
// })
const adminToken = localStorage.getItem("adminToken");
// console.log(adminToken);
function CreatePost() {
  const [blogTitle, setBlogTitle] = useState("");
  const [body, setBody] = useState("");
  const [blogImage, setBlogImage] = useState(null);
  const [blogCategory, setBlogCategory] = useState("");

  const handleCategoryChange = (category) => {
    setBlogCategory(category);
  };

  

  const constructPostData = () => {
    
    return {
      title: blogTitle,
      body: body,
      category: blogCategory,
      image: blogImage,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!blogCategory) {
      // Display error message or prompt user to select a category
      console.log("select a category");
      return;
  }

    const postData = constructPostData();

    try {
      const result = await usePostRequest("posts", postData, adminToken);
      console.log("post created successfully: ", result);
    } catch (error) {
      console.error(error.message);
    }
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
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            <label>Blog Title</label>
            <input
              type="text"
              name="title"
              className="input-field"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
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
            <input
              type="file"
              name="image"
              className="input-field"
              onChange={(e) => setBlogImage(e.target.files[0])}
            />
          </div>
          <CategoryDropdown
            blogCategory={blogCategory}
            onCategoryChange={handleCategoryChange}
          />
          {/* <AuthorDropdown /> */}
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

const CategoryDropdown = ({ blogCategory, onCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://nukeapi.pythonanywhere.com/api/posts/categories/"
        );
        setCategories(response.data);
        console.log("LIST of categories", categories);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    onCategoryChange(selectedCategory);
  };

  return (
    <div>
      <label>Topic</label>
      <select
        name="category"
        className="input-field"
        value={blogCategory}
        onChange={handleCategoryChange}
      >
        <option value="" disabled>
          Select a topic
        </option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const AuthorDropdown = () => {
  const [authors, setAuthors] = useState([]);
  const [blogAuthor, setBlogAuthor] = useState("");

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        if (!token) {
          console.error("Authentication token not found");
          return;
        }

        const response = await axios.get(
          "https://nukeapi.pythonanywhere.com/api/dj-rest-auth/user/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        console.log(response.data);
        setAuthors(response.data);
        console.log("list of authors", authors);
      } catch (error) {
        console.error("Error fetching authors", error.message);
      }
    };
    fetchAuthors();
  }, []);

  const handleAuthorChange = (e) => {
    setBlogAuthor(e.target.value);
  };

  return (
    <div>
      <label>Author</label>
      <select
        name="author"
        className="input-field"
        value={blogAuthor}
        onChange={handleAuthorChange}
      >
        <option value="" disabled>
          Select Author
        </option>
        {authors.map((author) => (
          <option key={author.pk} value={author.username}>
            {author.username}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CreatePost;
