import { useState } from "react";
import "./App.css";
import ListItem from "./components/ListItem";

function App() {
  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState("");

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("subject")) || []
  );
  const updateLocal = (arr) => {
    localStorage.setItem("subject", JSON.stringify(arr));
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleHours = (e) => {
    setHours(e.target.value);
  };
  const handleAdd = () => {
    /*   if (!subject || !hours) return; */
    const newArr = [...data, { subject: subject, hours: hours }];
    setData(newArr);
    updateLocal(newArr);
    setSubject("");
    setHours("");
  };

  const handleDecrement = (index) => {
    const list = [...data];
    list[index].hours = parseInt(list[index].hours) - 1;
    setData(list);
    updateLocal(list);
  };
  const handleIncrement = (index) => {
    const list = [...data];
    list[index].hours = parseInt(list[index].hours) + 1;
    setData(list);
    updateLocal(list);
  };

  return (
    <>
      <h3>Geekster Education Planner</h3>
      <section>
        <input
          className="subject"
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={handleSubject}
        />
        <input
          className="hour"
          type="number"
          placeholder="Hours"
          value={hours}
          onChange={handleHours}
        />
        <button onClick={handleAdd}>Add</button>
      </section>

      <section>
        {data.map((task, index) => {
          return (
            <ListItem
              key={index}
              id={index}
              subject={task.subject}
              hours={task.hours}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
