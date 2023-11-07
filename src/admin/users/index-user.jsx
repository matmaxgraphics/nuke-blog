import React from "react";
import { Link } from "react-router-dom";
import PanelMainLayout from "../../layout/PanelMainLayout";

const ManageUser = function () {
  return (
    <PanelMainLayout>
      <div className="button-group">
        <h4>Manage Users</h4>
        <Link to="/admin-panel/create-user" className="link-btn">
          Add User
        </Link>
      </div>

      <div className="content">
        <table>
          <thead>
            <th>S/N</th>
            <th>Username</th>
            <th>Role</th>
            <th colspan="2">Action</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Matmax</td>
              <td>Admin</td>
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
              <td>Ejoke</td>
              <td>Author</td>
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

export default ManageUser;
