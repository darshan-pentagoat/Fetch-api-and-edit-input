import React, { useState } from "react";

const EditableInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [savedValue, setSavedValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const toggle = () => {
    if (isEditing) {
      setSavedValue(inputValue);
    }
    setIsEditing(!isEditing);
  };

  return (
    <>
      {isEditing ? (
        <input type="text" value={inputValue} onChange={handleChange} />
      ) : (
        <p>{savedValue || "Click edit"}</p>
      )}

      <button onClick={toggle}> {isEditing ? "Save" : "Edit"}</button>
    </>
  );
};

export default EditableInput;
