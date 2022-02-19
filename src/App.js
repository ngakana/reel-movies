import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/app.css";

import Home from "./pages/home";
import Movies from "./pages/movies";
import MovieDetails from "./pages/movieDetails";
import Library from "./pages/library";
import Profile from "./pages/profile";

import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/library" element={<Library />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
