import React from "react";
import { Page } from "./Page";

export const PagesList = ({ pages }) => {
  return (
    <>
      {pages.map((page, idx) => {
        // added the set for the selected page in the page return.
        return <Page page={page} key={idx} setSelectedPage={setSelectedPage} />;
      })}
    </>
  );
};
