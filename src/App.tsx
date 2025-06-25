import { Routes, Route } from "react-router";
import RatedMovies from "./RatedMovies";

function App() {
  return (
    <div className="@container max-w-screen-xl mx-auto">
      <Routes>
        <Route path="/" element={<RatedMovies /> } />
      </Routes>
    </div>
  )
}

export default App;
