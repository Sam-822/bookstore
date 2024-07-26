"use client";
import React, { useEffect, useState } from "react";
import BookCard from "../component/BookCard";
import { useSearchParams } from "next/navigation";
import InfiniteScroll from "react-infinite-scroll-component";
import { Suspense } from "react";

const Genre = () => {
  const searchParams = useSearchParams();
  let genre = searchParams.get("q");

  const [startIndex, setStartIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [categoryBooks, setCategoryBooks] = useState([]);

  const getCategoryBooks = async () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${genre}&maxResults=40&startIndex=${startIndex}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    setCategoryBooks(parsedData.items);
    setTotalItems(parsedData.totalItems);
  };

  const getMoreCategoryBooks = async () => {
    setStartIndex((prevStartIndex) => {
      const newStartIndex = prevStartIndex + 40;
      const url = `https://www.googleapis.com/books/v1/volumes?q=${genre}&maxResults=40&startIndex=${newStartIndex}`;
      fetch(url)
        .then((response) => response.json())
        .then((parsedData) => {
          setCategoryBooks((prevBooks) => prevBooks.concat(parsedData.items));
        });
      return newStartIndex;
    });
  };

  useEffect(() => {
    getCategoryBooks();
  }, []);

  return (
    <Suspense>
      <div className="container" style={{ marginTop: 160 }}>
        <div className="d-flex justify-content-between align-items-center my-3">
          <h2 className="m-0 p-0">
            {genre && genre.charAt(0).toUpperCase() + genre.slice(1)}
          </h2>
        </div>
        <div className="d-flex flex-wrap w-100 justify-content-between">
          <InfiniteScroll
            className="d-flex flex-wrap w-100 justify-content-between px-4 py-4"
            dataLength={categoryBooks.length}
            next={getMoreCategoryBooks}
            hasMore={categoryBooks.length < totalItems}
            loader={<p className="fs-4">Loading...</p>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {categoryBooks &&
              categoryBooks.map((element) => {
                try {
                  return <BookCard key={element.id} data={element} />;
                } catch (error) {
                  console.error(error);
                }
              })}
          </InfiniteScroll>
        </div>
      </div>
    </Suspense>
  );
};

export default Genre;
