import React from "react";
import apiURL from "../api";

export const PageDetails = ({ page, setSelectedPage, fetchPages }) => {
  const handleDelete = async () => {
    try {
      await fetch(`${apiURL}/wiki/${page.slug}`, {
        method: "DELETE",
      });
      await fetchPages();
      setSelectedPage(null);
    } catch (err) {
      console.log("Error deleting the page: ", err);
    }
  };

  return (
    <div>
      <h2>{page.title}</h2>
      <p>
        <strong>Author:</strong> {page.name}
      </p>
      <p>
        <strong>Content:</strong> {page.content}
      </p>
      <p>
        <strong>Tags:</strong> {page.tags}
      </p>
      <p>
        <strong>Date:</strong> {new Date(page.createdAt).toLocaleDateString()}
      </p>
      <button onClick={() => setSelectedPage(null)}>Back to Wiki List</button>
      <button
        onClick={handleDelete}
        style={{ marginLeft: "10px", color: "red" }}
      >
        Delete Page
      </button>
    </div>
  );
};
