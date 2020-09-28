import React, { useState } from "react";
import "./styles.css";
import Navbar from "./components/Nabvar";

//empty global state
const userData = {};
//using context must export
export const userObjectContext = React.createContext(userData);

export default function App() {
  const [userName, setUsername] = useState("Devashish ");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <userObjectContext.Provider
      value={{
        userName: userName,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn
      }}
    >
      <div className="app">
        <Navbar />
      </div>
    </userObjectContext.Provider>
  );
}
