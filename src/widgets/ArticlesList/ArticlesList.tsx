import React, { useEffect, useRef, useState } from "react";

import { ArticlesLayout } from "./ArticlesListStyledComponents";
import { useQuery } from "@apollo/client";
import { IArticlesList } from "../../shared/api/articlesList/model";
import { ARTICLES_LIST_QUERY } from "../../shared/api/articlesList/arcticlesList";
import ArticlesRender from "../../entities/ArticlesRender/ArticlesRender";

const ArticlesList: React.FC = () => {
  const [renderedArticles, setRenderedArticles] = useState<React.ReactNode[]>(
    []
  );
  const [skipLength, setSkipLength] = useState(0);
  const isScrollHandlerActive = useRef(false);
  const prevTimestamp = useRef<number | null>(null);

  const { loading: isArticlesListLoading, data: articlesListData } =
    useQuery<IArticlesList>(ARTICLES_LIST_QUERY, {
      variables: { skip: skipLength },
    });

  useEffect(() => {
    if (!isArticlesListLoading && articlesListData) {
      const articlesArray = (
        <ArticlesRender
          articlesListResponse={articlesListData}
          prevTimestamp={prevTimestamp}
          key={`ArticlesRender-${skipLength}`}
        />
      );
      setRenderedArticles((prevState) => prevState.concat(articlesArray));
    }
  }, [articlesListData]);

  function onScrollCallback() {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const clientHeight = document.documentElement.clientHeight;

    if (
      !isArticlesListLoading &&
      scrollTop / (scrollHeight - clientHeight) >= 0.7 &&
      isScrollHandlerActive.current
    ) {
      window.removeEventListener("scroll", onScrollCallback);
      isScrollHandlerActive.current = false;
      setSkipLength((prevState) => prevState + 10);
    }
  }

  useEffect(() => {
    if (
      !isArticlesListLoading &&
      articlesListData &&
      renderedArticles &&
      !isScrollHandlerActive.current
    ) {
      window.addEventListener("scroll", onScrollCallback);
      isScrollHandlerActive.current = true;
    }
  }, [renderedArticles]);

  return <ArticlesLayout>{renderedArticles}</ArticlesLayout>;
};

export default ArticlesList;
