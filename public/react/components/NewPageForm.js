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
    <div>
      <h2>New Page Form</h2>
    </div>
  );
};

export default NewPageForm;
