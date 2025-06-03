import { createContext, useState, useContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("John");
  const [age, setAge] = useState(30);

  const incrementAge = () => {
    setAge(prevAge => prevAge + 1);
  };

  const decrementAge = () => {
    setAge(prevAge => prevAge - 1);
  };

  const value = {
    user,
    age,
    incrementAge,
    decrementAge,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Custom hook to use the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserProvider };
export default UserContext;
