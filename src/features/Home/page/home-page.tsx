import AuthorList from "../components/author-list";
import BookList from "../components/book-list";
import Navbar from "../components/navbar";

interface HomePageProps {
  isLoading: boolean;
  books: Book[];
  authors: Author[];
  handleLogout: () => void;
}

const HomePage = ({
  isLoading,
  books,
  authors,
  handleLogout,
}: HomePageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Navbar handleLogout={handleLogout} />
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h2 className="font-bold text-xl text-gray-800 dark:text-blue-100 mb-2">
          Books
        </h2>
        <BookList books={books} isLoading={isLoading} />
        <h2 className="font-bold text-xl text-gray-800 dark:text-blue-100 mt-8 mb-2">
          Authors
        </h2>
        <AuthorList authors={authors} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default HomePage;
