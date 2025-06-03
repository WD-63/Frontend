// Import the custom hook to access user context
import { useUser } from "../context/UserContext";

/**
 * ComponentC is a child component that consumes the user context.
 * It displays user information and provides controls to modify the user's age.
 * @returns {JSX.Element} The rendered component with user information and controls
 */
const ComponentC = () => {
  // Destructure values and functions from the user context
  const { user, age, incrementAge, decrementAge } = useUser();

  // Calculate the current year and user's birth year
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - age;

  return (
    // Container div with styling for border and spacing
    <div className="m-1 p-4 border-black border-2">
      {/* Component title */}
      <h1 className="font-bold">ComponentC (with Context + useReducer)</h1>

      {/* User profile card */}
      <div className="my-3 p-3 bg-gray-50 rounded">
        {/* User information section */}
        <div className="mt-3">
          <p className="text-sm font-medium text-gray-700">User Profile:</p>
          <p className="text-sm">👤 {user}</p>
          <p className="text-sm">Age: {age}</p>
          <p className="text-sm">🎂 Born in {birthYear}</p>
        </div>

        {/* Age control buttons */}
        <div className="mt-3 flex gap-2">
          {/* Button to decrease age */}
          <button
            onClick={decrementAge}
            className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded hover:bg-blue-100 border border-blue-200"
          >
            -1 Year
          </button>
          {/* Button to increase age */}
          <button
            onClick={incrementAge}
            className="px-3 py-1 text-sm bg-green-50 text-green-700 rounded hover:bg-green-100 border border-green-200"
          >
            +1 Year
          </button>
        </div>
      </div>
    </div>
  );
};

// Export ComponentC as the default export
export default ComponentC;
