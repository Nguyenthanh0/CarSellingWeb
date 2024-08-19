import React, { useState } from "react";
import "./Content.css";

const Content = ({ title, description }) => {
  return (
    <div>
      <div className="content1">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Content;
