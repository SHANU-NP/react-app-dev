import React from "react";

function NameList() {
  const names = ["shanu", "nithin", "nikhil"];
  const mappedNames = names.map((name,ind) => <h1 key={ind}> {ind} {name}</h1>);

  return <div>{mappedNames}</div>;
}

export default NameList;
