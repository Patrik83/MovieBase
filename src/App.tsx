import { Routes, Route } from "react-router";
import RatedMoviesPage from "./pages/RatedMoviesPage";
import TrendingMoviesPage from "./pages/TrendingMoviesPage";
import Navigation from "./components/Navigation";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <Navigation />
      
      <div className="@container max-w-screen-xl mx-auto">
        <Routes>
          <Route path="/rated" element={<RatedMoviesPage /> } />
          <Route path="/trending" element={<TrendingMoviesPage /> } />
          <Route path="/search" element={<SearchPage /> } />
        </Routes>
      </div>
    </>
  )
}

export default App;
