"use client";
import React from "react";

const Categories = () => {
  const categories = [
    "antiques%20&%20collectibles",
    "literary%20collections",
    "architecture",
    "literary%20criticism",
    "art",
    "mathematics",
    "bibles",
    "medical",
    "biography%20&%20autobiography",
    "music",
    "body, mind%20&%20spirit",
    "nature",
    "business%20&%20economics",
    "performing%20arts",
    "comics%20&%20graphic novels",
    "pets",
    "computers",
    "philosophy",
    "cooking",
    "photography",
    "crafts%20&%20hobbies",
    "poetry",
    "design",
    "political%20science",
    "drama",
    "psychology",
    "education",
    "reference",
    "family%20&%20relationships",
    "religion",
    "fiction",
    "science",
    "foreign language%20study",
    "self-help",
    "games%20&%20activities",
    "social%20science",
    "gardening",
    "sports%20&%20recreation",
    "health%20&%20fitness",
    "study%20aids",
    "history",
    "technology%20&%20engineering",
    "house%20&%20home",
    "transportation",
    "humor",
    "travel",
    "juvenile%20fiction",
    "true%20crime",
    "juvenile%20nonfiction",
    "young%20adult%20fiction",
    "language%20arts%20&%20disciplines",
    "young%20adult%20nonfiction",
    "law",
  ];

  return (
    <div className="container d-flex flex-wrap justify-content-between" style={{marginTop:160}}>
			<p className="fs-1 text-white w-100">Categories</p>
      {categories.map((element) => {
        return <a key={element} href={`/genre?q=${element}`} className="fs-4 mx-3  my-2 glass p-2 rounded border border-black text-reset text-decoration-none">{ element.charAt(0).toUpperCase() +  element.substring(1).split('%20').join(" ")}</a>;
      })}
    </div>
  );
};

export default Categories;
