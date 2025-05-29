import { Link, useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";

function Navbar() {
  const location = useLocation();
  const favCount = useSelector((state) => state.length); 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/movies">Lovely Movies</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/login" ? "fw-bold" : ""}`}
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/register" ? "fw-bold" : ""}`}
                to="/register"
              >
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/movies" ? "fw-bold" : ""}`}
                to="/movies"
              >
                All Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/fav" ? "fw-bold" : ""}`}
                to="/fav"
              >
                Favourites
              </Link>
            </li>
          </ul>
          <Link
            to="/fav"
            className="d-flex align-items-center text-decoration-none"
            title="Your Favorites"
          >
            <FaStar color={favCount > 0 ? "gold" : "gray"} size={24} style={{ marginRight: 6 }} />
            <span
              style={{
                fontSize: 16,
                background: favCount > 0 ? "darkred" : "gray",
                color: "#fff",
                borderRadius: "80%",
                padding: "1px 8px",
              }}
            >
              {favCount}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
