import { useRef } from "react";
import CircularSpinner from "../../../components/circular-spinner";

interface BookListProps {
  books: Book[];
  isLoading: boolean;
}

const BookList = ({ books, isLoading }: BookListProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    isDragging.current = true;
    containerRef.current.setPointerCapture(e.pointerId);
    startX.current = e.clientX;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isDragging.current) return;
    const x = e.clientX;
    const walk = (x - startX.current) * 1.2;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handlePointerUpOrLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    isDragging.current = false;
    try {
      containerRef.current.releasePointerCapture(e.pointerId);
    } catch {
      console.log("something wrong when pointer up");
    }
  };

  return (
    <div
      ref={containerRef}
      className="overflow-x-auto scrollbar-hide flex gap-4 pb-2 select-none cursor-grab active:cursor-grabbing"
      style={{ WebkitOverflowScrolling: "touch" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUpOrLeave}
      onPointerLeave={handlePointerUpOrLeave}
      onPointerCancel={handlePointerUpOrLeave}
    >
      {isLoading ? (
        <CircularSpinner />
      ) : (
        books.map((book) => (
          <div
            key={book.id}
            className="w-40 flex-shrink-0 bg-white dark:bg-gray-900 rounded-md shadow border border-blue-100 dark:border-gray-700 flex flex-col items-center p-2 cursor-pointer"
          >
            <img
              src={`https://picsum.photos/seed/book${book.id}/200`}
              alt={book.title}
              className="w-36 h-36 object-cover rounded-sm mb-1 pointer-events-none"
            />
            <div className="text-xs text-center text-gray-800 dark:text-gray-100 font-medium">
              {book.title}
            </div>
            <div className="text-[11px] text-blue-500 dark:text-blue-300">
              {book.authors?.name ?? "Unknown Author"}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BookList;
