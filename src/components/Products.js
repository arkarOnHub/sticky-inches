import React from 'react';
import Product1Image from '../assets/p1.jpeg'; // Import your product images
import Product2Image from '../assets/p2.jpeg';
import Product3Image from '../assets/p3.jpeg';

const Products = () => {
  const products = [
    { image: Product1Image, alt: "Product 1", title: "50 pics", price: "3000 kyats" },
    { image: Product2Image, alt: "Product 2", title: "20 pics", price: "5500 kyats" },
    { image: Product3Image, alt: "Product 3", title: "50 pics", price: "12500 kyats" },
  ];

  return (
    <section id="products" className="py-16 bg-white" style={{ paddingTop: '100px' }}>
      <div className="container mx-auto px-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="product-card bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={product.image} alt={product.alt} className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
                <p className="text-gray-700">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
