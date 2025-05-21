import "./App.css";
import ResetName from "./components/ResetName";
import OtherName from "./components/OtherName";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("Mario");
  // let variableName = "Mario";

  const changeName = () => {
    setName((prev) => (prev === "Mario" ? "Luigi" : "Mario"));
    // console.log("Inside function: ", name);
  };

  // console.log("Outside function: ", name);

  return (
    <>
      <h1 className="text-3xl font-bold">State: {name}</h1>
      {/* <h1 className="text-3xl font-bold">Variable: {variableName}</h1> */}
      <button onClick={changeName}>Change name</button>
      <ResetName name={name} setName={setName} />
      <OtherName />
    </>
  );
};

export default App;
