import React from "react";

const BookCard = (props) => {
  const { data } = props;

  return (
    <>
      <div className="card my-3 my-card d-flex flex-column justify-content-between pb-4 ">
        <a
          href={data.volumeInfo.infoLink ? data.volumeInfo.infoLink : "#"}
          target="_blank"
          className=" link-underline link-underline-opacity-0 text-black stretched-link"
        >
          <div className="w-100 d-flex justify-content-center">
            {data.volumeInfo.imageLinks ? (
              <img
                src={data.volumeInfo.imageLinks.thumbnail}
                className="card-img-top"
                alt="Book Cover"
                height={"300px"}
                width={"auto"}
                style={{ borderRadius: 0 }}
              />
            ) : (
              <i className="bi bi-journal-text text-white" style={{ fontSize: 160 }}></i>
            )}
          </div>
          <div className="card-body">
            <h5 className="card-title text-white text-truncate">
              {data.volumeInfo.title}
            </h5>
            <p className="card-title text-white">
              {data.volumeInfo.authors &&
                "Author: " + data.volumeInfo.authors[0]}
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default BookCard;
