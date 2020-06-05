import React from "react";
import { useParams } from "react-router-dom";
import { useStartupQuery } from "../generated/graphql";

function StartupCockpit() {
  let { id } = useParams();
  const { loading, data } = useStartupQuery({ variables: { id: id } });
  console.log(id);
  console.log(data);
  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          <p>This is where the Startup Cockpit goes</p>
        </div>
      )}
    </div>
  );
}
export default StartupCockpit;
