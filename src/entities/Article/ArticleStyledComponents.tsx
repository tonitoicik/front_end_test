import styled from "styled-components";

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 24px;
`;

export const ImageContainer = styled.div`
  width: 240px;
  border-radius: 4px;
  overflow: hidden;
  pointer-events: none;
  flex-shrink: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const ContentContainer = styled.div`
  height: 100%;
  margin-left: 16px;
  display: flex;
  max-width: 100%;
  flex-direction: column;
  -moz-box-pack: justify;
  justify-content: space-between;
`;

export const StyledLink = styled.a`
  cursor: pointer;
  outline: none;
  text-decoration: none;
`;

export const Title = styled.h3`
  font-size: 24px;
  line-height: 26px;
  position: relative;
  color: rgb(15, 23, 42);
  letter-spacing: 0;
  margin: -2.5px 0 8px;
  font-weight: 500;

  &:hover {
    color: rgb(255, 71, 0);
  }
`;

export const Description = styled.p`
  line-height: 20px;
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 10px;
  color: rgb(15, 23, 42);
`;

export const SourceContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  height: 16px;
`;

export const SourceImage = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 2px;
  margin-right: 8px;
`;

export const TimeInfo = styled.p`
  font-size: 14px;
  color: rgb(128, 128, 128);
  line-height: 0;
  width: max-content;
`;

export const SkeletonIcon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 2px;
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  font-size: 11px;
  font-weight: 500;
  align-items: center;
  position: relative;
  margin-right: 8px;
  background-color: rgb(128, 128, 128);

  &::after {
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    content: "";
  }
`;

export const SkeletonContainer = styled.div`
  width: 100%;
  height: 125px;
`;
