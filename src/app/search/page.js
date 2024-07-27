"use client";
import React, { useEffect, useState } from "react";
import BookCard from "../component/BookCard";
import InfiniteScroll from "react-infinite-scroll-component";

const Search = () => {
  const [query, setQuery] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [categoryBooks, setCategoryBooks] = useState([]);
	const [flag, setFlag] = useState(true)
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const getCategoryBooks = async () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&startIndex=${startIndex}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    setCategoryBooks(parsedData.items);
    setTotalItems(parsedData.totalItems);
		setFlag(!flag)
  };

  const getMoreCategoryBooks = async () => {
    setStartIndex((prevStartIndex) => {
      const newStartIndex = prevStartIndex + 40;
      const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&startIndex=${newStartIndex}`;
      fetch(url)
        .then((response) => response.json())
        .then((parsedData) => {
          setCategoryBooks((prevBooks) => prevBooks.concat(parsedData.items));
        });
      return newStartIndex;
    });
  };

  return (
    <div className="container min-vh-100" style={{ marginTop: 130 }}>
      <h2>Search for books here!</h2>
      <form action={getCategoryBooks}>
        <div className="input-group mb-3 w-50">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            className="form-control glass"
            placeholder="Search Books"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button className="btn btn-primary" type="submit" id="button-addon2">
            Search
          </button>
        </div>
      </form>
      <div className="d-flex flex-wrap w-100 justify-content-between">
        <InfiniteScroll
          className="d-flex flex-wrap w-100 justify-content-center py-4"
          dataLength={categoryBooks && categoryBooks.length}
          next={getMoreCategoryBooks}
          hasMore={categoryBooks && categoryBooks.length < totalItems}
          loader={<p className="fs-4">Loading...</p>}
        >
          {categoryBooks &&
            categoryBooks.map((element) => {
              try {
                return <BookCard key={element.id} data={element} />;
              } catch (error) {
                console.error(error);
              }
            })}
				{flag && <p className="fs-2 text-center">Search results appear here</p>}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Search;
