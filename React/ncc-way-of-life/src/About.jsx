// import { Link } from "react-router-dom";

import Navbar from "./components/Navbar";

function About() {
  return (
    <div>
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
      <h1>About</h1>
    </div>
  );
}

export default About;
