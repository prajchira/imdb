const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODQ5Mjk1ZjU1MjZiNzU3YzdjMjEzYzE0NmU5NmRiYSIsInN1YiI6IjY0ZjY4ZmQ2ZmZjOWRlMDBmZTNlNDAwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ir9D_s0RQAgiXZwjeLMhZx4339fYpOVfKuLTzxjDw14'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));