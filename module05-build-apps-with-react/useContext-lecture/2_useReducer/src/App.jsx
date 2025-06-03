import ComponentA from "./components/ComponentA";

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">useReducer with Prop Drilling</h1>
      <p className="mb-4">Reducer is in ComponentA, passed down to ComponentC through ComponentB</p>
      <ComponentA />
    </div>
  );
};

export default App;
