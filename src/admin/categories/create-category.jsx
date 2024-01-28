import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PanelMainLayout from "../../layout/PanelMainLayout";
import usePostRequest from "../../components/HttpRequests/usePostRequest";
import axios from "axios";

const adminToken = localStorage.getItem("adminToken");

const CreateCategory = function () {
  const [categoryTitle, setCategoryTitle] = useState("");

  const navigateTo = useNavigate();

  const formData = () => {
    return {
      name: categoryTitle,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const categoryData = formData();

    try {
      const result = await usePostRequest(
        "posts/categories",
        categoryData,
        adminToken
      );

      navigateTo("/admin-panel/manage-category")
      console.log("Category created successfully: ", result);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <PanelMainLayout>
      <div className="button-group">
        <h4>Add Category</h4>
        <Link to="/admin-panel/manage-category" className="link-btn">
          Manage categories
        </Link>
      </div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Category Name</label>
            <input
              type="text"
              name="title"
              className="input-field"
              value={categoryTitle}
              onChange={(e) => setCategoryTitle(e.target.value)}
            />
          </div>

          <div className="btn-wrap">
            <button type="submit" className="btn">
              Add Category
            </button>
          </div>
        </form>
      </div>
    </PanelMainLayout>
  );
};

export default CreateCategory;
