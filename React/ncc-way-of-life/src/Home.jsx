// import { useState } from "react";
// import { Link } from "react-router-dom";

import Navbar from "./components/Navbar";

function Home() {
  // let [name, setName] = useState("smith");
  // let [age, setAge] = useState(90);

  // function handleClick() {
  //   setName("bitto");
  //   setAge(85);
  // }
  return (
    <div>
      {/* <div>name: {name}</div>
      <div>ur age: {age}</div>
      <a href="/about"> about using a</a>
      <br /> */}
      {/* <nav>
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </nav> */}
      <Navbar />
      <h1>Home</h1>
      {/* <Link to={"/about"}>About using Link</Link> */}
    </div>
  );
}

export default Home;
