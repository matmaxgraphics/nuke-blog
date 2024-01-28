import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PanelMainLayout from "../../layout/PanelMainLayout";
import usePostRequest from "../../components/HttpRequests/usePostRequest";
import axios from "axios";

const ManageCategory = function () {
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
  return (
    <PanelMainLayout>
      <div className="button-group">
        <h4>Manage Categories</h4>
        <Link to="/admin-panel/create-category" className="link-btn">
          Create Category
        </Link>
      </div>
      <div className="content">
        <table>
          <thead>
            <th>S/N</th>
            <th>Name</th>
            <th colSpan="2">Action</th>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr>
                <td>{category.id}</td>
                <td key={category.id} value={category.name}>
                  {category.name}
                </td>
                <td>
                  <a href="#" className="edit">
                    edit
                  </a>
                </td>
                <td>
                  <a href="#" className="delete">
                    delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PanelMainLayout>
  );
};

export default ManageCategory;
