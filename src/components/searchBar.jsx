import React, { useState } from 'react';
import axios from 'axios';
import ToggleButton from './toggleButton';

function SearchBar() {
    let [favorites, setFavorites] = useState([]);
    const [selectedTab, setSelectedTab] = useState('all'); // New state for tab selection
    const [movies, setMovies] = useState([])
    const [results, setResults] = useState([]);

    const [emojis, setEmojis] = useState(new Array(results.length).fill('❤️')); // Initial emoji state
  const [searchTerm, setSearchTerm] = useState('');
  const [activeButton, setActiveButton] = useState("option3");

  const toggleEmoji = (index) => {
    // Toggle emoji when the button is clicked
    const updatedEmojis = [...emojis];
    updatedEmojis[index] = emojis[index] === '❤️' ? '🙅' : '❤️';
    setEmojis(updatedEmojis);
  
    // Add or remove the movie from favorites based on the emoji state
    if (emojis[index] === '❤️') {
      setFavorites([...favorites, results[index]]);
    } else {
      const updatedFavorites = favorites.filter((favorite) => favorite.id !== results[index].id);
      setFavorites(updatedFavorites);
    }
  };


  const handleButtonClick = (id) => {
    setActiveButton(id);
  }

  

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {query: searchTerm, language: 'en-US'},
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODQ5Mjk1ZjU1MjZiNzU3YzdjMjEzYzE0NmU5NmRiYSIsInN1YiI6IjY0ZjY4ZmQ2ZmZjOWRlMDBmZTNlNDAwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ir9D_s0RQAgiXZwjeLMhZx4339fYpOVfKuLTzxjDw14'
        }
    };

    //send API
    axios
        .request(options)
        .then((response) => {
            console.log(response.data);
            const results = response.data.results;
            if (activeButton === 'option1') {
                // Sort by popularity
                results.sort((a, b) => b.popularity - a.popularity);
              } else if (activeButton === 'option2') {
                // Sort by rating (you can replace 'rating' with the actual property name)
                results.sort((a, b) => b.vote_average - a.vote_average);
              }
          

            setResults(results);

        // console.log(response.data);
        // const results = response.data.results;
        // console.table(results);
    }
    )
    .catch(function (error) {
        console.error(error);
      });
  };


  const filteredMovies = selectedTab === 'hearts' ? favorites : results;

  
  return (
    
   <>
        {/* <form onSubmit={handleSubmit}>
        <input className = "text-center place-content-center w-[400px] h-[60px] snap-center item-center"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
        />
        <button className = "border-solid border-cyan-600 m-5" type="submit">Search</button>
        </form> */}
        <div>
            {/* Tabs */}
            <div className="flex justify-center space-x-4 mb-4">
                <button
                    className={`text-xl font-bold border rounded-lg py-2 px-4 ${
                    selectedTab === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
                    }`}
                    onClick={() => setSelectedTab('all')}
                >
                    All Movies
                </button>
                <button
                    className={`text-xl font-bold border rounded-lg py-2 px-4 ${
                    selectedTab === 'hearts' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
                    }`}
                    onClick={() => setSelectedTab('hearts')}
                >
                    Favorite Movies 
                </button>
            </div>
            <div className="border-cyan-600 flex items-center justify-center mb-4">
            <ToggleButton
                label="Popularity"
                id="option1"
                activeId={activeButton}
                onClick={handleButtonClick}
            />
            <ToggleButton
                label="Rating"
                id="option2"
                activeId={activeButton}
                onClick={handleButtonClick}
            />
            <ToggleButton
                label="Normal"
                id="option3"
                activeId={activeButton}
                onClick={handleButtonClick}
            />
        </div>
      <form onSubmit={handleSubmit} className="text-center">
        <input
          className="text-center w-[400px] h-[60px] mb-5 border border-cyan-600 rounded-md px-4 py-2"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="border-double border border-cyan-600 rounded-md px-4 py-2 ml-2" type="submit">
          Search
        </button>
      </form>
    </div>
        {/* <div className='place-items-center flex w-full mx-1 m-10 justify-center flex flex-wrap'>
        {results.map((movie) => (
            <div>
                <div><img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} className = "border-4 border-indigo-600 rounded-2xl sm:h-[200px] md:w-[300px] m-10 w-[200px] h-[300px]"/></div>
                <div className = "m-5 text-center font-bold my-2 text-2xl">{movie.title}</div>
                <div className = "text-center font-bold text-teal-600 my-6">Popularity Score: {movie.popularity}</div>
                <div className = "text-center text-teal-600 my-6">Overview: {movie.overview}</div>



            </div>
            ))}
        </div> */}

        <div className="grid grid-cols-3 gap-4">
            {filteredMovies.map((movie, index) => (
                <div key={movie.id} className="border-4 border-indigo-600 rounded-2xl p-4">
                <img
                    src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                    alt={movie.title}
                    className="w-full h-auto"
                />
                <h2 className="text-center font-bold text-2xl my-2">{movie.title}</h2>
                <p className="text-center font-bold text-teal-600 my-2">Popularity Score: {movie.popularity}</p>
                <p className="text-center font-bold text-teal-600 my-2">Rating: {Math.round(movie.vote_average,4)*10}%</p>
                <p className="text-center text-teal-600 my-2">Overview: {movie.overview}</p>
                <div className="text-center mt-2">
                    <button className="border border-grey rounded-xl bg-stone-200 p-2 text-center text-4xl inline-block"
                            onClick={() => toggleEmoji(index)}>{emojis[index]}
                        </button>
                </div>
                </div>
            ))}
        </div>
    </>

  );
}

export default SearchBar;