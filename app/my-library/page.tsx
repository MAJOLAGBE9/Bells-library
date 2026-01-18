// app/my-library/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// Import the data connection to get real books
import { getAllBooks, Book } from "../lib/Data"; 

export default function MyLibraryPage() {
  const [activeTab, setActiveTab] = useState<'current' | 'history'>('current');
  // State to hold the recommended books
  const [recommendedBooks, setRecommendedBooks] = useState<Book[]>([]);

  // Student Profile Info
  const student = {
    name: "Majolagbe Inioluwa",
    id: "2024/13032",
    dept: "Computer Science",
    level: "200 L"
  };

  // 1. Current Loans Data
  const [currentLoans, setCurrentLoans] = useState([
    {
      id: "1",
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      cover: "https://covers.openlibrary.org/b/isbn/9780262033848-L.jpg",
      dueDate: "2026-02-15",
      status: "Due Soon",
      statusColor: "text-yellow-600 bg-yellow-100"
    },
    {
      id: "6",
      title: "The Feynman Lectures on Physics",
      author: "Richard P. Feynman",
      cover: "https://covers.openlibrary.org/b/isbn/9780465024148-L.jpg",
      dueDate: "2026-03-01",
      status: "Active",
      statusColor: "text-green-600 bg-green-100"
    }
  ]);

  // 2. History Data
  const history = [
    {
      id: "2",
      title: "Clean Code",
      author: "Robert C. Martin",
      cover: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
      returnedDate: "2025-12-10",
      rating: 5
    },
    {
      id: "11",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      cover: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
      returnedDate: "2025-11-22",
      rating: 4
    }
  ];

  // 3. FETCH RECOMMENDATIONS (The Creative Part!)
  useEffect(() => {
    const loadRecommendations = async () => {
      const allBooks = await getAllBooks();
      
      // Logic: Get 'Available' books that are NOT currently borrowed by the student
      const suggestions = allBooks
        .filter(b => b.status === 'Available' && !currentLoans.find(loan => loan.id === b.id))
        .slice(0, 4); // Just show the top 4
      
      setRecommendedBooks(suggestions);
    };
    loadRecommendations();
  }, [currentLoans]); // Re-run if loans change

  const handleReturn = (bookId: string) => {
    if (confirm("Are you sure you want to return this book?")) {
      setCurrentLoans(currentLoans.filter(book => book.id !== bookId));
      alert("Book returned successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* Student Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 py-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Library Dashboard</h1>
            <p className="text-gray-500 text-sm hidden md:block">Welcome back to your reading space.</p>
          </div>
          <div className="flex items-center space-x-3">
             <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-gray-900">{student.name}</p>
                <p className="text-xs text-gray-500">{student.id}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-lg">
                {student.name.charAt(0)}
              </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        
        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-600">
            <div className="text-gray-500 text-sm font-medium uppercase">Books Borrowed</div>
            <div className="text-4xl font-bold text-gray-900 mt-2">{currentLoans.length}</div>
            <div className="text-sm text-yellow-600 mt-1">Current Active Loans</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
            <div className="text-gray-500 text-sm font-medium uppercase">Books Returned</div>
            <div className="text-4xl font-bold text-gray-900 mt-2">{history.length}</div>
            <div className="text-sm text-green-600 mt-1">Completed Readings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
            <div className="text-gray-500 text-sm font-medium uppercase">Overdue Fees</div>
            <div className="text-4xl font-bold text-gray-900 mt-2">₦0.00</div>
            <div className="text-sm text-gray-500 mt-1">You are in good standing</div>
          </div>
        </div>

        {/* TABS & LIST */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-12">
          
          {/* Tab Headers */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('current')}
              className={`flex-1 py-4 text-center font-medium transition ${
                activeTab === 'current' 
                  ? 'text-yellow-600 border-b-2 border-yellow-600 bg-yellow-50' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              Current Loans ({currentLoans.length})
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`flex-1 py-4 text-center font-medium transition ${
                activeTab === 'history' 
                  ? 'text-yellow-600 border-b-2 border-yellow-600 bg-yellow-50' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              Borrowing History
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            
            {/* CURRENT LOANS TAB */}
            {activeTab === 'current' && (
              <div className="space-y-6">
                {currentLoans.length === 0 ? (
                  <div className="text-center py-10 text-gray-500">
                    You have no books borrowed at the moment. 
                    <Link href="/books" className="text-yellow-600 font-bold ml-2 hover:underline">Browse Library</Link>
                  </div>
                ) : (
                  currentLoans.map((book) => (
                    <div key={book.id} className="flex flex-col md:flex-row items-center justify-between p-4 border border-gray-100 rounded-lg hover:border-yellow-200 transition">
                      <div className="flex items-center space-x-4 w-full md:w-auto">
                        <div className="w-16 h-24 bg-gray-200 rounded overflow-hidden flex-shrink-0 shadow-sm border border-gray-200">
                          <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">{book.title}</h3>
                          <p className="text-gray-500">{book.author}</p>
                          <div className="flex items-center mt-2 space-x-2">
                             <span className="text-xs text-gray-400">Due: {book.dueDate}</span>
                             <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${book.statusColor}`}>
                               {book.status}
                             </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 w-full md:w-auto flex space-x-3">
                        <Link href={`/book?id=${book.id}`} className="px-4 py-2 text-sm text-yellow-600 border border-yellow-600 rounded hover:bg-yellow-50 transition text-center flex-1 md:flex-none">
                          Read Now
                        </Link>
                        <button 
                          onClick={() => handleReturn(book.id)}
                          className="px-4 py-2 text-sm bg-gray-900 text-white rounded hover:bg-gray-800 transition flex-1 md:flex-none"
                        >
                          Return Book
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* HISTORY TAB */}
            {activeTab === 'history' && (
              <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                  <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-medium">
                    <tr>
                      <th className="px-6 py-3">Book Title</th>
                      <th className="px-6 py-3">Returned Date</th>
                      <th className="px-6 py-3">Rating</th>
                      <th className="px-6 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {history.map((book) => (
                      <tr key={book.id}>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <img src={book.cover} alt="" className="w-8 h-12 object-cover rounded shadow-sm border border-gray-200" />
                            <div>
                                <div className="font-bold text-gray-900">{book.title}</div>
                                <div className="text-gray-500 text-xs">{book.author}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{book.returnedDate}</td>
                        <td className="px-6 py-4 text-yellow-500">{"★".repeat(book.rating)}</td>
                        <td className="px-6 py-4">
                           <Link href={`/book?id=${book.id}`} className="text-yellow-600 hover:underline text-sm">
                             Borrow Again
                           </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* --- NEW SECTION: RECOMMENDED FOR YOU --- */}
        <div className="mb-8 animate-fade-in-up">
           <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
             Top Picks For You
             <span className="ml-3 text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full border border-yellow-200">Recommended</span>
           </h2>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {recommendedBooks.map(book => (
                <Link key={book.id} href={`/book?id=${book.id}`} className="group block">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                    <div className="h-48 overflow-hidden bg-gray-100 relative">
                       {/* Book Cover */}
                       <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                       
                       {/* Creative Touch: Genre Tag on Image */}
                       <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-800 shadow-sm border border-gray-200">
                         {book.genre}
                       </div>
                    </div>
                    
                    <div className="p-4 flex flex-col flex-1">
                       <h3 className="font-bold text-gray-900 line-clamp-1 mb-1 group-hover:text-yellow-600 transition">{book.title}</h3>
                       <p className="text-gray-500 text-sm mb-3 line-clamp-1">{book.author}</p>
                       
                       <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between items-center">
                          <span className="text-yellow-500 text-sm font-bold">★ {book.rating}</span>
                          <span className="text-yellow-600 text-xs font-bold uppercase tracking-wide group-hover:underline">View Details →</span>
                       </div>
                    </div>
                  </div>
                </Link>
              ))}
           </div>
        </div>
        {/* --- END NEW SECTION --- */}

      </div>
    </div>
  );
}