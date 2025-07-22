import { Routes, Route } from "react-router";
import Navigation from "./components/Navigation";
import RatedMoviesPage from "./pages/RatedMoviesPage";
import SearchPage from "./pages/SearchPage";
import TrendingMoviesPage from "./pages/TrendingMoviesPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div style={{backgroundColor: "#212121"}}>
      <Navigation />
      
      <div className="@container max-w-screen-xl mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rated" element={<RatedMoviesPage />} />
          <Route path="/trending" element={<TrendingMoviesPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
