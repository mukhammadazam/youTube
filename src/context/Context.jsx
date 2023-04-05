import { createContext, useState } from "react";
export const MyContext = createContext();
export const Myprovayder = ({ children }) => {
  const [togle, setTogle] = useState(false);
  return (
    <MyContext.Provider value={{ togle, setTogle }}>
      {children}
    </MyContext.Provider>
  );
};
