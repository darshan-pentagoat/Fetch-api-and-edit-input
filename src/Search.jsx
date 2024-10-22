import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const lists = [
    "Lorem ipsum dolor sit amet consectetur.",
    "apple",
    "grapes",
    "mango",
    "banana",
    "gauva",
  ];

  const filterItem = lists.filter((item) =>
    item.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <ul>
          {filterItem.map((list) => (
            <li>{list}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Search;
