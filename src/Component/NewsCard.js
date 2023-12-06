import React from "react";

const NewsCard = ({
  date,
  title,
  author,
  source,
  newsUrl,
  imageUrl,
  description,
}) => {
  return (
    <div className="my-3">
      <div className="card d-flex flex-column">
        <span
          className="position-relative top-0 start-80 translate-middle badge bg-danger"
          style={{ left: "83%", zIndex: "1", width: "40%" }}
        >
          {source}
          {/* <span className="visually-hidden">unread messages</span> */}
        </span>
        <img
          src={
            !imageUrl
              ? "http://thumbs.dreamstime.com/b/business-news-concept-tablet-pc-19301952.jpg"
              : imageUrl
          }
          className="card-img-top flex-grow-1"
          alt={title}
          style={{ objectFit: "cover", flex: "0 0 60%" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <div className="card-footer my-2">
            <small className="text-danger">
              By {author} on {new Date(date).toGMTString()}{" "}
            </small>
          </div>
          {/* eslint-disable-next-line */}
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary mt-auto">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;