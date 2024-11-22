import React, { useState } from "react";
import apiURL from "../api";

//made a method for the new form
const NewPageForm = ({ setIsAddingArticle, fetchPages }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tags, setTags] = useState("");

  //made a method to handle the submit function
  const handleSubmit = async (event) => {
    const articleData = { title, content, name, email, tags };
    const response = await fetch(`${apiURL}/wiki`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articleData),
    });
    if (response.ok) {
      await fetchPages();
      setIsAddingArticle(false);
    } else {
      console.log("Failed to add article");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Author Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Author Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Tags (separated by spaces):</label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={() => setIsAddingArticle(false)}>
        Cancel
      </button>
    </form>
  );
};

export default NewPageForm;
