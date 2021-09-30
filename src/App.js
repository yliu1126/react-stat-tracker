import AddStats from './components/AddStats';
import Header from './components/Header'
import StatSheet from './components/StatSheet';
import { useState } from 'react';
import data from "/Users/yuxiaoliu/Desktop/work/react-stat-tracker/src/stat.json"


function App() {
  const [showStatSheet, setShowStatSheet] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isReverted, setIsReverted] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)
  const [stats, setStats] = useState(data)

  const recordStat = (stat) => {
    data.forEach(obj => {
      if(stat.text === obj.name || stat.text === obj.number || stat.text === obj.initial) {
        console.log(obj)
        for (var key in obj) {
          if (stat.type === key) {
            if (stat.type === "madeTwo") {
              obj.attemptedTwo++
              obj.madeFG++
              obj.attemptedFG++
              obj.pts = obj.pts + 2
            }
            if (stat.type === "madeThree") {
              obj.attemptedThree++
              obj.madeFG++
              obj.attemptedFG++
              obj.pts = obj.pts + 3
            }
            if (stat.type === "madeFT") {
              obj.attemptedFT++
              obj.pts++
            }
            obj[key]++
            console.log(key + obj[key])
          }
        }
      }
    })
  }

  const revertStat = (stat) => {
    data.forEach(obj => {
      if(stat.prevText === obj.name || stat.prevText === obj.number || stat.prevText === obj.initial) {
        console.log(obj)
        for (var key in obj) {
          if (stat.prevType === key) {
            if (obj[key] === 0) {
              alert("Cannot have negative stat")
              break;
            }
            if (stat.prevType === "madeTwo") {
              obj.attemptedTwo--
              obj.madeFG--
              obj.attemptedFG--
              obj.pts = obj.pts - 2
            }
            if (stat.prevType === "madeThree") {
              obj.attemptedThree--
              obj.madeFG--
              obj.attemptedFG--
              obj.pts = obj.pts - 3
            }
            if (stat.prevType === "madeFT") {
              obj.attemptedFT--
              obj.pts--
            }
            obj[key]--
            console.log(key + obj[key])
          }
        }
      }
    })
  }

  const deleteStat = (stat) => {
    data.forEach(obj => {
      if(stat.text === obj.name || stat.text === obj.number || stat.text === obj.initial) {
        console.log(obj)
        for (var key in obj) {
          if (stat.type === key) {
            if (obj[key] === 0) {
              alert("Cannot have negative stat")
              break;
            }
            if (stat.type === "madeTwo") {
              obj.attemptedTwo--
              obj.madeFG--
              obj.attemptedFG--
              obj.pts = obj.pts - 2
            }
            if (stat.type === "madeThree") {
              obj.attemptedThree--
              obj.madeFG--
              obj.attemptedFG--
              obj.pts = obj.pts - 3
            }
            if (stat.type === "madeFT") {
              obj.attemptedFT--
              obj.pts--
            }
            obj[key]--
            console.log(key + obj[key])
          }
        }
      }
    })
  }


  return (
    <div className="container">
      <Header onShow={() => setShowStatSheet(!showStatSheet)} showStat={showStatSheet}/>
      <AddStats onRecord={recordStat} isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} revertStat={revertStat} setIsReverted={setIsReverted} deleteStat={deleteStat} setIsDeleted={setIsDeleted}/>
      {showStatSheet && <StatSheet stats={stats}/>}
    </div>
  );
}

export default App;
