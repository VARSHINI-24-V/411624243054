import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/Add">Add</Link></li>
        <li><Link to="/Sub">Sub</Link></li>
        <li><Link to="/Mul">Mul</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;