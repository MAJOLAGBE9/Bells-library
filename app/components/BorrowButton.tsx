'use client';

import { useState } from 'react';

interface BorrowButtonProps {
  bookId: string;
  bookTitle: string;
  currentStatus: 'Available' | 'Borrowed' | 'Reserved';
}

export default function BorrowButton({ bookId, bookTitle, currentStatus }: BorrowButtonProps) {
  const [status, setStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Check user's current borrow count from localStorage
  const checkBorrowLimit = (): boolean => {
    const borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks') || '[]');
    return borrowedBooks.length < 3; // Maximum 3 books
  };

  const handleBorrow = async () => {
    setLoading(true);
    setMessage('');

    // Check borrow limit
    if (!checkBorrowLimit()) {
      setMessage('You have reached the maximum borrow limit (3 books)');
      setLoading(false);
      return;
    }

    try {
      // Simulate borrowing process
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Calculate due date (14 days from now)
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + 14);

      // Get existing borrowed books
      const borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks') || '[]');
      
      // Add new book
      borrowedBooks.push({
        bookId,
        bookTitle,
        borrowDate: new Date().toISOString(),
        dueDate: dueDate.toISOString(),
        renewalsLeft: 2
      });

      // Save to localStorage
      localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));

      setStatus('Borrowed');
      setMessage(`Successfully borrowed! Due date: ${dueDate.toLocaleDateString()}`);
    } catch (error) {
      setMessage('Failed to borrow book. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReturn = async () => {
    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Remove book from borrowed list
      const borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks') || '[]');
      const updatedBooks = borrowedBooks.filter((b: any) => b.bookId !== bookId);
      localStorage.setItem('borrowedBooks', JSON.stringify(updatedBooks));

      setStatus('Available');
      setMessage('Book returned successfully!');
    } catch (error) {
      setMessage('Failed to return book. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      {status === 'Available' && (
        <button
          onClick={handleBorrow}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Borrowing...' : 'Borrow Book'}
        </button>
      )}

      {status === 'Borrowed' && (
        <button
          onClick={handleReturn}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Returning...' : 'Return Book'}
        </button>
      )}

      {status === 'Reserved' && (
        <button
          disabled
          className="w-full bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg cursor-not-allowed"
        >
          Reserved
        </button>
      )}

      {message && (
        <p className={`text-sm ${message.includes('Failed') || message.includes('limit') ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
}