import { Link, useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { languageContext } from "../context/LanguageConetext";

function Navbar() {
  const location = useLocation();
  const favCount = useSelector((state) => state.myFavourite.length); 
  const {contLanguage, setContLanguage} = useContext(languageContext)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/movies">{contLanguage == 'English'? 'افلامنا المحبوبه': 'Lovely Movies'}</Link>
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
                className={`nav-link ${location.pathname === "/login" ? "fw-bold text-info" : ""}`}
                to="/login"
              >
                {contLanguage == 'English'? 'تسجيل الدخول': 'Login'}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/register" ? " fw-bold text-info" : ""}`}
                to="/register"
              >
                {contLanguage == 'English'? 'انشاء حساب': 'Sign Up'}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/movies" ? "fw-bold text-info" : ""}`}
                to="/movies"
              >
                 {contLanguage == 'English'? 'الافلام': 'Movies'}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/fav" ? "fw-bold text-info" : ""}`}
                to="/fav"
              >
                {contLanguage == 'English'? 'المفضلة': 'Favourite'}
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
              className="mx-2"
              style={{
                fontSize: 16,
                background: favCount > 0 ? "green" : "gray",
                color: "#fff",
                borderRadius: "80%",
                padding: "1px 8px",
              }}
            >
              {favCount}
            </span>
          </Link>
          <button onClick={() => setContLanguage(contLanguage == 'English'?'العربية':'English')} className='btn btn-outline-dark rounded-0 mx-3' >{contLanguage} </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
