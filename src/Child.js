import React from "react";

let Child = (props) => {
  return (
    <div>
      <h1>Child</h1>

      <button onClick={() => props.changeWord("khurram shafique")}>
        Click to change Title
      </button>
    </div>
  );
};
export default Child;
