import React, { useState } from "react";
import FilterSidebar from "../../FilterSidebar";
import Search from "../../Search";
import Result from "../../Result";
import CarList from "../../Card/CarList";
import Page from "../../Page/Page";
import Header from "../../Header/Header";
import Content from "../Content/Content";
import "./NewCar.css";

const NewCar = () => {
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
          <CarList filters={filters} searchTerm={searchTerm} />
          <Page />
        </div>
      </main>
    </div>
  );
};

export default NewCar;
