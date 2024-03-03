export interface BOOK {
  first_publish_year: number;
  title: string;
  authors: Author[];
  key: string;
  cover_id: string | undefined;
  cover_img: string;
  id: string;
  edition_count: 'number';
}

export interface Author {
  key: string;
  name: string;
}
