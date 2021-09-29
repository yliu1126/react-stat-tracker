import { useState } from "react"

const AddStats = ({ onRecord }) => {
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
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Player Name</label>
                <input type="text" placeholder="Name" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div><label>Stat Type</label></div>
            <div className="form-control stat">
                <div className="stat-cell"><input id="or" className="btn" type="button" value="OR" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="dr" className="btn" type="button" value="DR" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="ast" className="btn" type="button" value="AST" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="to" className="btn" type="button" value="TO" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="fifty" className="btn" type="button" value="50/50" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="defl" className="btn" type="button" value="Defl" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="stl" className="btn" type="button" value="STL" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="blk" className="btn" type="button" value="BLK" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="madeTwo" className="btn" type="button" value="Made 2" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="madeThree" className="btn" type="button" value="Made 3" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="madeFT" className="btn" type="button" value="Made FT" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="pf" className="btn" type="button" value="PF" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="missTwo" className="btn" type="button" value="Miss 2" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="missThree" className="btn" type="button" value="Miss 3" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="missFT" className="btn" type="button" value="Miss FT" onClick={(e) => setType(e.target.id)}/></div>
                <div className="stat-cell"><input id="df" className="btn" type="button" value="DF" onClick={(e) => setType(e.target.id)}/></div>
            </div>
            <input type="submit" value='record' className='btn btn-block'/>
        </form>
    )
}

export default AddStats
