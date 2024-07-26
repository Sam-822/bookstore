"use client";
import React from "react";

const Categories = () => {
  const categories = [
    "antiques%20&%20collectibles",
    "architecture",
    "art",
    "bibles",
    "biography%20&%20autobiography",
    "body, mind%20&%20spirit",
    "business%20&%20economics",
    "comics%20&%20graphic novels",
    "computers",
    "cooking",
    "crafts%20&%20hobbies",
    "design",
    "drama",
    "education",
    "family%20&%20relationships",
    "fiction",
    "foreign language%20study",
    "games%20&%20activities",
    "gardening",
    "health%20&%20fitness",
    "history",
    "house%20&%20home",
    "humor",
    "juvenile%20fiction",
    "juvenile%20nonfiction",
    "language%20arts%20&%20disciplines",
    "law",
    "literary%20collections",
    "literary%20criticism",
    "mathematics",
    "medical",
    "music",
    "nature",
    "performing%20arts",
    "pets",
    "philosophy",
    "photography",
    "poetry",
    "political%20science",
    "psychology",
    "reference",
    "religion",
    "science",
    "self-help",
    "social%20science",
    "sports%20&%20recreation",
    "study%20aids",
    "technology%20&%20engineering",
    "transportation",
    "travel",
    "true%20crime",
    "young%20adult%20fiction",
    "young%20adult%20nonfiction",
  ];

  return (
    <div
      className="container d-flex flex-wrap justify-content-between"
      style={{ marginTop: 160, marginBottom: 80 }}
    >
      <p className="fs-1 text-white w-100">Categories</p>
      {categories.map((element) => {
        return (
          <a
            key={element}
            href={`/genre?q=${element}`}
            className="fs-4 mx-3  my-2 glass p-2 rounded border border-black text-reset text-decoration-none"
          >
            {element.charAt(0).toUpperCase() +
              element.substring(1).split("%20").join(" ")}
          </a>
        );
      })}
    </div>
  );
};

export default Categories;
