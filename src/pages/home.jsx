import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <h1>ReelMovies</h1>
      {/* <Branding /> */}
      <div className="links">
        <Link to="/movies">
          <span>Browse movies</span>
        </Link>
        <Link to="/library">
          <span>Library</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
