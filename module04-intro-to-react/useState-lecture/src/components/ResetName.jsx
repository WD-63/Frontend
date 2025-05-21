const ResetName = ({ name, setName }) => {
  const resetName = () => {
    setName("Mario");
  };

  return (
    <div>
      <button onClick={resetName}>Reset name to Mario</button>
      <p>{name}</p>
    </div>
  );
};

export default ResetName;
