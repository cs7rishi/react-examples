import { useEffect, useState } from "react";
import { Card } from "../components";

export const MovieList = () => {
    const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDM0MjY2Nzk5NDdhNDQzNjliN2U0Yjk4OThiNDUxOSIsInN1YiI6IjY2NDhkZWY4OTViZDRhNGJjMDhlN2JmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oc8skIi5vnFYMYHQI_1zs8Olv-0IfLUZSqtp-KWn55w";

    const [movies, setMovies] = useState([]);
    console.log(movies);

    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch("https://api.themoviedb.org/3/movie/now_playing", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    "Accept": "application/json"
                }
            });

            const data = await response.json();
            setMovies(data.results);
        }

        fetchMovies();
    }, [])
    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap">
                    {movies && movies.map((movie)=> (
                        <Card key={movie.id} movie={movie}/>
                    ))}
                </div>
            </section>
        </main>
    )
}