// app/page.tsx
import Link from 'next/link';
import { getAllBooks } from './lib/Data';

export default async function HomePage() {
  const books = await getAllBooks();
  const featuredBooks = books.slice(0, 8); 
  const availableBooks = books.filter(b => b.status === 'Available').length;
  const totalBooks = books.length;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      


      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
              Welcome to Bells E-Library
            </h1>
            <p className="text-xl md:text-2xl text-yellow-50 mb-10 leading-relaxed font-light">
              Your gateway to unlimited knowledge. Access thousands of academic books, 
              journals, and resources anytime, anywhere.
            </p>
            
            {/* Search Bar */}
            <form action="/books" className="relative max-w-2xl mx-auto mb-12">
              <input
                type="text"
                name="search"
                placeholder="Search for books, authors, or ISBN..."
                className="w-full px-6 py-5 pr-14 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 shadow-xl"
              />
              <button type="submit" className="absolute right-2 top-2 bg-yellow-600 text-white p-3 rounded-full hover:bg-yellow-700 transition shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/books" 
                className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-50 transition transform hover:scale-105 shadow-lg"
              >
                Explore Books
              </Link>
              <Link 
                href="/my-library" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-yellow-600 transition transform hover:scale-105"
              >
                My Library
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-md text-center transform hover:scale-105 transition border-b-4 border-yellow-500">
              <div className="text-5xl font-bold text-yellow-600 mb-2">{totalBooks}+</div>
              <div className="text-gray-600 font-medium">Total Books</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center transform hover:scale-105 transition border-b-4 border-yellow-500">
              <div className="text-5xl font-bold text-green-600 mb-2">{availableBooks}</div>
              <div className="text-gray-600 font-medium">Available Now</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center transform hover:scale-105 transition border-b-4 border-yellow-500">
              <div className="text-5xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Access Anytime</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center transform hover:scale-105 transition border-b-4 border-yellow-500">
              <div className="text-5xl font-bold text-orange-600 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Active Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Books</h2>
              <p className="text-gray-600 text-lg">Discover our most popular titles</p>
            </div>
            <Link href="/books" className="text-yellow-600 hover:text-yellow-700 font-semibold flex items-center text-lg group">
              View All Books
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <Link key={book.id} href={`/book?id=${book.id}`} className="group">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full shadow-sm ${
                        book.status === 'Available' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {book.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 line-clamp-1 mb-2 group-hover:text-yellow-600 transition">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-1 mb-3">{book.author}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-yellow-500 font-semibold flex items-center">
                        ★ {book.rating}
                      </span>
                      <span className="text-xs text-gray-500">{book.pages} pages</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Browse by Category</h2>
            <p className="text-gray-600 text-lg">Find books in your area of interest</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { name: 'Computer Science', icon: '💻', color: 'bg-blue-100 text-blue-600' },
              { name: 'Mathematics', icon: '📐', color: 'bg-purple-100 text-purple-600' },
              { name: 'Engineering', icon: '⚙️', color: 'bg-orange-100 text-orange-600' },
              { name: 'Physics', icon: '🔬', color: 'bg-green-100 text-green-600' },
              { name: 'Chemistry', icon: '🧪', color: 'bg-red-100 text-red-600' },
              { name: 'Biology', icon: '🧬', color: 'bg-teal-100 text-teal-600' },
              { name: 'Literature', icon: '📚', color: 'bg-pink-100 text-pink-600' },
              { name: 'Business', icon: '💼', color: 'bg-indigo-100 text-indigo-600' }
            ].map((category) => (
              <Link
                key={category.name}
                href={`/books?genre=${encodeURIComponent(category.name)}`}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100 hover:border-yellow-200 h-full flex flex-col items-center justify-center">
                  <div className={`${category.color} w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-yellow-600 transition text-lg">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Why Choose Bells E-Library?</h2>
            <p className="text-gray-600 text-lg">Everything you need for academic success</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-yellow-200 transition">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Vast Collection</h3>
              <p className="text-gray-600 leading-relaxed">Access thousands of academic books, journals, and research materials across all disciplines</p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-green-200 transition">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Easy Borrowing</h3>
              <p className="text-gray-600 leading-relaxed">Borrow up to 3 books with a simple one-click process.</p>
            </div>

            <div className="text-center group">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-purple-200 transition">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Track Progress</h3>
              <p className="text-gray-600 leading-relaxed">Monitor your reading progress with visual trackers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Reading?</h2>
          <p className="text-xl text-yellow-50 mb-8 leading-relaxed">
            Join thousands of Bells University students accessing quality academic resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/books" 
              className="bg-white text-yellow-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-50 transition transform hover:scale-105 shadow-xl"
            >
              Browse Library
            </Link>
            <Link 
              href="/login" 
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-yellow-600 transition transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - With Gold Top Border */}
      <footer className="bg-gray-900 text-white py-12 border-t-4 border-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 3.6v8.72c0 4.56-3.24 8.84-8 9.86-4.76-1.02-8-5.3-8-9.86V7.78l8-3.6z"/>
                </svg>
                <span className="text-xl font-bold">Bells E-Library</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering students with knowledge and resources for academic excellence.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/books" className="hover:text-yellow-500 transition">Browse Books</Link></li>
                <li><Link href="/my-library" className="hover:text-yellow-500 transition">My Library</Link></li>
                <li><Link href="/login" className="hover:text-yellow-500 transition">Login</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-500 transition">Help Center</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">FAQs</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Guidelines</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Contact</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Bells University of Technology<br/>
                Km 8, Idiroko Road, Benja Village, Ota, Ogun State, Nigeria<br/>
                Email: library@bellsuniversity.edu.ng
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 Bells E-Library. ICT 235 Project - All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                 <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}