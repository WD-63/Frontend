// Import the child component and context provider
import ComponentB from "./ComponentB";
import { UserProvider } from "../context/UserContext";

/**
 * ComponentA serves as the top-level component that wraps the application with the UserProvider.
 * This makes the user context available to all child components.
 * @returns {JSX.Element} The rendered component tree with context provider
 */
const ComponentA = () => {
  return (
    // Wrap the component tree with UserProvider to provide context
    <UserProvider>
      {/* Container div with styling for border and spacing */}
      <div className="m-1 p-4 border-black border-2">
        {/* Component title */}
        <h1 className="font-bold">ComponentA</h1>
        {/* Render ComponentB which will have access to the user context */}
        <ComponentB />
      </div>
    </UserProvider>
  );
};

// Export ComponentA as the default export
export default ComponentA;
