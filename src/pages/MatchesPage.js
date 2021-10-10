import {React,useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { LargeDetailsCard } from '../components/LargeDetailsCard';

export const MatchesPage = () => {

    const {teamName,year} = useParams();

    const [matches,setMatches] = useState([]);

    const getData = async () =>{
        const response = await fetch(`http://localhost:8080/teams/${teamName}/matches?year=${year}`);
        const data = await response.json();
        setMatches(data);
    }


    useEffect(()=>{
        getData();
    });
    



    return (
        <>
        {matches.map((match) => {
            return <LargeDetailsCard match={match} teamName ={match.teamName}/>
        })}
        
        </>

    );
}