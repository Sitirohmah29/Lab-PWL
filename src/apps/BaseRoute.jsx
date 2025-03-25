import React from "react";
import { Route, Routes } from "react-router-dom";
import ChapterOne from "../modules/chapter-1/ChapterOne";
import { NotFound } from "../errors/404";
import { ChapterTwo } from "../modules/chapter-2/ChapterTwo";

export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route index element={<ChapterOne />} />
        <Route path="home" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="chapter-two" element={<ChapterTwo />} />
      </Routes>
    </React.Suspense>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Ini Home looo...</h1>
    </div>
  );
};
