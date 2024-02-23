import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Game {
    id:number;
    name: string;

}
interface FetchGamesResponse {
    count : number,
    results:Game[];
}

const useGames = () => {
    const [games , setGames ] = useState<Game[]>([]);
    const [error , setError] = useState('');
    

useEffect(() => {
    const controller = new AbortController();
    apiClient
    .get<FetchGamesResponse>('/games', { signal:controller.signal })  //adds a timeout to the request
    .then(res => setGames(res.data.results))
    .catch(err => {
        if (err instanceof CanceledError) return;
    setError(err.message) });

    return  ()=> controller.abort();   //cleanup function that will be called when this component is unmounted (removed from
    
},[]);
 return { games , error }; 
}
export default useGames