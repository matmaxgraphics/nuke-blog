import { Link } from "react-router-dom";
import img4 from "../assets/img-4.png";
import arrowIcon from "../assets/arrow-right.svg";
import useFetchData from "./HttpRequests/useFetchData";

const PopularArticle = () => {
  const { data } = useFetchData(
    "https://nukeapi.pythonanywhere.com/api/posts/",
    4
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
    return (
      <section className="popular-article--section recent-article--section max-width">
        <h2>Recent Articles</h2>
        <div>Loading...</div>
      </section>
    );
  }
  return (
    <section className="popular-article--section recent-article--section max-width">
      <h2>Popular Articles</h2>
      <main className="blog-cards--wrapper">
        {data &&
          data.map((post) => (
            <article className="blog-card" key={post.slug}>
              <div className="blog--image">
                <img src={post.image} alt="" />
              </div>
              <div className="blog-details">
                <small className="blog-upload--date">
                  {formatDate(post.created_at)}
                </small>
                <h4 className="blog-title">{post.title}</h4>
                <p className="blog-description truncate">{post.body}</p>
                <button className="read--more_btn link--button">
                  <Link to={`/single-article/${post.slug}`}>
                    <span>Read Article </span>{" "}
                    <img
                      src={arrowIcon}
                      alt="arrow icon with read article button"
                      className="cta-icon"
                    />
                  </Link>
                </button>
              </div>
            </article>
          ))}
      </main>
    </section>
  );
};

export default PopularArticle;
