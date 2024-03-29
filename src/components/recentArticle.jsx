import { Outlet, Link } from "react-router-dom";
import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";
import img4 from "../assets/img-4.png";
import arrowIcon from "../assets/arrow-right.svg";
import useFetchData from "./HttpRequests/useFetchData";

const RecentArticle = () => {
  const { data } = useFetchData(
    "https://nukeapi.pythonanywhere.com/api/posts/",
    4
  );

  // Function to format the date string
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
      <section className="recent-article--section max-width">
        <h2>Recent Articles</h2>
        <div>Loading...</div>
      </section>
    );
  }

  return (
    <section className="recent-article--section max-width">
      <h2>Recent Articles</h2>

      <main className="blog-cards--wrapper">
        {data &&
          data.map((post) => (
            <article className="blog-card--container" key={post.slug}>
              <Link to={`/single-article/${post.slug}`}>
                <img src={post.image} alt="" className="blog-display--image" />
                <div className="blog-details">
                  <small className="blog-upload--date">
                    {formatDate(post.created_at)}
                  </small>
                  <h4 className="blog-title">{post.title}</h4>
                </div>
              </Link>
            </article>
          ))}
      </main>
      <button className="read--more_btn link--button">
        <Link to="/all-articles">
          <span>Explore more articles </span>{" "}
          <img
            src={arrowIcon}
            alt="arrow icon with read article button"
            className="cta-icon"
          />
        </Link>
      </button>
    </section>
  );
};

export default RecentArticle;
