// app/components/Navbar.tsx
"use client"; // This makes the button clickable!

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 3.6v8.72c0 4.56-3.24 8.84-8 9.86-4.76-1.02-8-5.3-8-9.86V7.78l8-3.6z"/>
            </svg>
            <span className="text-xl font-bold text-gray-900">Bells E-Library</span>
          </Link>

          {/* Desktop Menu (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/books" className="text-gray-700 hover:text-yellow-600 font-medium transition">
              Browse Books
            </Link>
            <Link href="/my-library" className="text-gray-700 hover:text-yellow-600 font-medium transition">
              My Library
            </Link>
            <Link href="/login" className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition font-medium shadow-md">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-700 focus:outline-none p-2"
          >
            {isOpen ? (
              // Close Icon (X)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Menu Icon (Hamburger)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Only shows when open) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
            <Link 
              href="/books" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-yellow-50"
              onClick={() => setIsOpen(false)} // Close menu when clicked
            >
              Browse Books
            </Link>
            <Link 
              href="/my-library" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-yellow-50"
              onClick={() => setIsOpen(false)}
            >
              My Library
            </Link>
            <Link 
              href="/login" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700 text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}