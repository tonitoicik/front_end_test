import React from "react";
import { BrowserRouter } from "react-router-dom";

interface RouterConfigProps {
  children: React.ReactNode;
}

const RouterConfig: React.FC<RouterConfigProps> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

/**
 * MAIN
 */
export const HOME = "/";

/**
 * NEWS
 */

export const FIRST_NEWS = "/news/first";

export default RouterConfig;
