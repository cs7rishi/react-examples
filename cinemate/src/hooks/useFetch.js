import { useEffect, useState } from 'react'

export const useFetch = (apiPath) => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}`

    useEffect(() => {
        async function fetchMovies() {
            console.log(url);

            try{
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
                        "Accept": "application/json"
                    }
                });
                
                const data = await response.json();
                setData(data.results);
            } catch(err){
                console.log(err.message);
            }
        }

        fetchMovies();
    }, [url])

    return {data}
}
