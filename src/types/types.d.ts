interface ResponseApi<T> {
  message: string;
  data: T;
}

interface Book {
  id: number;
  title: string;
  author_id: number | null;
  authors: Author | null;
}

interface Author {
  id: number;
  name: string;
  books?: string[];
}
