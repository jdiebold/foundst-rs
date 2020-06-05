import React from "react";
import NewStartup from "./sites/NewStartup";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import StartupList from "./sites/StartupList";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="p-4 bg-gray-600 text-white">
          <ul className="flex">
            <li className="mr-6">
              <Link to="/startups" className="hover:text-black">
                All Startups
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/" className="hover:text-black">
                Create New Startup
              </Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route exact path="/" component={NewStartup} />
          <Route exact path="/startups" component={StartupList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
