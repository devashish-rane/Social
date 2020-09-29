import React, { useState } from "react";
import "./styles.css";
import Navbar from "./components/Nabvar";
import FeedBox from "./components/FeedBox";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      <Router>
        <div className="app">
          <Switch>
            <Route path="/interests">
              <Navbar />
              <FeedBox />
              {/* <h1>Interests</h1> */}
            </Route>

            <Route path="/account">
              <Navbar />
              <FeedBox />
              {/* <h1>Account</h1> */}
            </Route>

            <Route path="/">
              <Navbar />
              <FeedBox />
              <h1>Home</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </userObjectContext.Provider>
  );
}
