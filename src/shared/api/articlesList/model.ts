export interface IArticlesList {
  contents: ArticleData[];
}

interface ArticleData {
  id: string;
  dates: Dates;
}

interface Dates {
  posted: number;
}
