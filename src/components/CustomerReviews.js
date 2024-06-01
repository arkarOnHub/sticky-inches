import React from 'react';
import Customer1Image from '../assets/r1.png'; // Import your customer photos
import Customer2Image from '../assets/r2.jpeg';
import Customer3Image from '../assets/r3.jpeg';
import Customer4Image from '../assets/r4.jpeg';
import Customer5Image from '../assets/r5.jpeg';
import Customer6Image from '../assets/r6.jpeg';
import Customer7Image from '../assets/r7.jpeg';
import Customer8Image from '../assets/r8.jpeg';
import Customer9Image from '../assets/r9.jpeg';

const CustomerReviews = () => {
  const images = [
    { src: Customer1Image, alt: "Customer 1" },
    { src: Customer2Image, alt: "Customer 2" },
    { src: Customer3Image, alt: "Customer 3" },
    { src: Customer4Image, alt: "Customer 4" },
    { src: Customer5Image, alt: "Customer 5" },
    { src: Customer6Image, alt: "Customer 6" },
    { src: Customer7Image, alt: "Customer 7" },
    { src: Customer8Image, alt: "Customer 8" },
    { src: Customer9Image, alt: "Customer 9" },
  ];

  return (
    <section id="reviews" className="py-8 bg-gray-100" style={{ paddingTop: '100px' }}>
      <div className="container mx-auto px-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center">
              <img src={image.src} alt={image.alt} className="w-48 h-64 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;
