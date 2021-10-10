import React from "react";
import { Link } from "react-router-dom";

export const LargeDetailsCard = ({match,teamName}) =>{
    
    const otherTeam = teamName === match.team1 ? match.team2 : match.team1;
    const newLInk = `/teams/${otherTeam}`;
    return(
        <>
         <h3>Latest Matches</h3>
         <h4>Match Details</h4>
        <h1> vs 
            <Link to={newLInk}> {otherTeam}</Link>
        </h1>
        <h2>on {match.date}</h2>
        <h2>at {match.venue}</h2>
        <p>{match.winner} won by {match.resultMargin} {match.result}</p>
        </>
    );
}