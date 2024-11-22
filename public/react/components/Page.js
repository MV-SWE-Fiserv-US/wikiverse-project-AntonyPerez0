import React from "react";

export const Page = ({ page, setSelectedPage }) => {
  return (
    <div>
      <h3
        onClick={() => setSelectedPage(page)}
        style={{ cursor: "pointer", color: "blue" }}
      >
        {page.title}
      </h3>
    </div>
  );
};
