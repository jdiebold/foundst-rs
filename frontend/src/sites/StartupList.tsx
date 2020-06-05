import React from "react";
import { Startup, useListStartupsQuery } from "../generated/graphql";
import { useQuery } from "react-apollo-hooks";
import StartupCard from "../components/StartupCard";

function StartupList() {
  const { data, loading, error } = useListStartupsQuery({
    variables: {},
  });
  console.log(data);
  return (
    <div className="grid grid-cols-4">
      {data &&
        data.listStartups.map((startup) => (
          <StartupCard
            id={startup.id}
            name={startup.name}
            keyword={startup.keyword}
            valueProposition={startup.valueProposition}
            colorScheme={startup.colorScheme}
          />
        ))}
    </div>
  );
}
export default StartupList;
