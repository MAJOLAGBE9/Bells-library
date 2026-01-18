// app/books/page.tsx
import Link from "next/link";
import { getAllBooks } from "../lib/Data"; // Make sure this path is correct

export default async function BooksPage({
  searchParams,
}: {
  searchParams: { genre?: string; search?: string };
}) {
  const allBooks = await getAllBooks();
  
  // 1. Get the search text from the URL (e.g., ?search=python)
  const searchQuery = searchParams.search?.toLowerCase();
  const genreFilter = searchParams.genre;

  // 2. Filter the books
  const displayedBooks = allBooks.filter((book) => {
    // If there is a genre in the URL, does the book match?
    const matchesGenre = genreFilter ? book.genre === genreFilter : true;
    
    // If there is search text, does the Title or Author match?
    const matchesSearch = searchQuery
      ? book.title.toLowerCase().includes(searchQuery) ||
        book.author.toLowerCase().includes(searchQuery)
      : true;

    return matchesGenre && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 border-l-4 border-yellow-600 pl-4">
              {searchQuery ? `Search Results for "${searchParams.search}"` : (genreFilter ? `${genreFilter} Books` : "All Books")}
            </h1>
            <p className="text-gray-600 mt-2 pl-4">
              Showing <span className="font-bold text-yellow-600">{displayedBooks.length}</span> book{displayedBooks.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          <Link href="/" className="text-yellow-600 hover:text-yellow-800 font-medium transition flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
             <span className="mr-2">←</span> Back to Home
          </Link>
        </div>

        {/* The Grid of Books */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {displayedBooks.map((book) => (
            <Link key={book.id} href={`/book?id=${book.id}`} className="group">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-300 h-full flex flex-col">
                
                {/* Book Cover */}
                <div className="h-64 overflow-hidden bg-gray-200 relative">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Status Badge */}
                   <div className="absolute top-2 right-2">
                      <span className={`px-2 py-1 text-xs font-bold rounded-full shadow-sm ${
                        book.status === 'Available' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {book.status}
                      </span>
                   </div>
                </div>

                {/* Book Details */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-yellow-600 transition mb-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{book.author}</p>
                  
                  <div className="mt-auto flex justify-between items-center text-xs pt-3 border-t border-gray-100">
                    <span className="bg-yellow-50 text-yellow-800 px-2 py-1 rounded border border-yellow-100">
                      {book.genre}
                    </span>
                    <span className="text-yellow-600 font-bold flex items-center">
                      ★ {book.rating}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State - If search finds nothing */}
        {displayedBooks.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No books found</h3>
            <p className="text-gray-500 mb-6">We couldn't find any books matching "{searchQuery}".</p>
            <Link href="/books" className="text-white bg-yellow-600 px-6 py-2 rounded-lg hover:bg-yellow-700 transition shadow-md">
              View All Books
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}