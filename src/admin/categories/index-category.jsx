import React from "react";
import { Link } from "react-router-dom";
import PanelMainLayout from "../../layout/PanelMainLayout";

const ManageCategory = function () {
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
    </PanelMainLayout>
  );
};

export default ManageCategory;
