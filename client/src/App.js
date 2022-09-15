import { Route, Routes } from "react-router-dom";
import "./App.css";
import Check from "./Components/Check";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Record from "./Components/Record";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Record" element={<Record />}></Route>
        <Route path="/Check" element={<Check />}></Route>
      </Routes>
    </>
  );
}

export default App;
