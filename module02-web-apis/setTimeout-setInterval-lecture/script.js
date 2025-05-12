// ------------- SetTimeout -------------
// Executing a function with a delay

// Structure of setTimeout => takes two arguments: function + delay
// setTimeout(() => {}, timeout)

// Example 1
setTimeout(() => {
  console.log("Hello");
}, 3000);

// Example 2
const greeting = () => {
  console.log("Hello again");
};

setTimeout(greeting, 3000);

// ------------- clearTimeout -------------
// Stops the execution of a setTimout

// Example
const timeout = setTimeout(() => {
  console.log("Hello");
}, 3000);

// Cancel after 2 seconds (before timeout triggers)
setTimeout(() => {
  clearTimeout(timeout);
  console.log("Timeout cancelled");
}, 2000);

// ------------- SetInterval -------------
// Executing a function repeatedly

// Structure of setInterval => takes two arguments: function + interval
// setInterval(() => {}, interval);

// Example 1
// setInterval(() => {
//   console.log("Hello every 2 seconds!");
// }, 2000);

// Example 2
// const repeatGreeting = () => {
//   console.log("Hello every 3 seconds!");
// };

// setInterval(repeatGreeting, 3000);

// ------------- clearInterval -------------
// Stops the execution of a setInterval

// Example
// const interval = setInterval(() => {
//   console.log("Running...");
// }, 1000);

// Stops the interval after 5 seconds
// setTimeout(() => {
//   clearInterval(interval);
//   console.log("Interval stopped!");
// }, 5000);
