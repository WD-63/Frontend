// Import the child component that will consume the context
import ComponentC from "./ComponentC";

/**
 * ComponentB is a middle component in the component tree.
 * It doesn't consume the context directly but passes it down to ComponentC.
 * @returns {JSX.Element} The rendered component with ComponentC as a child
 */
const ComponentB = () => {
  return (
    // Container div with styling for border and spacing
    <div className="m-1 p-4 border-black border-2">
      {/* Component title */}
      <h1 className="font-bold">ComponentB</h1>
      {/* Render ComponentC which will consume the user context */}
      <ComponentC />
    </div>
  );
};

// Export ComponentB as the default export
export default ComponentB;
