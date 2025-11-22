import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          KGF 2
        </div>

        <div className="linkstyle">
          <Link className="linklist" to="/">Home</Link>
          <Link className="linklist" to="/about">Cast</Link>
          <Link className="linklist" to="/product">Story</Link>
          <Link className="linklist" to="/service">Songs</Link>
          <Link className="linklist" to="/trailer">Trailer</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
