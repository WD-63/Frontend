// Component for filtering the to-do list
// Accepts setFilter function to update the filter state
const FilterComponent = ({ setFilter }) => {
  // Updates the filter state based on user selection
  const setFilterInView = (filter) => {
    setFilter(filter);
  };

  // Renders buttons to select the filter type
  return (
    <div className="mb-4 flex space-x-2">
      <button
        onClick={() => setFilterInView("all")}
        className="bg-gray-300 hover:bg-gray-400 active:bg-gray-300 focus:outline-2 focus:outline-offset-2 focus:outline-gray-200 px-3 py-1 rounded cursor-pointer"
      >
        All
      </button>
      <button
        onClick={() => setFilterInView("active")}
        className="bg-gray-300 hover:bg-gray-400 active:bg-gray-300 focus:outline-2 focus:outline-offset-2 focus:outline-gray-200 px-3 py-1 rounded cursor-pointer"
      >
        Active
      </button>
      <button
        onClick={() => setFilterInView("completed")}
        className="bg-gray-300 hover:bg-gray-400 active:bg-gray-300 focus:outline-2 focus:outline-offset-2 focus:outline-gray-200 px-3 py-1 rounded cursor-pointer"
      >
        Completed
      </button>
    </div>
  );
};

export default FilterComponent;
