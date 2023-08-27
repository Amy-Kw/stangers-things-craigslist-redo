import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    <div 
    className="Navbar"
    id="navbar">
      <Link to="/">Home</Link>
      <Link to="/post"> Post </Link>
    </div>
  );
}


