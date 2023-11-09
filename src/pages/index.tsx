import React, { lazy } from "react";
import { Route, Routes } from "react-router";
import { HOME, FIRST_NEWS } from "../app/providers/RouterConfig";

const RootPage = lazy(() => import("./MainPage/MainPage"));
const FirstNewsPage = lazy(() => import("./FirstNewsPage/FirstNewsPage"));

export const Routing = () => {
  return (
    <Routes>
      <Route path={HOME} element={<RootPage />} />
      <Route path={FIRST_NEWS} element={<FirstNewsPage />} />
    </Routes>
  );
};
