import { useState } from "react";

const OtherName = () => {
  const [name, setName] = useState("Luigi");

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default OtherName;
