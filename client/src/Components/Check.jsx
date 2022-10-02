import { useState, useEffect } from "react";
import Axios from "axios";
import StatSheet from "./StatSheet";
import data from "../stat.json"

function Check() {

  const [display, setDisplay] = useState(data);
  const [date, setDate] = useState("")

  console.log(date)

  const checkStat = () => {
    Axios.get("http://localhost:3001/getStats/date/" + date).then((response) => {
      setDisplay(response.data[0].stats)
    });
  }

  return (
    <div className="check">
      <input type="date" placeholder="Date..."onChange={(event) => {
            setDate(event.target.value);
          }}/>
      <button onClick={checkStat}>check</button>
      <StatSheet stats={display}/>
    </div>
  );
}

export default Check;
