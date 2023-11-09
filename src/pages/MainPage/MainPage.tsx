import React from "react";
import ArticlesList from "../../widgets/ArticlesList/ArticlesList";
import { MainContainer } from "./MainPageStyledComponents";

const MainPage: React.FC = () => {
  return (
    <MainContainer>
      <ArticlesList />
    </MainContainer>
  );
};

export default MainPage;
