import Address from "./Address";

const Student = (props) => {
  // console.log(props);

  return (
    <div>
      <h2>Student</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Status: {props.graduate ? "Graduate" : "Student"}</p>
      <Address city={props.city} />
    </div>
  );
};

export default Student;
