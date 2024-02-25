import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre {
    id: number;
    name:string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres , setGenres ] = useState<Genre[]>([]);
    const [error , setError] = useState('');
    const  [isLoading , setIsLoading] = useState(true) ;
    

useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    apiClient
    .get<FetchGenresResponse>('/genres', { signal:controller.signal })  //adds a timeout to the request
    .then(res => {
        setGenres(res.data.results);
        setIsLoading(false);
    } )
    .catch(err => {
        if (err instanceof CanceledError) return;
    setError(err.message) 
    setIsLoading(false);
});

    return  ()=> controller.abort();   //cleanup function that will be called when this component is unmounted (removed from
    
},[]);
 return { genres , error, isLoading }; 

} ; 

export default useGenres;