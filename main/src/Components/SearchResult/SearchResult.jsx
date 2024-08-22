import React, { useState } from 'react';
import Header from '../Header/Header';
import FilterSidebar from '../FilterSidebar';
import Search from '../Search';
import Result from '../Result';
import Page from '../Page/Page';
import Content from '../View/Content/Content';
import './SearchResult.css';
import Data from '../../Data';
import Review from '../Review/Review';
import SearchList from '../SearchCard/SearchList'
const SearchResult = () => {
  const [filters, setFilters] = useState({
    year: [],
    brand: [],
    priceRange: [0, 3000000],
    model: "",
    bodyType: "",
    transmission: "",
    fuelType: "",
    drivetrain: "",
    passengerCapacity: "",
    exteriorColor: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Header />
      <Content title="New Cars" description="Homepage - New Cars" />
      <main style={{ display: "flex", background: "black" }}>
        <FilterSidebar onFilterChange={handleFilterChange} />
        <div
          style={{ display: "flex", flexDirection: "column", margin: "148px" }}
        >
          <Search onSearch={handleSearch} />
          <Result />
          <SearchList filters={filters} searchTerm={searchTerm} />
          <Page />
        </div>
      </main>
    </div>
  );
}

export default SearchResult;