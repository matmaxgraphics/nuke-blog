import React from "react";
import { Link } from "react-router-dom";
import PanelMainLayout from "../../layout/PanelMainLayout";

const CreateCategory = function () {
  return (
    <PanelMainLayout>
      <div className="button-group">
        <h4>Add Category</h4>
        <Link to="/admin-panel/manage-category" className="link-btn">
          Manage categories
        </Link>
      </div>
      <div className="content">
      <form>
        <div>
          <label>Category Name</label>
          <input type="text" name="title" className="input-field" />
        </div>
        <div>
          <label>Description (Optional)</label>
          <input type="text" name="description" className="input-field" />
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
