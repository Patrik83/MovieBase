import { Routes, Route } from "react-router";
import RatedMoviesPage from "./pages/RatedMoviesPage";
import TrendingMoviesPage from "./pages/TrendingMoviesPage";

function App() {
  return (
    <div className="@container max-w-screen-xl mx-auto">
      <Routes>
        <Route path="/" element={<RatedMoviesPage /> } />
        <Route path="/trending" element={<TrendingMoviesPage /> } />
      </Routes>
    </div>
  )
}

export default App;
