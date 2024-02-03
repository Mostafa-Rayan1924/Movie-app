import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Support from "./pages/Support";
import Description from "./pages/description";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />

        <Route path="/support" element={<Support />} />
        <Route path="/description" element={<Description />} />
      </Routes>
      <Footer />
    </>
  );
}
