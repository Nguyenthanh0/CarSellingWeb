import React, { useState } from "react";
import FilterSidebar from "../../FilterSidebar";
import Search from "../../Search";
import Result from "../../Result";
import CarList2 from "../../Card2/CarList2";
import Page from "../../Page/Page";
import Header from "../../Header/Header";
import Content from "../Content/Content";
import "./UsedCar.css";
const UsedCar = () => {
  const [filters2, setFilters] = useState({
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
      <Content title="Used Cars" description="Homepage - Used Cars"></Content>

      <main style={{ display: "flex", background: "black" }}>
        <FilterSidebar onFilterChange={handleFilterChange} />
        <div
          style={{ display: "flex", flexDirection: "column", margin: "148px" }}
        >
          <Search onSearch={handleSearch} />
          <Result />
          <CarList2 filters={filters2} searchTerm={searchTerm} />
          <Page />
        </div>
      </main>
    </div>
  );
};

export default UsedCar;
