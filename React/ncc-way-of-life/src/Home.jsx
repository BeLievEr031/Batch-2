import { useState } from "react";

function Home() {
  let [name, setName] = useState("smith");
  let [age, setAge] = useState(90);

  function handleClick() {
    // console.log("before change: ", name);
    // name = "bitto";
    // console.log("after change: ", name);
    setName("bitto");
    setAge(85);
  }
  return (
    <div>
      <div>name: {name}</div>
      <div>ur age: {age}</div>

      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Home;
