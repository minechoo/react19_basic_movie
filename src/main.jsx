import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </StrictMode>,
);

/*
  SPA : Single Page Application (하나의 문서로 동작하는 웹 페이지)
  - 실제 브라우저 입장에서 하나의 html문서 파일만 호출
  - 이후 js를 통해 동적으로 하나의 html안쪽의 페이지별 컨텐츠를 변경처리

  MPA : Multi Page Application (여러개의 문서로 동작하는 웹 페이지)
  - 사용자가 링크를 클릭시마다 브라우저가 직접 서버쪽에 각각의 페이지별 html 파일 요청 후 호출
*/
