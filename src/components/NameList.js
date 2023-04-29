import React from "react";

function NameList() {
  const names = ["shanu", "nithin", "nikhil"];
  const mappedNames = names.map((name) => <h1>{name}</h1>);

  return <div>{mappedNames}</div>;
}

export default NameList;
