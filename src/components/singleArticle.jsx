import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useFetchData from "./HttpRequests/useFetchData";
import newsImage1 from "../assets/news-img1.png";
import articleImg from "../assets/article-img.png";

const SingleArticle = () => {
  const { slug } = useParams();
  const { data } = useFetchData(
    `https://nukeapi.pythonanywhere.com/api/posts/${slug}`
  );

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <main className="post--wrapper">
      <PostBreadcrumb category={data.category.name} />
      <PostHeader
        title={data.title}
        date={formatDate(data.created_at)}
        image={data.image}
      />
      <PostBodyContent body={data.body} />
      <ArticleSharing />
    </main>
  );
};

const PostBreadcrumb = ({ category }) => {
  return (
    <section className="breadcrumb-container max-width">
      <article className="breadcrumb--wrapper">
        <span>
          <Link to="/">Home / </Link>
        </span>
        <span>
          <a href="">{category}</a>
        </span>
      </article>
    </section>
  );
};
const PostHeader = ({ title, date, image }) => {
  return (
    <section className="banner--container section-flex max-width">
      <article className="text-description">
        <div className="date--duration-tag">
          <small className="date-tag">{date}</small>
          <span className="circle"></span>
          <small className="duration">6 min read</small>
        </div>

        <h1>{title}</h1>
      </article>

      <article className="img-container">
        <img src={image} alt="" />
      </article>
    </section>
  );
};

const PostBodyContent = ({ body }) => {
  return (
    <section className="article-container max-width_1200">
      <div>{body}</div>
    </section>
  );
};

const ArticleSharing = () => {
  return (
    <section className="share-post max-width">
      <hr />
      <div className="share-wrapper flex">
        <h5>Share this post</h5>
        <div className="sharing-links">
          <span className="copy-link">
            <i className="ri-file-copy-line"></i> Copy link
          </span>
          <span>
            <i className="ri-facebook-circle-fill"></i>
          </span>
          <span>
            <i className="ri-linkedin-box-fill"></i>
          </span>
          <span>
            <i className="ri-twitter-x-fill"></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default SingleArticle;
