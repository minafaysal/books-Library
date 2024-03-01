export interface BOOK {
  first_publish_year: number;
  title: string;
  authors: {
    key: string;
    name: string;
  };
  imageUrl: string;
}
