// app/lib/Data.ts

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: "Computer Science" | "Physics" | "Chemistry" | "Mathematics" | "Literature" | "Business" | "Engineering" | "Biology";
  coverImage: string; 
  cover: string;      
  description: string;
  rating: number;
  pages: number;
  status: 'Available' | 'Borrowed' | 'Reserved';
  pdfUrl: string; // Link to the book file
  reviews: { user: string; text: string; rating: number }[];
}

// A sample PDF link for testing (You can replace these with real links later)
const SAMPLE_PDF = "https://en.wikipedia.org/wiki/Introduction_to_Algorithms";

const books: Book[] = [
  // --- COMPUTER SCIENCE ---
  
  {
    id: "1",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    genre: "Computer Science",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780262033848-L.jpg",
    cover: "https://covers.openlibrary.org/b/isbn/9780262033848-L.jpg",
    rating: 4.8,
    pages: 1312,
    status: "Available",
    pdfUrl: "https://en.wikipedia.org/wiki/Introduction_to_Algorithms", 
    description: "A comprehensive update...",
    reviews: []
  },
  {
    id: "2",
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Computer Science",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
    cover: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
    rating: 4.7,
    pages: 464,
    status: "Borrowed",
    pdfUrl:"https://thewolfsound.com/how-to-write-good-code-lessons-learned-from-clean-code/",
    description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees.",
    reviews: []
  },
  {
    id: "3",
    title: "Artificial Intelligence",
    author: "Stuart Russell",
    genre: "Computer Science",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780134610993-L.jpg",
    cover: "https://covers.openlibrary.org/b/isbn/9780134610993-L.jpg",
    rating: 4.9,
    pages: 1152,
    status: "Reserved",
    pdfUrl: "https://en.wikipedia.org/wiki/Artificial_Intelligence:_A_Modern_Approach",
    description: "The long-anticipated revision of this best-selling text offers the most comprehensive, up-to-date introduction to the theory and practice of artificial intelligence.",
    reviews: []
  },
  {
    id: "4",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Computer Science",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780201616224-L.jpg",
    cover: "https://covers.openlibrary.org/b/isbn/9780201616224-L.jpg",
    rating: 4.8,
    pages: 352,
    status: "Available",
    pdfUrl: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/",
    description: "Written as a series of self-contained sections and filled with entertaining anecdotes, thoughtful examples, and interesting analogies.",
    reviews: []
  },
  {
    id: "5",
    title: "Design Patterns",
    author: "Erich Gamma",
    genre: "Computer Science",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg",
    cover: "https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg",
    rating: 4.6,
    pages: 395,
    status: "Available",
    pdfUrl:"https://www.oreilly.com/library/view/design-patterns-elements/0201633612/",
    description: "Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems.",
    reviews: []
  },

  // --- PHYSICS ---
  {
    id: "6",
    title: "The Feynman Lectures on Physics",
    author: "Richard P. Feynman",
    genre: "Physics",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780465024148-L.jpg",
    cover: "https://covers.openlibrary.org/b/isbn/9780465024148-L.jpg",
    rating: 5.0,
    pages: 1552,
    status: "Available",
    pdfUrl: "https://www.google.com.ng/books/edition/The_Feynman_Lectures_on_Physics_Vol_I/d76DBQAAQBAJ?hl=en",
    description: "The whole thing was basically an experiment. Richard Feynman, one of the greatest physicists of the 20th century, presented this series.",
    reviews: []
  },
  {
    id: "7",
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "Physics",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg",
    cover: "https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg",
    rating: 4.7,
    pages: 212,
    status: "Borrowed",
    pdfUrl: "https://en.wikipedia.org/wiki/A_Brief_History_of_Time",
    description: "A landmark volume in science writing by one of the great minds of our time, Stephen Hawking explores such profound questions as: How did the universe begin?",
    reviews: []
  },

  // --- CHEMISTRY ---
  {
    id: "8",
    title: "Organic Chemistry",
    author: "Paula Yurkanis Bruice",
    genre: "Chemistry",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780321803221-L.jpg",
    cover: "https://covers.openlibrary.org/b/isbn/9780321803221-L.jpg",
    rating: 4.4,
    pages: 1340,
    status: "Available",
    pdfUrl: "https://www.pearson.com/en-us/pearsonplus/p/9780138223731",
    description: "All of Paula Bruice's extensive revisions to the Seventh Edition of Organic Chemistry follow a central guiding principle: support what modern students need.",
    reviews: []
  },

  // --- MATHEMATICS ---
  {
    id: "9",
    title: "Thomas' Calculus",
    author: "George B. Thomas",
    genre: "Mathematics",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780321587992-L.jpg",
    cover: "https://covers.openlibrary.org/b/isbn/9780321587992-L.jpg",
    rating: 4.3,
    pages: 1200,
    status: "Available",
    pdfUrl: "https://en.wikipedia.org/wiki/George_B._Thomas",
    description: "Calculus hasn't changed, but your students have. Many of today's students have seen calculus before at the high school level.",
    reviews: []
  },
  {
    id: "10",
    title: "Discrete Mathematics",
    author: "Kenneth H. Rosen",
    genre: "Mathematics",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780073383095-L.jpg",
    cover: "https://covers.openlibrary.org/b/isbn/9780073383095-L.jpg",
    rating: 4.5,
    pages: 900,
    status: "Available",
    pdfUrl: "https://books.google.com.ng/books/about/Discrete_Mathematics_and_Its_Application.html?id=T_K9tgEACAAJ&redir_esc=y",
    description: "This text is designed for the sophomore/junior level introduction to discrete mathematics taken by students preparing for future coursework in computer science.",
    reviews: []
  },

  // --- LITERATURE ---
  {
    id: "11",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Literature",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
    cover: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
    rating: 4.4,
    pages: 180,
    status: "Borrowed",
    pdfUrl: "https://en.wikipedia.org/wiki/The_Great_Gatsby",
    description: "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career.",
    reviews: []
  },
  {
    id: "12",
    title: "1984",
    author: "George Orwell",
    genre: "Literature",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
    cover: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
    rating: 4.8,
    pages: 328,
    status: "Available",
    pdfUrl: "https://www.sparknotes.com/lit/1984/summary/",
    description: "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real.",
    reviews: []
  },
  {
    id: "13",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Literature",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
    cover: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
    rating: 4.6,
    pages: 432,
    status: "Available",
    pdfUrl: "https://www.britannica.com/topic/Pride-and-Prejudice",
    description: "Few have failed to be charmed by the witty and independent spirit of Elizabeth Bennet in Austen's beloved classic.",
    reviews: []
  },
  {
    id: "14",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Literature",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
    cover: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
    rating: 4.9,
    pages: 336,
    status: "Available",
    pdfUrl: "https://www.britannica.com/topic/To-Kill-a-Mockingbird",
    description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.",
    reviews: []
  },

  // --- BUSINESS ---
  {
    id: "15",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    genre: "Business",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg",
    cover: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg",
    rating: 4.6,
    pages: 336,
    status: "Available",
    pdfUrl: "https://www.junkybooks.com/book/reader.php?book=thebooks/62f7dc68b8a1a-rich-dad-poor-dad-rich-dad-s-prophecy.pdf",
    description: "April 2017 marks 20 years since Robert Kiyosaki's Rich Dad Poor Dad first made waves in the Personal Finance arena.",
    reviews: []
  },
  {
    id: "16",
    title: "Zero to One",
    author: "Peter Thiel",
    genre: "Business",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg",
    cover: "https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg",
    rating: 4.5,
    pages: 224,
    status: "Reserved",
    pdfUrl: "https://medium.com/@Stefania_druga/zero-to-one-my-summary-of-peter-thiel-s-book-bbb1e3676457",
    description: "The great secret of our time is that there are still uncharted frontiers to explore and new inventions to create.",
    reviews: []
  },
  {
    id: "17",
    title: "The Lean Startup",
    author: "Eric Ries",
    genre: "Business",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg",
    cover: "https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg",
    rating: 4.4,
    pages: 336,
    status: "Available",
    pdfUrl: "http://en.wikipedia.org/wiki/The_Lean_Startup",
    description: "Most startups fail. But many of those failures are preventable. The Lean Startup is a new approach being adopted across the globe.",
    reviews: []
  },

  // --- BIOLOGY ---
  {
    id: "18",
    title: "Molecular Biology of the Cell",
    author: "Bruce Alberts",
    genre: "Biology",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780815344322-L.jpg",
    cover: "https://covers.openlibrary.org/b/isbn/9780815344322-L.jpg",
    rating: 4.9,
    pages: 1464,
    status: "Available",
    pdfUrl: "https://www.ncbi.nlm.nih.gov/books/NBK20684/",
    description: "As the amount of information in biology expands dramatically, it becomes increasingly important to focus on general principles.",
    reviews: []
  },
  {
    id: "19",
    title: "The Gene: An Intimate History",
    author: "Siddhartha Mukherjee",
    genre: "Biology",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781476733500-L.jpg",
    cover: "https://covers.openlibrary.org/b/isbn/9781476733500-L.jpg",
    rating: 4.7,
    pages: 608,
    status: "Borrowed",
    pdfUrl: "https://en.wikipedia.org/wiki/The_Gene:_An_Intimate_History",
    description: "Spanning the globe and several centuries, The Gene is the story of the quest to decipher the master-code that makes and defines humans.",
    reviews: []
  },

  // --- ENGINEERING ---
  {
    id: "20",
    title: "Shigley's Mechanical Engineering Design",
    author: "Richard Budynas",
    genre: "Engineering",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780073398204-L.jpg",
    cover: "https://covers.openlibrary.org/b/isbn/9780073398204-L.jpg",
    rating: 4.5,
    pages: 1104,
    status: "Available",
    pdfUrl: "https://www.worldofbooks.com/en-gb/products/shigley-s-mechanical-engineering-design-book-richard-g-budynas-9780071257633",
    description: "Intended for students beginning the study of mechanical engineering design, this book combines the straightforward focus on fundamentals.",
    reviews: []
  }
];

// Helper Functions
export const getAllBooks = async () => {
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return books;
};

export const getBookData = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return books.find((book) => book.id === id) || books[0];
};

export const getRelatedBooks = async () => {
  // Returns 3 random books for recommendations
  return [books[5], books[10], books[15]]; 
};