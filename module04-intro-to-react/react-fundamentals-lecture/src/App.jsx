import "./App.css";
import Student from "./components/Student";

const App = () => {
  const students = [
    { name: "John", age: 25, city: "New York", graduate: true },
    { name: "Jane", age: 30, city: "Boston", graduate: false },
    { name: "Jack", age: 25, city: "Washington", graduate: true },
    { name: "Jil", age: 26, city: "New York", graduate: false },
  ];

  return (
    <>
      <h1>Welcome to React!</h1>
      {students.map(({ name, age, city, graduate }, index) => (
        <Student
          key={index}
          name={name}
          age={age}
          city={city}
          graduate={graduate}
        />
      ))}
    </>
  );
};

export default App;
