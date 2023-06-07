import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [activity, setActivity] = useState("");
  const [list, setList] = useState([]);

  function addActivity() {
    setList((list) => {
      const updatedlist = [...list, activity];
      console.log(updatedlist);
      setActivity("");
      return updatedlist;
    });
  }
  function remove(i) {
    const updatedlist = list.filter((elem, id) => {
      return i !== id;
    });
    setList(updatedlist);
  }

  return (
    <div className="container App">
      <h1 className="container mt-5"> To-do List </h1>
      <input
        className="container border-5 mt-2 border-success rounded-pill bg-light"
        type="text"
        placeholder="Type your activity here"
        value={activity}
        onChange={(e) => {
          setActivity(e.target.value);
        }}
      />
      <button
        onClick={addActivity}
        type="button"
        className="btn btn-success rounded-pill mt-3"
      >
        Add activity
      </button>
      <p className="container mt-3">Below is your activity list</p>
      {list !== [] &&
        list.map((data, i) => {
          return (
            <ul className="list-group bg-success" key={i}>
              <li className="list-group-item mt-2 bg-dark shadow-lg p-3 mb-1 bg-body-tertiary rounded">
                {data}
              </li>
              <button
                onClick={() => remove(i)}
                type="button"
                className="btn btn-success rounded-pill mt-2"
              >
                Remove ( - )
              </button>
            </ul>
          );
        })}
    </div>
  );
}
