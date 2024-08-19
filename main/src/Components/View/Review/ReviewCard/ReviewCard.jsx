import React from "react";

const ReviewCard = ({
  image,
  title,
  description,
  author,
  date,
  rating,
  comments,
}) => {
  return (
    <div className="review-card">
      <div
        className="review-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="play-button">
          <i className="fa fa-play"></i>
        </div>
      </div>
      <div className="review-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="review-footer">
          <div className="rating">{Array(rating).fill("★").join("")}</div>
          <div className="author-info">
            <img src={author.image} alt={author.name} />
            <p>{author.name}</p>
          </div>
          <div className="comments">
            <i className="fa fa-comment"></i>
            {comments} Comment{comments > 1 ? "s" : ""}
          </div>
          <div className="date">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
