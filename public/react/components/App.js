import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import { NewPageForm } from "./NewPageForm";
import { PageDetails } from "./PageDetails";

// Import and prepend the API URL to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [isAddingArticle, setIsAddingArticle] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <main>
      <h1>WikiVerse</h1>
      <h2>An interesting 📚</h2>
      <button onClick={() => setIsAddingArticle(true)}>Add New Page</button>
      {isAddingArticle ? (
        <NewPageForm
          setIsAddingArticle={setIsAddingArticle}
          fetchPages={fetchPages}
        />
      ) : selectedPage ? (
        <PageDetails
          page={selectedPage}
          setSelectedPage={setSelectedPage}
          fetchPages={fetchPages}
        />
      ) : (
        <PagesList pages={pages} setSelectedPage={setSelectedPage} />
      )}
    </main>
  );
};
