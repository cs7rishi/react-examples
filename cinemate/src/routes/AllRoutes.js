import { Routes, Route } from "react-router-dom"
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages"

import React from 'react'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<MovieList />} />
            <Route path="/movies/popular" element={<MovieList apiPath={"movie/popular"}/>} />
            <Route path="/movies/top" element={<MovieList apiPath={"movie/top_rated"}/>} />
            <Route path="/movies/upcoming" element={<MovieList apiPath={"movie/upcoming"}/>} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}
