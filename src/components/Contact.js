// src/components/Contact.js
import React from 'react';
import { ReactComponent as TikTokLogo } from '../assets/tiktok-color-icon.svg'; // Adjust path as per your project structure

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Connect With Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          Follow us on social media to stay updated with our latest sticker designs and promotions!
        </p>
        <div className="flex justify-center mb-8">
          {/* Facebook Icon */}
          <a href="https://www.facebook.com/stickyinches" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500 mx-4">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.54 8.84 8.17 9.59v-6.8H7.5V12h2.67V9.61c0-2.64 1.57-4.1 3.99-4.1 1.16 0 2.45.2 2.45.2v2.7h-1.38c-1.36 0-1.78.84-1.78 1.7V12h3.03l-.48 3.79h-2.55v6.81C18.46 20.84 22 16.83 22 12c0-5.52-4.48-10-10-10z"/>
            </svg>
          </a>
          {/* TikTok Icon */}
          <a href="https://www.tiktok.com/@stickyinches?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-purple-600 mx-4">
            <TikTokLogo className="w-8 h-8 fill-current" />
          </a>
          {/* Add more social media icons and links as needed */}
        </div>
        <h3>Jimmy & Daisy's Business</h3>
      </div>
    </section>
  );
}

export default Contact;
