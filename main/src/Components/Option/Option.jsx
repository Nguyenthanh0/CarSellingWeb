import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, Link } from "react";
import "./Option.css";
import SearchResult2 from "../View/SeacrhResult2/SearchResult2";
import SearchResult1 from "../View/SearchResult1/SearchResult1";
const Options = () => {
  const [activeOption, setActiveOption] = useState("list");

  return (
    <div className="options">
      <button
        className={`options-button ${activeOption === "list" ? "active" : ""}`}
        onClick={() => setActiveOption("list")}
      >
        <i className="fas fa-list"></i> {/* Biểu tượng danh sách */}
      </button>
      <button
        className={`options-button ${activeOption === "grid" ? "active" : ""}`}
        onClick={() => setActiveOption("grid")}
      >
        <i className="fas fa-th"></i> {/* Biểu tượng lưới */}
        <Routes>
          <Route path="/searchResult2" element={<SearchResult2 />} />
        </Routes>
      </button>
    </div>
  );
};

export default Options;
