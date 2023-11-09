import React from "react";
import { IArticlesList } from "../../shared/api/articlesList/model";
import Article from "../../entities/Article/Article";
import { differentDayCheck } from "../../shared/utils/differentDayCheck";
import { formatTimestampToCustomString } from "../../shared/utils/formatTimestampToCustomString";
import { calculateTitle } from "../../shared/utils/calculateTitle";
import {
  ListTitle,
  ListTitleContainer,
} from "./ArticlesRenderStyledComponents";
import { FIRST_NEWS } from "../../app/providers/RouterConfig";

interface ArticlesRenderProps {
  articlesListResponse: IArticlesList;
  prevTimestamp: React.MutableRefObject<number | null>;
}

const ArticlesRender: React.FC<ArticlesRenderProps> = ({
  articlesListResponse,
  prevTimestamp,
}) => {
  const articlesListContents = articlesListResponse.contents;

  const articlesArray = articlesListContents.map((article) => {
    const articlePostedTimestamp = article.dates.posted;

    if (prevTimestamp.current === null) {
      prevTimestamp.current = articlePostedTimestamp;
      return (
        <div key={`article-${article.id}`}>
          <ListTitleContainer>
            <ListTitle>{calculateTitle(articlePostedTimestamp)}</ListTitle>
          </ListTitleContainer>
          <Article
            id={article.id}
            key={`article-${article.id}`}
            customLink={FIRST_NEWS}
          />
        </div>
      );
    } else {
      if (differentDayCheck(articlePostedTimestamp, prevTimestamp.current)) {
        prevTimestamp.current = articlePostedTimestamp;
        return (
          <div key={`article-${article.id}`}>
            <ListTitleContainer>
              <ListTitle>
                {formatTimestampToCustomString(articlePostedTimestamp)}
              </ListTitle>
            </ListTitleContainer>
            <Article id={article.id} />
          </div>
        );
      }
    }
    return <Article id={article.id} key={`article-${article.id}`} />;
  });

  return <>{articlesArray}</>;
};

export default ArticlesRender;
