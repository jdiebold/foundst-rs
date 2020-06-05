import React from "react";
import { Startup } from "../generated/graphql";
import { useHistory } from "react-router-dom";
import StartupCockpit from "../sites/StartupCockpit";

const StartupCard = (startup: Startup) => {
  const history = useHistory();

  return (
    <div
      className="m-2 p-2 shadow max-w-xs hover:bg-gray-100"
      style={{ cursor: "pointer" }}
      onClick={(event) => {
        event.preventDefault();
        history.push("/startups/" + startup.id);
      }}
    >
      <p className="text-xl underline">{startup.name}</p>
      <p className="text-lg italic">{startup.valueProposition}</p>
      <p>Color Scheme:</p>
      {startup.colorScheme
        ? startup.colorScheme.map((color) => (
            <div key={color}>
              <div className="w-auto h-4" style={{ backgroundColor: color }} />
            </div>
          ))
        : null}
    </div>
  );
};
export default StartupCard;
