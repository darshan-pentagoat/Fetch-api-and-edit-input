import React, { useState } from "react";
import "./index.css";

const ToDo = () => {
  const [value, setValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [saveEdit, setSaveEdit] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const toggle = () => {
    if (isEditing) {
      setSaveEdit(value);
    }
    setIsEditing(!isEditing);
  };

  const [list, setList] = useState([]);

  // const addTodo = (item) => {
  //   setList((cur) => [...cur, { ...item }]);
  // };

  const addTodo = (item) => {
    setList((cur) => [...cur, item]);
    setValue("");
  };

  // const handleDelete = () => {
  //   list.filter((item) => {
  //     return item.id !== list.id;
  //   });
  // };

  const handleDelete = (index) => {
    setList((cur) => cur.filter((_, idx) => idx !== index));
  };

  return (
    <div className="todoContainer">
      <h2>Lists</h2>
      <input type="text" value={value} onChange={handleChange} />
      <button className="btn btn-success" onClick={() => addTodo(value)}>
        Add
      </button>

      <table>
        <tbody>
          {list.map((item, idx) => (
            <tr key={idx}>
              {/* <td>{item}</td> */}
              {isEditing ? (
                <input type="text" />
              ) : (
                <p>
                  {saveEdit} || {item}
                </p>
              )}
              <td>
                <button className="btn btn-info" onClick={toggle}>
                  {isEditing ? "Save" : "Edit"}
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(idx)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDo;
