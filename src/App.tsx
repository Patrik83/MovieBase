import { Routes, Route } from "react-router";
import Navigation from "./components/Navigation/Navigation";
import RatedMoviesPage from "./pages/RatedMoviesPage";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import PopularMoviesPage from "./pages/PopularMoviesPage";

function App() {
  return (
    <div className="bg-dark-gradient">
      <Navigation />
      
      <div className="@container max-w-screen-xl mx-auto h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rated" element={<RatedMoviesPage />} />
          <Route path="/popular" element={<PopularMoviesPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
