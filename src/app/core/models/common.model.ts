export interface BOOK {
  first_publish_year: number;
  title: string;
  authors: Author[];
  key: string;
  cover_id: string;
  cover_img: string;
}

export interface Author {
  key: string;
  name: string;
}
