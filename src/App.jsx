import { Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import MovieList from "./pages/MovieList";

function App() {
  return (
    <main className="theme-bg w-full h-screen">
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/detail" element={<MovieDetail />} />
      </Routes>
    </main>
  );
}

export default App;
