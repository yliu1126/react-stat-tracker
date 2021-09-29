import { useState } from 'react'

const StatSheet = ({ stats }) => {

    

    return (
        <div class="table-wrapper">
        <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>OR</th>
            <th>DR</th>
            <th>REB</th>
            <th>AST</th>
            <th>TO</th>
            <th>50/50</th>
            <th>Defl</th>
            <th>STL</th>
            <th>BLK</th>
            <th>PF</th>
            <th>Drawn Foul</th>
            <th>Made 2</th>
            <th>Attempted 2</th>
            <th>Made 3</th>
            <th>Attempted 3</th>
            <th>Made FG</th>
            <th>Attempted FG</th>
            <th>Made FT</th>
            <th>Attempted FT</th>
            <th>PTS</th>
            </tr>
        </thead>
        <tbody>
            {stats.map((stat) => (
                <><tr>
                    <td>{stat.name}</td>
                    <td>{stat.or}</td>
                    <td>{stat.dr}</td>
                    <td>{stat.reb}</td>
                    <td>{stat.ast}</td>
                    <td>{stat.to}</td>
                    <td>{stat.fifty}</td>
                    <td>{stat.defl}</td>
                    <td>{stat.stl}</td>
                    <td>{stat.blk}</td>
                    <td>{stat.pf}</td>
                    <td>{stat.df}</td>
                    <td>{stat.madeTwo}</td>
                    <td>{stat.attemptedTwo}</td>
                    <td>{stat.madeThree}</td>
                    <td>{stat.attemptedThree}</td>
                    <td>{stat.madeFG}</td>
                    <td>{stat.attemptedFG}</td>
                    <td>{stat.madeFT}</td>
                    <td>{stat.attemptedFT}</td>
                    <td>{stat.pts}</td>
                </tr>
                </>
            ))}
        </tbody>
        </table>
        </div>
    )
}

export default StatSheet
