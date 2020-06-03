import React from "react";
import NewStartup from "./sites/NewStartup";

function App() {
  return (
    <div>
      <header className="p-4 bg-gray-600 text-white">
        <ul className="flex">
          <li className="mr-6">
            <a className="hover:text-black" href="#">
              All Startups
            </a>
          </li>
          <li className="mr-6">
            <a className="hover:text-black" href="#">
              Create New Startup
            </a>
          </li>
        </ul>
      </header>
      <NewStartup />
    </div>
  );
}

export default App;
