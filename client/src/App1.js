import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfStats, setListOfStats] = useState([
    { id: 1, date: "09/08/2022", stats: [] },
  ]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getStats").then((response) => {
      setListOfStats(response.data);
    });
  }, []);

  const createStat = () => {
    Axios.post("http://localhost:3001/createStats").then((response) => {
      alert("stat created");
    });
  };

  return (
    <div className="App">
      <div className="statsDisplay">
        {listOfStats.map((stat) => {
          return (
            <div>
              <h1>Date: {stat.date}</h1>
              <h1>Stats: {stat.stats}</h1>
            </div>
          );
        })}
      </div>
      <div>
        <input type="date" placeholder="Date..." />
        <input type="text" placeholder="Stat..." />
        <button onClick={createStat}>create stat</button>
      </div>
    </div>
  );
}

export default App;
