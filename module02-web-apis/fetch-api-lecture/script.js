/**
 * FETCH API EXAMPLES
 *
 * The Fetch API is a modern way to make network requests in JavaScript.
 * It lets you get data from servers (like RESTful APIs) or send data to them.
 * Think of it as a messenger that goes to a website, gets information,
 * and brings it back to your code - all without refreshing the page!
 */

// EXAMPLE 1: .then Promise Chain Method
// This is the traditional way of handling promises with .then() chains

const fetchFunction = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1") // Returns a Promise that resolves to a Response object
    .then((response) => {
      // First .then() handles the Response object
      if (!response.ok) {
        // Always check if the response is OK (status 200-299)
        throw new Error(`Something went wrong. Status: ${response.status}`);
      } else {
        return response.json(); // Parse JSON response - this returns another Promise!
      }
    })
    .then((data) => console.log(data)) // Second .then() handles the parsed JSON data
    .catch((error) => console.error(error)); // Catch any errors in the promise chain
};

fetchFunction();

// EXAMPLE 2: Async/Await Method
// This is a more modern and cleaner syntax for handling promises
// It makes asynchronous code look more like synchronous code

const fetchFunctionAsyncAwait = async () => {
  // try/catch is used for error handling with async/await
  try {
    // await pauses execution until the promise resolves
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    if (!response.ok) {
      throw new Error(`Something went wrong. Status: ${response.status}`);
    }

    // await again to parse the JSON response
    const data = await response.json();
    console.log(data);

    // IMPORTANT: async/await is just syntactic sugar over promises
    // Under the hood, it's still using promises!
  } catch (error) {
    console.error(error);
  }
};

fetchFunctionAsyncAwait();

// EXAMPLE 3: Practical Application - Using fetched data with DOM manipulation
// This time with ES5 function syntax instead of an arrow function

async function fetchAndDisplayPost() {
  try {
    // Fetch a single post (with ID 1) from the API
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Create a DOM element to display the fetched data
    const postDiv = document.createElement("div");

    // Style the element
    postDiv.style.padding = "10px";
    postDiv.style.border = "1px solid #ccc";

    // Populate the element with data using template literals
    // SECURITY NOTE: innerHTML is potentially dangerous
    postDiv.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.body}</p>
      `;

    // Add the element to the page
    document.body.appendChild(postDiv);
  } catch (error) {
    console.error(error);
  }
}

fetchAndDisplayPost();

// EXAMPLE 4: POST Request - Send data/Create a new resource

// const createPostAsync = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       body: JSON.stringify({
//         title: "Neuer Post Titel",
//         body: "Dies ist der Inhalt des neuen Posts.",
//         userId: 1,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const newData = await response.json();
//     console.log("Post data:", newData);
//   } catch (error) {
//     console.error(error);
//   }
// };

// createPostAsync();

// EXAMPLE 5: PUT Request - Replace the target resource/Create a new resource

// PUT request
// const updatePostAsync = async () => {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1",
//       {
//         method: "PUT",
//         body: JSON.stringify({
//           id: 1,
//           title: "Changed post",
//           body: "adaesdag",
//           userId: 1,
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const updatedData = await response.json();
//     console.log("Aktualisierte Daten:", updatedData);
//   } catch (error) {
//     console.error(error);
//   }
// };

// updatePostAsync();

// EXAMPLE 6: DELETE Request - Delete the target resource

// Delete request
// const deletePostAsync = async () => {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1",
//       {
//         method: "DELETE",
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log("Result", result);
//   } catch (error) {
//     console.error(error);
//   }
// };

// deletePostAsync();

/**
 * IMPORTANT FETCH API NOTES:
 *
 * 1. fetch() returns a Promise that resolves to a Response object
 * 2. The Response is NOT the actual data - you need to call .json() to extract the data
 * 3. .json() also returns a Promise that resolves to the parsed JSON
 * 4. Always check response.ok before proceeding (response.ok is true if status is 200-299)
 * 5. fetch() won't reject on HTTP error status (like 404 or 500) - you must check response.ok
 * 6. fetch() will reject on network errors or if the request couldn't be made
 * 7. The GET request is the default method - no specification to the request object needed
 * 8. For POST and PUT requests, you need to specify method, headers, and body
 * 9. For DELETE requests, you need to specify the method
 */
