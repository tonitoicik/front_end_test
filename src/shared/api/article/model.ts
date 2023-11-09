export interface IArticle {
  content: Content;
}

interface Content {
  title: Title;
  description: Description;
  thumbnail: string;
  dates: Dates;
  parents: Parent[];
  url: string;
  cparent: CParent;
}

interface Dates {
  posted: number;
}

interface Description {
  intro: string;
}

interface Parent {
  id: string;
  type: string;
  attachment: string;
}

interface Title {
  short: string;
}

interface CParent {
  id: string;
  url: Link;
}

interface Link {
  ru: string;
}
