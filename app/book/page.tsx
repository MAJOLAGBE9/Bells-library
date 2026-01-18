// app/book/page.tsx
import Link from "next/link";
import { getBookData, getRelatedBooks } from "../lib/Data"; 

export default async function BookDetailsPage({
  searchParams,
}: {
  // In Next.js 15, searchParams is a Promise
  searchParams: Promise<{ id?: string }>;
}) {
  // 1. AWAIT the searchParams before using them
  const params = await searchParams;
  
  // 2. Now extract the ID safely (default to "1" only if missing)
  const bookId = params.id || "1";

  // 3. Fetch the correct book
  const book = await getBookData(bookId);
  const relatedBooks = await getRelatedBooks();

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Not Found</h1>
          <p className="text-gray-600 mb-8">We couldn't find the book you're looking for.</p>
          <Link href="/books" className="text-yellow-600 font-bold hover:underline">
            ← Return to Library
          </Link>
        </div>
      </div>
    );
  }

  // Safe check for the link
  const bookLink = book.pdfUrl && book.pdfUrl.length > 5 ? book.pdfUrl : "#";

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <Link href="/books" className="text-yellow-600 hover:text-yellow-800 font-medium mb-8 inline-flex items-center">
          <span className="mr-2">←</span> Back to Library
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="md:flex">
            
            {/* Left Side: Book Cover */}
            <div className="md:w-1/3 bg-gray-100 p-8 flex items-center justify-center">
              <div className="relative w-48 shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Side: Details */}
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{book.title}</h1>
                  <p className="text-xl text-gray-600 mb-4">{book.author}</p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                  book.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {book.status}
                </span>
              </div>

              {/* Stats Row */}
              <div className="flex space-x-6 mb-8 border-b border-gray-100 pb-8">
                <div>
                  <span className="block text-gray-400 text-xs uppercase tracking-wide">Rating</span>
                  <span className="text-yellow-500 font-bold text-lg">★ {book.rating}</span>
                </div>
                <div>
                  <span className="block text-gray-400 text-xs uppercase tracking-wide">Pages</span>
                  <span className="text-gray-900 font-bold text-lg">{book.pages}</span>
                </div>
                <div>
                  <span className="block text-gray-400 text-xs uppercase tracking-wide">Language</span>
                  <span className="text-gray-900 font-bold text-lg">English</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{book.description}</p>
              </div>

              {/* READ ONLY ACTION BUTTON */}
              <div className="mt-8">
                <a 
                  href={bookLink} 
                  target="_blank"           
                  rel="noopener noreferrer" 
                  className={`w-full text-white px-6 py-4 rounded-lg font-bold text-lg text-center transition shadow-md flex items-center justify-center gap-2 ${
                    bookLink === "#" 
                      ? "bg-gray-400 cursor-not-allowed" 
                      : "bg-yellow-600 hover:bg-yellow-700"
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {bookLink === "#" ? "Not Available Online" : "Read Now (Online Access)"}
                </a>
                
                <p className="text-center text-gray-500 text-sm mt-3">
                  * This resource is available for online reading only.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Related Books */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You might also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedBooks.map((related) => (
              <Link key={related.id} href={`/book?id=${related.id}`} className="group">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                  <div className="h-48 bg-gray-200 overflow-hidden">
                     <img src={related.coverImage} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-sm line-clamp-1">{related.title}</h3>
                    <p className="text-gray-500 text-xs">{related.author}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}