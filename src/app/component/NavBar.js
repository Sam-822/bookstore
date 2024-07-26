import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="vw-100 nav-glass">
      <div className="container h-100 d-flex align-items-center justify-content-between">
        <Link className="td-none" href="/">
          <h1 className="m-0 ">Books Palace</h1>
        </Link>
        <Link href="/categories" className="m-0 td-none">
          View All Categories
        </Link>
        <Link href="/search">
          <button className="btn btn-primary m-0">Search for Books</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
