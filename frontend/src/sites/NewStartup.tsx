import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Startup, GenerateStartupDocument } from "../generated/graphql";

function NewStartup() {
  const [keyword, setKeyword] = useState("");
  const [createStartup, { data }] = useMutation(GenerateStartupDocument);

  return (
    <div className="container mx-auto max-w-sm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createStartup({ variables: { keyword: keyword } });
        }}
      >
        <div className="p-5">
          <p className="text-xl">Let's create a Startup!</p>
          <label className="text-xs">What is your Startup about?</label>
          <br />
          <input
            className="appearance-none shadow border-none rounded p-3 leading-tight mt-1"
            type="text"
            id="keyword"
            placeholder="Teaching"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <br />
          <button
            className="shadow p-3 my-3 hover:bg-gray-200 rounded-l"
            type="submit"
          >
            Start me up!
          </button>
        </div>
      </form>
    </div>
  );
}
export default NewStartup;
