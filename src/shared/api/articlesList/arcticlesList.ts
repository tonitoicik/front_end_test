import { gql } from "@apollo/client";
import { API_URL } from "../../config";

export const ARTICLES_LIST_QUERY = gql`
  query GetArticlesList($skip: Int!) {
    contents(
      project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1"
      lang: "ru"
      skip: $skip
      take: 10
    ) {
      id
      dates {
        posted
      }
    }
  }
`;
