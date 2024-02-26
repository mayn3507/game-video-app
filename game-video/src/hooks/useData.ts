import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";



interface FetchResponse <T>{
    count: number;
    results: T[];
}

const useData = <T>(endpoint:string , requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data , setData ] = useState<T[]>([]);
    const [error , setError] = useState('');
    const  [isLoading , setIsLoading] = useState(true) ;
    

useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    apiClient
    .get<FetchResponse<T>>(endpoint, { signal:controller.signal, ...requestConfig })  //adds a timeout to the request
    .then(res => {
        setData(res.data.results);
        setIsLoading(false);
    } )
    .catch(err => {
        if (err instanceof CanceledError) return;
    setError(err.message) 
    setIsLoading(false);
});

    return  ()=> controller.abort();   //cleanup function that will be called when this component is unmounted (removed from
    
}, deps ? [...deps]: []);
 return { data , error, isLoading }; 

} ; 

export default useData;