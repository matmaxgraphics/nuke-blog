import React from "react";
import { Link } from "react-router-dom";
import PanelMainLayout from "../../layout/PanelMainLayout";

// import sidebar from "../../components/sidebar";

const ManagePost = function () {
  return (
    <PanelMainLayout>
      <div className="button-group">
        <h4>Manage Posts</h4>
        <Link to="/admin-panel/create-post" className="link-btn">
          Create Post
        </Link>
      </div>
      <div className="content">
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
    </PanelMainLayout>
  );
};

export default ManagePost;
