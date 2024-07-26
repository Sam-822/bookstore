import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="vw-100 d-flex justify-content-center px-5 align-items-center"
    >
      <div className="d-flex align-items-center justify-content-start w-50 flex-column">
        <p className="text-black m-0 font-fraunces" style={{ fontSize: 50 }}>
          Discover Your Next Favorite Book at Book Palace.
        </p>
        <p className="text-black fs-5 m-0 mt-4 font-titillium">
          Welcome to Book Palace, your one-stop destination for a world of
          books! Whether you're seeking the latest bestsellers, timeless
          classics, or hidden gems, our curated collection has something for
          every reader. Dive into new adventures, explore diverse genres, and
          find inspiration with just a click. Join our community of book lovers
          and start your literary journey today!
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-start w-50">
        {/* <p className="fs-5 text-black m-0">Hello</p> */}
        <img
          src="/photo3.png"
          className="w-100 h-100 soft-edge"
          id="hero-img"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;