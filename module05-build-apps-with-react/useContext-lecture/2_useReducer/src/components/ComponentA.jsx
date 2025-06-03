import { useReducer } from 'react';
import ComponentB from "./ComponentB";

const initialState = {
  user: "John",
  age: 30,
};

const ACTIONS = {
  INCREMENT_AGE: "INCREMENT_AGE",
  DECREMENT_AGE: "DECREMENT_AGE",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT_AGE:
      return { ...state, age: state.age + 1 };
    case ACTIONS.DECREMENT_AGE:
      return { ...state, age: state.age - 1 };
    default:
      return state;
  }
};

const ComponentA = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const { user, age } = state;

  const incrementAge = () => {
    dispatch({ type: ACTIONS.INCREMENT_AGE });
  };

  const decrementAge = () => {
    dispatch({ type: ACTIONS.DECREMENT_AGE });
  };

  return (
    <div className="m-1 p-4 border-black border-2">
      <h1 className="font-bold">ComponentA (with useReducer)</h1>
      <ComponentB 
        user={user}
        age={age}
        incrementAge={incrementAge}
        decrementAge={decrementAge}
      />
    </div>
  );
};

export default ComponentA;
