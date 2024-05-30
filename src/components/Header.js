import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            <a
              href="/"
              onClick={closeMenu}
              className="text-gray-800 hover:text-blue-500"
            >
              Sticky Inches
            </a>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="text-gray-800 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">Home</a>
            <a href="#about" className="text-gray-800 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">About</a>
            <a href="#products" className="text-gray-800 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">Products</a>
            <a href="#reviews" className="text-gray-800 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">Reviews</a>
            <a href="#contact" className="text-gray-800 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">Contact</a>
          </nav>
          {/* Hamburger menu icon for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-500 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile navigation */}
        <nav className={`fixed top-0 right-0 h-screen bg-white w-48 md:w-64 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 shadow-lg`}>
          <div className="flex flex-col h-full items-center pt-10 space-y-6">
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 text-gray-800 hover:text-blue-500 focus:outline-none"
              aria-label="Close Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <a
              href="#home"
              onClick={closeMenu}
              className="text-gray-800 hover:text-blue-500 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="text-gray-800 hover:text-blue-500 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              About
            </a>
            <a
              href="#products"
              onClick={closeMenu}
              className="text-gray-800 hover:text-blue-500 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Products
            </a>
            <a
              href="#reviews"
              onClick={closeMenu}
              className="text-gray-800 hover:text-blue-500 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Reviews
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="text-gray-800 hover:text-blue-500 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
