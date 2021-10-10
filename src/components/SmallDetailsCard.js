import React from "react";
import { Link } from "react-router-dom";

export const SmallDetailsCard = ({match,teamName}) =>{
    const otherTeam = match.team1===teamName?match.team2:match.team1;
    const newLInk = `/teams/${otherTeam}`;
    return(
        <>
        <h3>vs
            <Link to={newLInk}> {otherTeam}</Link>
        </h3>
        <p>{match.winner} won by {match.resultMargin} {match.result}</p>
        </>
    );
}