import React from "react";

export const Page = ({ page, setSelectedPage }) => {
  return (
    <>
      {/* added a set for the page */}
      <h3 onClick={() => setSelectedPage(page)}>{page.title}</h3>
    </>
  );
};
