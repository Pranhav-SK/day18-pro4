// Function to fetch a random joke
function fetchRandomJoke() {
    return new Promise((resolve, reject) => {
      fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch joke');
          }
          return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
  
  // Function to display the joke
  function displayJoke(joke) {
    const jokeContainer = document.getElementById('joke-container');
    const jokeCard = `
      <div class="card joke-card">
        <div class="card-body">
          <p class="card-text joke-text">${joke.setup ? joke.setup : ''}</p>
          <p class="card-text joke-text">${joke.delivery ? joke.delivery : joke.joke}</p>
        </div>
      </div>
    `;
    jokeContainer.innerHTML = jokeCard;
  }
  
  // Function to handle errors
  function handleError(error) {
    console.error('Error fetching joke:', error);
    // Display error message to the user
  }
  
  // Entry point
  document.addEventListener('DOMContentLoaded', () => {
    const getJokeBtn = document.getElementById('get-joke-btn');
    getJokeBtn.addEventListener('click', () => {
      fetchRandomJoke()
        .then(joke => displayJoke(joke))
        .catch(error => handleError(error));
    });
  });
  