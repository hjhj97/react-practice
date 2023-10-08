import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./pages/Post.tsx";
import Search from "./pages/Search.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </BrowserRouter>
);
