import newsImage1 from "../assets/news-img1.png";
import articleImg from "../assets/article-img.png";

const SingleArticle = () => {
  return (
    <main className="post--wrapper">
      <PostBreadcrumb />
      <PostHeader />
      <PostBodyContent />
      <ArticleSharing />
    </main>
  );
};

const PostBreadcrumb = () => {
  return (
    <section className="breadcrumb-container max-width">
      <article className="breadcrumb--wrapper">
        <span>
          <a href="">Home / </a>
        </span>
        <span>
          <a href="">Lifestyle</a>
        </span>
      </article>
    </section>
  );
};
const PostHeader = () => {
  return (
    <section className="banner--container section-flex max-width">
      <article className="text-description">
        <div className="date--duration-tag">
          <small className="date-tag">4th January, 2023</small>
          <span className="circle"></span>
          <small className="duration">6 min read</small>
        </div>

        <h1>The concept of space in relationship: When does it get too much</h1>
      </article>

      <article className="img-container">
        <img src={newsImage1} alt="" />
      </article>
    </section>
  );
};

const PostBodyContent = () => {
  return (
    <section className="article-container max-width_1200">
      <p className="semi-bold">
        He took a sip of the drink. He wasn't sure whether he liked it or not,
        but at this moment it didn't matter. She had made it especially for him
        so he would have forced it down even if he had absolutely hated it.
        That's simply the way things worked. She made him a new-fangled drink
        each day and he took a sip of it and smiled, saying it was excellent.He
        took a sip of the drink. He wasn't sure whether he liked it or not, but
        at this moment it didn't matter. She had made it especially for him so
        he would have forced it down even if he had absolutely hated it. That's
        simply the way things worked. She made him a new-fangled drink each day
        and he took a sip of it and smiled, saying it was excellent.
      </p>

      <p>
        It was a question of which of the two she preferred. On the one hand,
        the choice seemed simple. The more expensive one with a brand name would
        be the choice of most. It was the easy choice. The safe choice. But she
        wasn't sure she actually preferred it. She wanted rainbow hair. That's
        what she told the hairdresser. It should be deep rainbow colors, too.
        She wasn't interested in pastel rainbow hair. She wanted it deep and
        vibrant so there was no doubt that she had done this on purpose.
      </p>

      <img src={articleImg} alt="" />

      <p>
        It all started with a random letter. Several of those were joined forces
        to create a random word. The words decided to get together and form a
        random sentence. They decided not to stop there and it wasn't long
        before a random paragraph had been cobbled together. The question was
        whether or not they could continue the momentum long enough to create a
        random short story.`
      </p>

      <blockquote>
        “I have always believed that each man makes his own happiness and is
        responsible for his own problems. It is a simple philosophy.”
        <cite>- Ray Kroc, Physchologist</cite>
      </blockquote>

      <h4>Things to consider while trying</h4>
      <p>
        There was nothing else to do. The deed had already been done and there
        was no going back. It now had been become a question of how they were
        going to be able to get out of this situation and escape:
      </p>

      <ol>
        <li>
          There was nothing else to do. The deed had already been done and there
          was no going back. It now had been become a question of how they were
          going to be able to get out of this situation and escape.
        </li>
        <li>
          He walked down the steps from the train station in a bit of a hurry
          knowing the secrets in the briefcase must be secured as quickly as
          possible.
        </li>
      </ol>

      <h4>Conclusion</h4>
      <p>
        It really didn't matter what they did to him. He's already made up his
        mind. Whatever came his way, he was prepared for the consequences. He
        knew in his heart that the sacrifice he made was done with love and not
        hate no matter how others decided to spin it.
      </p>
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
