import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import img1 from "../../assets/img-1.png";
import img2 from "../../assets/img-2.png";
import img3 from "../../assets/img-3.png";
import img4 from "../../assets/img-4.png";
import PanelMainLayout from "../../layout/PanelMainLayout";
import useFetchData from "../../components/HttpRequests/useFetchData";

// import sidebar from "../../components/sidebar";

const ManagePost = function () {
  const { data } = useFetchData(
    "https://nukeapi.pythonanywhere.com/api/posts/",
    4
  );
  
  const adminToken = localStorage.getItem('adminToken');
  // console.log(adminToken);


  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  if (!data) {
    return (
      <PanelMainLayout>
        <div className="button-group">
          <h4>Manage Posts</h4>
          <Link to="/admin-panel/create-post" className="link-btn">
            Create Post
          </Link>
        </div>
        <div className="content">
          <section className="articles--container recent-article--section">
            <div>Fetching posts...</div>
          </section>
        </div>
      </PanelMainLayout>
    );
  }
  return (
    <PanelMainLayout>
      <div className="button-group">
        <h4>Manage Posts</h4>
        <Link to="/admin-panel/create-post" className="link-btn">
          Create Post
        </Link>
      </div>
      <div className="content">
        <section className="articles--container recent-article--section">
          <main className="blog-cards--wrapper">
            {data &&
              data.map((post, index) => (
                <article className="blog-card--container" key={index}>
                  <img
                    src={post.image}
                    alt=""
                    className="blog-display--image"
                  />
                  <div className="blog-details">
                    <small className="blog-upload--date">
                      {formatDate(post.created_at)}
                    </small>
                    <h4 className="blog-title">{post.title}</h4>
                  </div>

                  <div className="card--info">
                    <div className="post--author">
                      <i className="ri-user-line"></i>{" "}
                      <small>{post.author}</small>
                    </div>
                    <div className="post--index">
                      <i className="ri-file-list-2-line"></i>{" "}
                      <small>
                        <span className="post--number">{index + 1} / </span>
                        <span className="posts--length">{data.length}</span>
                      </small>
                    </div>
                  </div>

                  <div className="btn-group">
                    <a className="link-btn edit">edit</a>
                    <a className="link-btn delete">delete</a>
                    <a className="link-btn publish">unpublish</a>
                  </div>
                </article>
              ))}
          </main>
        </section>
      </div>
    </PanelMainLayout>
  );
};

export default ManagePost;
