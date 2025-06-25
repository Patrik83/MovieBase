import { Routes, Route } from "react-router";
import RatedMoviesPage from "./RatedMoviesPage";
import TrendingMoviesPage from "./TrendingMoviesPage";

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
