# network_checkpoint

# Async/Await Examples

This repository contains examples of using the async/await feature in JavaScript for various tasks, including iterating through arrays and making API calls using fetch. Each task showcases different functionalities and error handling techniques.

## Table of Contents

- [Task 01: Iterating with Async/Await](#task-01-iterating-with-asyncawait)
- [Task 02: Awaiting a Call](#task-02-awaiting-a-call)
- [Task 03: Handling Errors with Async/Await](#task-03-handling-errors-with-asyncawait)

## Task 01: Iterating with Async/Await

This function takes an array of values and logs each value with a delay of 1 second between logs.

```javascript
async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log(value);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // delay of 1 second
  }
}

// Example usage:
iterateWithAsyncAwait(["ace", "of", "spade", "drink"]);
```

### Example Output

```
ace
// 1 second delay
of
// 1 second delay
spade
// 1 second delay
drink
```

## Task 02: Awaiting a Call

This function uses fetch to fetch movie details from the OMDb API and logs the response data.

```javascript
async function awaitCall() {
  try {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=apikey&t=superman&type=movie"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    console.log("Sorry, an error occurred");
  }
}

// Example usage:
awaitCall();
```

### Example Output

The output will be the JSON data for the movie "Superman" fetched from the OMDb API.

## Task 03: Handling Errors with Async/Await

This function uses fetch to fetch movie details and includes error handling to provide a user-friendly error message.

```javascript
async function awaitCall() {
  try {
    const response = await axios.get(
      "http://www.omdbapi.com/?apikey=addyourapikey&t=superman&type=movie"
    );
    console.log(response.data);
  } catch (error) {
    console.log("Error: ", error.message);
    console.log("Sorry, an error occurred while fetching the movie details");
  }
}

// Example usage:
awaitCall();
```

### Example Output

If the API call fails, it will log an error message along with "Sorry, an error occurred while fetching the movie details."

## Usage

1. Copy the desired task code into your JavaScript file.
2. Run your JavaScript file using Node.js.

```bash
node index.js
```

## License

This project is open source and available under the [MIT License](LICENSE).
