import { gql } from "@apollo/client";

export const ARTICLE_QUERY = gql`
  query GetArticle($id: String!) {
    content(
      id: $id
      project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1"
      full_url: "business/simpals-novye-rabochie-mesta-dlia-vsekh-zhelaiushchikh"
    ) {
      title {
        short
      }
      description {
        intro
      }
      thumbnail
      dates {
        posted
      }
      parents {
        id
        type
        attachment
      }
      url
      cparent {
        id
        url {
          ru
        }
      }
    }
  }
`;
