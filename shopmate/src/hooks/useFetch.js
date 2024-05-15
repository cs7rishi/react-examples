import { useEffect, useRef, useState } from "react"

export const useFetch = (url, _body) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const body = useRef(_body)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                console.log("useRef no loops");
                const result = await response.json();
                setData(result);
                setError("");

            }catch(error){
                console.log(error.message);
                setError(error.message);
                setData(null);
            }finally{
               setLoading(false); 
            }
        }
        fetchData();
    }, [url]);

    return {data, loading, error};
}
