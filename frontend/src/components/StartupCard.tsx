import React from "react";
import { Startup } from "../generated/graphql";

const StartupCard = (startup: Startup) => {
  console.log(startup);
  return (
    <div className="m-2 p-2 shadow max-w-xs">
      <p className="text-xl underline">{startup.name}</p>
      <p className="text-lg italic">{startup.valueProposition}</p>
      <p>Color Scheme:</p>
      {startup.colorScheme
        ? startup.colorScheme.map((color) => (
            <div>
              <div className="w-auto h-4" style={{ backgroundColor: color }} />
            </div>
          ))
        : null}
    </div>
  );
};
export default StartupCard;
