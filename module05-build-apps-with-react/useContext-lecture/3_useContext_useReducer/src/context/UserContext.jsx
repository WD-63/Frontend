/**
 * UserContext.jsx
 *
 * This file implements a React context for managing user-related state throughout the application.
 * It uses the Context API along with useReducer for state management.
 * The context provides user data and actions to any component in the component tree without prop drilling.
 */

import { createContext, useContext, useReducer } from "react";

/**
 * Creates a new Context object. When React renders a component that subscribes to this Context object,
 * it will read the current context value from the closest matching Provider above it in the tree.
 * @type {React.Context<Object>}
 */
const UserContext = createContext();

/**
 * The initial state of our user context.
 * This represents the default values that will be used when the app first loads.
 * @type {Object}
 * @property {string} user - The name of the user
 * @property {number} age - The current age of the user
 */
const initialState = {
  user: "John", // Default user name
  age: 30, // Default user age
};

/**
 * Action types as constants to prevent typos and improve maintainability.
 * These represent the different types of actions that can be dispatched to update the state.
 * @enum {string}
 */
const ACTIONS = {
  INCREMENT_AGE: "INCREMENT_AGE", // Action to increase the user's age by 1
  DECREMENT_AGE: "DECREMENT_AGE", // Action to decrease the user's age by 1
};

/**
 * The reducer function that specifies how the state changes in response to actions.
 * This is a function that takes the previous state and an action, and returns the next state.
 * @param {Object} state - The current state of the context
 * @param {Object} action - An object that represents what happened
 * @param {string} action.type - The type of action being performed
 * @returns {Object} The new state after applying the action
 */
const userReducer = (state, action) => {
  // Use a switch statement to determine how to update the state based on the action type
  switch (action.type) {
    // Handle increment age action
    case ACTIONS.INCREMENT_AGE:
      // Return a new state object with the age incremented by 1
      // Using spread operator to maintain immutability
      return { ...state, age: state.age + 1 };

    // Handle decrement age action
    case ACTIONS.DECREMENT_AGE:
      // Return a new state object with the age decremented by 1
      // Using spread operator to maintain immutability
      return { ...state, age: state.age - 1 };

    // For any unknown actions, return the current state unchanged
    default:
      // It's important to handle unknown actions by returning the current state
      // This ensures that the app doesn't break if an invalid action is dispatched
      return state;
  }
};

/**
 * The UserProvider component that makes the user context available to any nested components.
 * This should be placed at a high level in the component tree, typically near the root.
 *
 * @component
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - Child components that will have access to this context
 * @returns {JSX.Element} A context provider wrapping the application
 */
const UserProvider = ({ children }) => {
  // Initialize the state and dispatch function using the useReducer hook
  // The dispatch function is used to send actions to the reducer
  const [state, dispatch] = useReducer(userReducer, initialState);

  /**
   * Action creator function that dispatches an action to increment the user's age
   * @function
   * @returns {void}
   */
  const incrementAge = () => {
    dispatch({ type: ACTIONS.INCREMENT_AGE });
  };

  /**
   * Action creator function that dispatches an action to decrement the user's age
   * @function
   * @returns {void}
   */
  const decrementAge = () => {
    dispatch({ type: ACTIONS.DECREMENT_AGE });
  };

  /**
   * The value object that will be provided to consumers of this context.
   * This includes both the state values and the action creators.
   * @type {Object}
   * @property {string} user - The current user's name
   * @property {number} age - The current user's age
   * @property {Function} incrementAge - Function to increment the user's age
   * @property {Function} decrementAge - Function to decrement the user's age
   */
  const value = {
    user: state.user,
    age: state.age,
    incrementAge,
    decrementAge,
  };

  // The Provider component accepts a value prop to be passed to consuming components
  // that are descendants of this Provider.
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

/**
 * A custom hook that provides a shorthand for accessing the user context.
 * This makes it easier to consume the context in any component.
 * @returns {Object} The user context value
 * @throws {Error} If used outside of a UserProvider
 * @example
 * const { user, age, incrementAge } = useUser();
 */
export const useUser = () => {
  // Use the useContext hook to access the context
  const context = useContext(UserContext);

  // Throw an error if the hook is used outside of a UserProvider
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

// Export the UserProvider component as a named export
export { UserProvider };

// Export the context object as the default export
export default UserContext;
