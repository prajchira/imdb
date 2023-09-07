import './App.css';
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Banner from "./components/Banner";
import SearchBar from "./components/searchBar";
import ErrorPage from "./components/ErrorPage"


function App() {
   
/*  
// Replace with the URL of your localhost API

// Import the Axios library (if you're using it)
const axios = require('axios');

// Replace 'YOUR_API_KEY' with your actual TMDb API key
const apiKey = 'a849295f5526b757c7c213c146e96dba';

// Define the base URL for TMDb's API
const baseUrl = 'https://api.themoviedb.org/3';

// Example: Get popular movies
const endpoint = '/movie/popular';

// Create the full API URL with the API key as a query parameter
const apiUrl = `${baseUrl}${endpoint}?api_key=${apiKey}`;

  fetch(apiUrl)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => {
          console.error('Error fetching data:', error);
      });

      */
      
     

  return (
      <div>        
        <BrowserRouter>
        <div className = "border-solid "> <NavigationBar></NavigationBar></div>
        <Routes> 
          <Route path = "/"  element = {
            
             <Banner></Banner>
          
          }></Route>
          <Route path = "/find" element = {
            <SearchBar></SearchBar>
          }></Route> 
        
          <Route path = "*"  element = {           
            <ErrorPage></ErrorPage>
          }></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}



export default App;

