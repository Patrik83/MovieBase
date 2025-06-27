import { Routes, Route } from "react-router";
import RatedMoviesPage from "./pages/RatedMoviesPage";
import TrendingMoviesPage from "./pages/TrendingMoviesPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      
      <div className="@container max-w-screen-xl mx-auto">
        <Routes>
          <Route path="/rated" element={<RatedMoviesPage /> } />
          <Route path="/trending" element={<TrendingMoviesPage /> } />
        </Routes>
      </div>
    </>
  )
}

export default App;
