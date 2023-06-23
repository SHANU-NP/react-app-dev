import React, { useState , useCallback} from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(5000);

  const increaseAge = useCallback(() => {
    setAge(age => age + 1)
  },[age])

  const incrementSalary = useCallback(() => {
    setSalary(salary => salary + 1000)
  },[salary])

  return (
    <div>
      <Title />
      <Count text = "age" count={age}/>
      <Button handleClick={increaseAge}>increaseAge</Button>
      <Count text = "salary" count={salary}/>
      <Button handleClick={incrementSalary}>increment salary</Button>
    </div>
  );
}

export default ParentComponent;
