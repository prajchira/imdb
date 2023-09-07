import React, { useEffect, useState } from 'react';
import Image from '../poster.jpeg'
import axios from 'axios';

const Banner = () => {
   /*
    let[bannerMovie, setBanner] = useState("")
*/
    const [movies, setMovies] = useState([]);


    
    
    const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/week',
    params: {language: 'en-US'},
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODQ5Mjk1ZjU1MjZiNzU3YzdjMjEzYzE0NmU5NmRiYSIsInN1YiI6IjY0ZjY4ZmQ2ZmZjOWRlMDBmZTNlNDAwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ir9D_s0RQAgiXZwjeLMhZx4339fYpOVfKuLTzxjDw14'
    }
    };

    axios
    .request(options)
    .then((response) => {
        const results = response.data.results;
        
        // Sort the table based on the "popularity" column
        results.sort((a, b) => b.popularity - a.popularity);

        console.table(results);
        
        // Assign the sorted data to a variable
        const sortedData = results;

        // Now you can use the sortedData array for further processing
        console.table(sortedData);

        // Example: Access the first item in the sorted array
        const firstItem = sortedData[0];
        console.log("First item:", firstItem);

        // Example: Iterate through the sorted array
        sortedData.forEach((item, index) => {
            console.log(`Item ${index + 1}:`, item);
        });

        setMovies(sortedData);
    })
    .catch(function (error) {
        console.error(error);
    });
   
    const twoAndOnwards = movies.slice(1);
    const oneOnly = movies.slice(0,1)

    return (
        <>
        <body className="bg-cover w-full h-full bg-gradient-to-b from-white to-red-300" >
            <div 
            className = "pt-3 font-bold mx-6 text-5xl my-9">This Week's Trending Movies
            </div>
            
            <div 
            >{oneOnly.map((movie, index) => (
                <div className="relative text-center">
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} className = "sm:h-[83vh] w-full m-4 bg-center h-[70vh] rounded-2xl flex items-end"  />
                        </div>
                    <div className = "text-center font-bold my-6 text-3xl">1. {movie.title}</div>
                    <div className = "text-center font-bold text-teal-600 my-6 text-xl">Popularity Score: {movie.popularity}</div>
                    <div className = "text-center font-bold text-teal-600 my-6 text-xl">Ratings: {Math.round(movie.vote_average*10)}%</div>
                </div>
            ))}

            </div>
           

            <div className='flex w-full mx-1 m-10 justify-center flex flex-wrap'>
            {twoAndOnwards.map((movie, index) => (
                <div>
                    <div><img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} className = "border-4 border-indigo-600 rounded-2xl sm:h-[400px] md:w-[600px] items-center m-10 w-[200px] h-[150px]"/></div>
                    <div className = "m-5 text-center font-bold my-2 text-2xl"> {index + 2}. {movie.title}</div>
                    <div className = "text-center font-bold text-teal-600 my-6 text-xl">Popularity Score: {movie.popularity}</div>
                    <div className = "text-center font-bold text-teal-600 my-6 text-xl">Ratings: {Math.round(movie.vote_average*10)}%</div>
                   

                </div>
            ))}
            </div>
        </body>
        </>     
    )
}


export default Banner;
