import img4 from "../assets/img-4.png";
import arrowIcon from "../assets/arrow-right.svg";

const PopularArticle = () => {
  return (
    <section className="popular-article--section recent-article--section max-width">
      <h2>Popular Articles</h2>
      <main className="blog-cards--wrapper">
        <article className="blog-card">
          <div className="blog--image">
            <img src={img4} alt="" />
          </div>
          <div className="blog-details">
            <small className="blog-upload--date">SEPTEMBER 06, 2022</small>
            <h4 className="blog-title">
              Why most people will never be great at lifestyle, relationship in
              our era
            </h4>
            <p className="blog-description">
              He sat across from her trying to imagine it was the first time. It
              wasn't. Had it been a hundred? It quite possibly could have been.
              Two hundred? Probably not.
            </p>
            <button className="read--more_btn link--button">
              <Link to='/single-article'>
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

        <article className="blog-card">
          <div className="blog--image">
            <img src={img4} alt="" />
          </div>
          <div className="blog-details">
            <small className="blog-upload--date">SEPTEMBER 06, 2022</small>
            <h4 className="blog-title">
              Why most people will never be great at lifestyle, relationship in
              our era
            </h4>
            <p className="blog-description">
              He sat across from her trying to imagine it was the first time. It
              wasn't. Had it been a hundred? It quite possibly could have been.
              Two hundred? Probably not.
            </p>
            <button className="read--more_btn link--button">
              <a href="">
                <span>Read Article </span>{" "}
                <img
                  src={arrowIcon}
                  alt="arrow icon with read article button"
                  className="cta-icon"
                />
              </a>
            </button>
          </div>
        </article>

        <article className="blog-card">
          <div className="blog--image">
            <img src={img4} alt="" />
          </div>
          <div className="blog-details">
            <small className="blog-upload--date">SEPTEMBER 06, 2022</small>
            <h4 className="blog-title">
              Why most people will never be great at lifestyle, relationship in
              our era
            </h4>
            <p className="blog-description">
              He sat across from her trying to imagine it was the first time. It
              wasn't. Had it been a hundred? It quite possibly could have been.
              Two hundred? Probably not.
            </p>
            <button className="read--more_btn link--button">
              <a href="">
                <span>Read Article </span>{" "}
                <img
                  src={arrowIcon}
                  alt="arrow icon with read article button"
                  className="cta-icon"
                />
              </a>
            </button>
          </div>
        </article>
      </main>
    </section>
  );
};

export default PopularArticle;
