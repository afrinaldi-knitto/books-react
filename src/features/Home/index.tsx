import { useEffect, useState } from "react";
import { getBooks } from "../../services/book-services";
import { getAuthors } from "../../services/author-services";
import { useNavigate } from "react-router";
import HomePage from "./page/home-page";

const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    Promise.all([getBooks(), getAuthors()])
      .then(([bookResponse, authorResponse]) => {
        setBooks(bookResponse.data);
        setAuthors(authorResponse.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <HomePage
      isLoading={isLoading}
      authors={authors}
      books={books}
      handleLogout={handleLogout}
    />
  );
};

export default Home;
