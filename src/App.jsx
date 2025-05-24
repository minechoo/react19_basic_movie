import { Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import MovieList from "./pages/MovieList";
import Header from "./components/Header";

function App() {
  return (
    <main className="theme-bg w-full h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<MovieList />} />
        {/* 동적라우터 설정 /detail/123 -> detail 패스에 연결된 MovieDetail컴포넌트를 호출하면서 123 정보값을 id변수에 담아서 전달 */}
        <Route path="/detail/:id" element={<MovieDetail />} />
      </Routes>
    </main>
  );
}

export default App;
