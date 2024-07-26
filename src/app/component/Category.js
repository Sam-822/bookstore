import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import Link from "next/link";

const Category = (props) => {
  const { cat } = props;
  const [categoryBooks, setCategoryBooks] = useState([]);
  const getCategoryBooks = async () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${cat}&maxResults=5`;
    const data = await fetch(url);
    const parsedData = await data.json();
    // console.log(parsedData);
    setCategoryBooks(parsedData.items);
  };
  useEffect(() => {
    getCategoryBooks();
  });

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between align-items-center my-3">
        <h2 className="m-0 p-0">
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </h2>
        <Link
          href={`/genre?q=${cat}`}
          className="text-white m-0 p-0 link-underline-primary link-underline-opacity-0 "
        >
          View more &#8594;
        </Link>
      </div>
      <div className="d-flex flex-wrap w-100 justify-content-between">
        {categoryBooks &&
          categoryBooks.map((element) => {
            return <BookCard key={element.id} data={element} />;
          })}
      </div>
    </div>
  );
};

export default Category;
