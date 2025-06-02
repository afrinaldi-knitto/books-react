import { useRef } from "react";
import CircularSpinner from "../../../components/circular-spinner";

interface AuthorListProps {
  authors: Author[];
  isLoading: boolean;
}

const AuthorList = ({ authors, isLoading }: AuthorListProps) => {
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
        authors.map((author) => (
          <div
            key={author.id}
            className="w-20 flex-shrink-0 flex flex-col cursor-pointer"
          >
            <img
              src={`https://picsum.photos/seed/author${author.id}/200`}
              alt={author.name}
              className="w-20 h-20 object-cover rounded-full bg-blue-200 dark:bg-gray-800 mb-1 pointer-events-none"
            />
            <div className="text-xs text-center text-gray-800 dark:text-gray-100 font-medium">
              {author.name}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AuthorList;
