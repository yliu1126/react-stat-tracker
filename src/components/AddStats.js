import { useState } from "react"

const AddStats = () => {
    const [text, setText] = useState('')

    return (
        <form className="add-form" >
            <div className="form-control">
                <label>Player Name</label>
                <input type="text" placeholder="Name" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div><label>Stat Type</label></div>
            <div className="form-control stat">
                <div className="stat-cell"><input className="btn or" type="submit" value="OR" /></div>
                <div className="stat-cell"><input className="btn dr" type="submit" value="DR" /></div>
                <div className="stat-cell"><input className="btn ast" type="submit" value="AST" /></div>
                <div className="stat-cell"><input className="btn to" type="submit" value="TO" /></div>
                <div className="stat-cell"><input className="btn fifty" type="submit" value="50/50" /></div>
                <div className="stat-cell"><input className="btn defl" type="submit" value="Defl" /></div>
                <div className="stat-cell"><input className="btn stl" type="submit" value="STL" /></div>
                <div className="stat-cell"><input className="btn blk" type="submit" value="BLK" /></div>
                <div className="stat-cell"><input className="btn madeTwo" type="submit" value="Made 2" /></div>
                <div className="stat-cell"><input className="btn madeThree" type="submit" value="Made 3" /></div>
                <div className="stat-cell"><input className="btn madeFT" type="submit" value="Made FT" /></div>
                <div className="stat-cell"><input className="btn pf" type="submit" value="PF" /></div>
                <div className="stat-cell"><input className="btn missTwo" type="submit" value="Miss 2" /></div>
                <div className="stat-cell"><input className="btn missThree" type="submit" value="Miss 3" /></div>
                <div className="stat-cell"><input className="btn missFT" type="submit" value="Miss FT" /></div>
                <div className="stat-cell"><input className="btn df" type="submit" value="DF" /></div>
            </div>
        </form>
    )
}

export default AddStats
