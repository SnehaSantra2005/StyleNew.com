import React, { useState } from "react";
import "./DescriptionBox.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [reviews, setReviews] = useState([
    {
      name: "Ayesha Khan",
      image: "https://i.pravatar.cc/100?img=5",
      rating: 5,
      text: "Stylish and super comfy. A must-buy for fashion lovers!"
    },
    {
      name: "Sneha Das",
      image: "https://i.pravatar.cc/100?img=12",
      rating: 4,
      text: "Looks just like the photos. Fits perfectly!"
    }
  ]);

  const [newRating, setNewRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [newText, setNewText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newRating === 0 || newText.trim() === "") return;

    const newReview = {
      name: "Guest User",
      image: "https://i.pravatar.cc/100",
      rating: newRating,
      text: newText.trim()
    };

    setReviews([newReview, ...reviews]);
    setNewRating(0);
    setHoverRating(0);
    setNewText("");
  };

  return (
    <div className="descriptionbox">
      <div className="tabs">
        <div
          className={`tab ${activeTab === "description" ? "active" : ""}`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </div>
        <div
          className={`tab ${activeTab === "reviews" ? "active" : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews ({reviews.length})
        </div>
      </div>

      <div className="tab-content">
        {activeTab === "description" ? (
          <div className="description-section">
            <h2>Product Information</h2>
            <p>
              This exclusive fashion piece blends comfort with chic aesthetics.
              Made with premium fabric and designed to suit all seasons, it’s the perfect addition to any wardrobe.
            </p>
            <p>
              Available in multiple sizes and colors, with premium stitching and modern fit. Ideal for casual, semi-formal, or weekend looks.
            </p>
          </div>
        ) : (
          <div className="reviews-section">
            <form className="review-form" onSubmit={handleSubmit}>
              <h3>Leave a Review</h3>
              <div className="star-input">
                {[1, 2, 3, 4, 5].map((star) => (
                  <img
                    key={star}
                    src={star <= (hoverRating || newRating) ? star_icon : star_dull_icon}
                    alt="star"
                    onClick={() => setNewRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="star-clickable"
                  />
                ))}
              </div>
              <textarea
                placeholder="Write your review..."
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              ></textarea>
              <button type="submit">Submit Review</button>
            </form>

            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <img src={review.image} alt="profile" className="review-image" />
                <div className="review-details">
                  <h4>{review.name}</h4>
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={i < review.rating ? star_icon : star_dull_icon}
                        alt="star"
                      />
                    ))}
                  </div>
                  <p>{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
