import { Routing } from "../pages";
import React from "react";
import Providers from "./providers";
import "./styles/normalize.css";

function Index() {
  return (
    <Providers>
      <Routing />
    </Providers>
  );
}

export default Index;
