import { useState, useEffect } from "react"

const AddStats = ({ onRecord, setIsSubmitted }) => {
    const [text, setText] = useState('')
    const [type, setType] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a stat')
            return
        }

        onRecord({ text, type })
        setText('')
        setIsSubmitted(true)
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            onSubmit(e)
        }
    }
    
    const twoCalls = e =>{
    setText(e.target.value)
    setIsSubmitted(false)}

    return (
        <form className="add-form" onSubmit={onSubmit} onKeyDown={handleKeyPress}>
            <div className="form-control">
                <label>Player Name/Initials/Number</label>
                <input id="text" type="text" placeholder="Name" value={text} onChange={twoCalls}/>
            </div>
            <div><label>Stat Type</label></div>
            <div className="form-control stat">
                <div className="stat-cell"><input id="or" className="stat-btn" type="button" value="OR" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="dr" className="stat-btn" type="button" value="DR" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="ast" className="stat-btn" type="button" value="AST" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="to" className="stat-btn" type="button" value="TO" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="fifty" className="stat-btn" type="button" value="50/50" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="defl" className="stat-btn" type="button" value="Defl" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="stl" className="stat-btn" type="button" value="STL" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="blk" className="stat-btn" type="button" value="BLK" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="madeTwo" className="stat-btn" type="button" value="Made 2" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="madeThree" className="stat-btn" type="button" value="Made 3" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="madeFT" className="stat-btn" type="button" value="Made FT" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="pf" className="stat-btn" type="button" value="PF" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="attemptedTwo" className="stat-btn" type="button" value="Attempt 2" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="attemptedThree" className="stat-btn" type="button" value="Attempt 3" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="attemptedFT" className="stat-btn" type="button" value="Attempt FT" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="df" className="stat-btn" type="button" value="DF" onClick={(e) => setType(e.target.id)}/></div>
            </div>
            <input id="submit" type="submit" value='record' className='btn  btn-block'/>
            </form>
    )
}

export default AddStats
