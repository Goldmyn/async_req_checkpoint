// Task 01: Iterating with Async/Await

async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log(value);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // delay of 1 second
  }
}

iterateWithAsyncAwait(["ace", "of", "spade", "drink"]);

// Task 02: Awaiting a Call

async function awaitCall() {
  try {
    // Make request with axios here
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=146cca5d&t=superman&type=movie"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    console.log("Sorry, an error occurred");
  }
}

awaitCall();

// Task 03: Handling Errors with Async/Await
async function awaitCall() {
  try {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=146cca5d&t=superman&type=movie"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error.message);
    console.log("Sorry, an error occurred while fetching the movie details");
  }
}

awaitCall();

// Task 04: Awaiting Concurrent Requests

/*
async function concurrentRequests() {
    try {
        const requestOne = axios.get("http://www.omdbapi.com/?apikey=146cca5d&t=superman&type=movie");
        const requestTwo = axios.get("http://www.omdbapi.com/?apikey=146cca5d&t=batman&type=movie");

        const [responseOne, responseTwo] = await Promise.all([requestOne, requestTwo]);
        console.log("Superman Actors: ", responseOne.data.Actors);
        console.log("Batman Actors: ", responseTwo.data.Actors);
    } catch (error) {
        console.log("Error: ", error.message);
        console.log("Sorry, an error occurred while fetching movie details");
    }
}

concurrentRequests();
 */
