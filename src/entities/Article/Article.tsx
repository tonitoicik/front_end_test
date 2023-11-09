import React from "react";
import { ARTICLE_QUERY } from "../../shared/api/article/article";
import { useQuery } from "@apollo/client";
import { IArticle } from "../../shared/api/article/model";
import { decodeHTMLEntities } from "../../shared/utils/decodeHTMLEntities";
import {
  ArticleContainer,
  ContentContainer,
  ImageContainer,
  Image,
  SourceContainer,
  SourceImage,
  Title,
  TimeInfo,
  Description,
  SkeletonIcon,
  SkeletonContainer,
  StyledLink,
} from "./ArticleStyledComponents";
import { truncateText } from "../../shared/utils/truncateText";
import { calculateTimeAgo } from "../../shared/utils/calculateTimeAgo";
interface ArticleProps {
  id: string;
  customLink?: string;
}

const Article: React.FC<ArticleProps> = ({ id, customLink }) => {
  const {
    loading: isArticleLoading,
    error: articleError,
    data: articleData,
  } = useQuery<IArticle>(ARTICLE_QUERY, {
    variables: { id: id },
  });

  if (!isArticleLoading && articleData) {
    const articleContent = articleData.content;
    const imageUrl = articleContent.thumbnail;
    const articleTitle = decodeHTMLEntities(articleData.content.title.short);
    const descriptionText = truncateText(
      decodeHTMLEntities(articleData.content.description.intro)
    );
    const sourceObject = articleData?.content.parents.find(
      (parent) => parent.type === "source"
    );
    const sourceAttachment = sourceObject?.attachment;
    const articleTime = calculateTimeAgo(articleContent.dates.posted);
    const articleLink = `https://point.md/ru/novosti/${articleContent.cparent.url.ru}/${articleContent.url}`;
    return (
      <ArticleContainer>
        <ImageContainer>
          <Image
            src={`https://i.simpalsmedia.com/point.md/news/370x194/${imageUrl}`}
            alt={articleTitle}
          />
        </ImageContainer>
        <ContentContainer>
          <StyledLink href={customLink ?? articleLink}>
            <Title>{articleTitle}</Title>
          </StyledLink>
          <Description>{descriptionText}</Description>
          <SourceContainer>
            {sourceAttachment ? (
              <SourceImage
                src={`https://i.simpalsmedia.com/point.md/logo/${sourceAttachment}`}
              />
            ) : (
              <SkeletonIcon />
            )}
            <TimeInfo>{articleTime}</TimeInfo>
          </SourceContainer>
        </ContentContainer>
      </ArticleContainer>
    );
  } else {
    return <SkeletonContainer></SkeletonContainer>;
  }
};

export default Article;
