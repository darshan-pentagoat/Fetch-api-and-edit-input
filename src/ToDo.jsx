import React, { useState } from "react";
import "./index.css";

const ToDo = () => {
  const [value, setValue] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const toggle = (idx) => {
    if (isEditing === idx) {
      const updatedList = [...list];
      updatedList[idx] = editValue;
      setList(updatedList);
      setIsEditing(null);
    } else {
      setIsEditing(idx);
      setEditValue(list[idx]);
    }
  };

  const addTodo = (item) => {
    setList((cur) => [...cur, item]);
    setValue("");
  };

  const handleDelete = (index) => {
    setList((cur) => cur.filter((_, idx) => idx !== index));
  };

  return (
    <div className="todoContainer">
      <h2>Lists</h2>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Add new items"
      />
      <button className="btn btn-success" onClick={() => addTodo(value)}>
        Add
      </button>

      <table>
        <tbody>
          {list.map((item, idx) => (
            <tr key={idx}>
              <td>
                {isEditing === idx ? (
                  <input
                    type="text"
                    value={editValue}
                    onChange={handleEditChange}
                  />
                ) : (
                  <p>{item}</p>
                )}
              </td>
              <td>
                <button className="btn btn-info" onClick={() => toggle(idx)}>
                  {isEditing === idx ? "Save" : "Edit"}
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
