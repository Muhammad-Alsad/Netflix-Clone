import React, { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';



export default function Home() {
    const [movies, setMovies] = useState([]);

    async function getMovies() {
        const url = process.env.REACT_APP_DERVER_URL
       // console.log(1111, url)
        const response = await fetch(`${url}/trending`);
        //console.log(2222, response)
        const jsonData = await response.json();
        //console.log(3333, jsonData);
        setMovies(jsonData)
        //console.log(4444, movies)
    }

    function commentHandler(newData,id){
        movies.map(movie=>{
            if(movie.id === id){
                 console.log("test",newData,id)
                movie.comment = newData.userComment;
                return movie
            } else {
                return movie
            }
        })
    }
    useEffect(() => {
        getMovies()
    }, []);
    return (
        <>
            < MovieList data={movies} commentHandler={commentHandler} /> 
        </>
    );
}