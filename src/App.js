import AddStats from './components/AddStats';
import Header from './components/Header'
import StatSheet from './components/StatSheet';
import { useState } from 'react';
import data from "/Users/yuxiaoliu/Desktop/work/react-stat-tracker/src/stat.json"


function App() {
  const [showStatSheet, setShowStatSheet] = useState(true);
  const [stats, setStats] = useState(data)

  const recordStat = (stat) => {
    console.log(stat)
  }

  return (
    <div className="container">
      <Header onShow={() => setShowStatSheet(!showStatSheet)} showStat={showStatSheet}/>
      <AddStats onRecord={recordStat}/>
      {showStatSheet && <StatSheet stats={stats}/>}
    </div>
  );
}

export default App;
