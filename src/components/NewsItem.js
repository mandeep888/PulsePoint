import React from "react";

const NewsItem =(props)=> {
    let { title, description, imageUrl, url, author, date, source } = props;

    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ left: "85%", zIndex: "1" }}
          >
            {source.name}
          </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                {" "}
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
