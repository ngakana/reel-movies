import { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

import { ReactComponent as BrandLogo } from "../assets/svg/brand-logo.svg";
import { ReactComponent as HomeIcon } from "../assets/svg/home-outline.svg";
import { ReactComponent as HomeIconSolid } from "../assets/svg/home-solid.svg";
import { ReactComponent as MoviesIcon } from "../assets/svg/movies-outline.svg";
import { ReactComponent as MoviesIconSolid } from "../assets/svg/movies-solid.svg";
import { ReactComponent as LibraryIcon } from "../assets/svg/library-outline.svg";
import { ReactComponent as LibraryIconSolid } from "../assets/svg/library-solid.svg";
import { ReactComponent as ProfileIcon } from "../assets/svg/profile-outline.svg";
import { ReactComponent as ProfileIconSolid } from "../assets/svg/profile-solid.svg";

function Navbar() {
  const [currentURL, setCurrentURL] = useState("/");

  const url = useLocation();

  useEffect(() => {
    setCurrentURL(url.pathname);
  }, [url]);

  return (
    <nav>
      <div className="brand-logo">
        <Link to="/">
          {/* <h2>Awesome Movies</h2> */}
          <BrandLogo />
        </Link>
      </div>
      <div className="nav-links">
        <div>
          <Link to="/">
            {currentURL === "/" ? <HomeIconSolid /> : <HomeIcon />}
            <span>Home</span>
          </Link>
        </div>
        <div>
          <Link to="/movies">
            {currentURL === "/movies" ? <MoviesIconSolid /> : <MoviesIcon />}
            <span>Movies</span>
          </Link>
        </div>
        <div>
          <Link to="/library">
            {currentURL === "/library" ? <LibraryIconSolid /> : <LibraryIcon />}
            <span>Library</span>
          </Link>
        </div>
        <div>
          <Link to="/profile">
            {currentURL === "/profile" ? <ProfileIconSolid /> : <ProfileIcon />}
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
