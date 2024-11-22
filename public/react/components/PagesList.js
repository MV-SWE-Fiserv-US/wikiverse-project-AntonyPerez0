import React from "react";
import { Page } from "./Page";

export const PagesList = ({ pages, setSelectedPage }) => {
  return (
    <div>
      {pages.map((page, idx) => (
        <Page key={idx} page={page} setSelectedPage={setSelectedPage} />
      ))}
    </div>
  );
};
