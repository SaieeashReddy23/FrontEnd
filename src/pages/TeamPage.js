import {React,useEffect,useState} from "react";
import { useParams } from "react-router";
import { LargeDetailsCard } from "../components/LargeDetailsCard";
import {SmallDetailsCard } from "../components/SmallDetailsCard";
export const TeamPage = () =>{

    const {teamName} = useParams();
    console.log(teamName);
    

    const [team,setTeam] = useState({latestMatches:[],teamName:""});

    const getData = async () =>{
        const response = await fetch(`http://localhost:8080/teams/${teamName}`);
        const data = await response.json();
        setTeam(data);
    }


    useEffect(() =>{
        getData();
    },[teamName]);

    if(!team || !team.teamName){
        return <h1>Team not found</h1>
    }

    return(
        <>
        <h1>{team.teamName}</h1>
        <LargeDetailsCard match={team.latestMatches[0]} teamName = {team.teamName}/>
        {team.latestMatches.slice(1).map((match)=>{
            return <SmallDetailsCard match={match} key={match.id} teamName = {team.teamName} ></SmallDetailsCard>
        })}
        </>
    );
}