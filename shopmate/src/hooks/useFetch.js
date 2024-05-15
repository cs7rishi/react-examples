import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await fetch(url);
                console.log(response)
                if(!response.ok){
                    throw new Error(response.statusText)
                }

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
