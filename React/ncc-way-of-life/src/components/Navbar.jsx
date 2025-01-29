import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to={"/"}>Home</Link>
      </div>
      <div>
        <Link to="/about-us">About</Link>
      </div>
      <div>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
