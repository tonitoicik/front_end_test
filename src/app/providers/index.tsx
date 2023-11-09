import React from "react";
import ApolloConfig from "./ApolloConfig";
import RouterConfig from "./RouterConfig";

interface ProvidersProps {
  children?: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ApolloConfig>
      <RouterConfig>{children}</RouterConfig>
    </ApolloConfig>
  );
};

export default Providers;
