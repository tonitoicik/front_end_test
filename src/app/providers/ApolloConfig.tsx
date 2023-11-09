import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { API_URL } from "../../shared/config";
import React from "react";

interface ApolloConfigProps {
  children: React.ReactNode;
}

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

const ApolloConfig: React.FC<ApolloConfigProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloConfig;
