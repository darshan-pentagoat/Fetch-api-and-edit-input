import React, { useState } from "react";

const Pagination = () => {
  const items = [
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5",
    "item 6",
    "item 7",
    "item 8",
    "item 9",
    "item 10",
    "item 11",
    "item 12",
    "item 13",
    "item 14",
    "item 15",
  ];

  const itemsPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage; //5
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; //0
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem); //(0,4)

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  const pageNumber = Array.from(
    {
      length: Math.ceil(items.length / itemsPerPage),
    },
    (_, idx) => idx + 1
  );
  // console.log(pageNumber);

  return (
    <div className="pagination">
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="pagination-controls">
        {pageNumber.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            style={{
              margin: "5px",
              padding: "5px 10px",
              backgroundColor: currentPage === number ? "#007bff" : "#f0f0f0",
              color: currentPage === number ? "#fff" : "#000",
              border: "1px solid #007bff",
              cursor: "pointer",
            }}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
