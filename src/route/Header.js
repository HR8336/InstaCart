import React, { useState } from "react";
import "../css/Header.css";

const Header = () => {
  const [search, setSearch] = useState("");

  const handleOnSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="header">
        <div className="logo">
          Insta<font>Cart</font>
        </div>
        <div>
          <input
            type="search"
            value={search}
            onChange={handleOnSearch}
            placeholder="Search topic"
            style={{ width: "1600px", height: "50px" }}
          />
        </div>

        <div>
          <button className="button" type="button">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
