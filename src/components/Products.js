import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Product1Image1 from '../assets/p1_1.jpeg'; // Import multiple images for each product
import Product1Image2 from '../assets/p1_2.jpeg';
import Product1Image3 from '../assets/p1_3.jpeg';
import Product1Image4 from '../assets/p1_4.jpeg';

import Product2Image1 from '../assets/p2_1.jpeg';
import Product2Image2 from '../assets/p2_2.jpeg';
import Product2Image3 from '../assets/p2_3.jpeg';
import Product2Image4 from '../assets/p2_4.jpeg';

import Product3Image1 from '../assets/p3_1.jpeg';
import Product3Image2 from '../assets/p3_2.jpeg';
import Product3Image3 from '../assets/p3_3.jpeg';
import Product3Image4 from '../assets/p3_4.jpeg';

const Products = () => {
  const products = [
    {
      images: [Product1Image1, Product1Image2, Product1Image3, Product1Image4],
      alt: "Product 1",
      title: "10 pics",
      price: "3000 kyats",
    },
    {
      images: [Product2Image1, Product2Image2, Product2Image3, Product2Image4],
      alt: "Product 2",
      title: "20 pics",
      price: "5500 kyats",
    },
    {
      images: [Product3Image1, Product3Image2, Product3Image3, Product3Image4],
      alt: "Product 3",
      title: "50 pics",
      price: "12500 kyats",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="products" className="py-16 bg-white" style={{ paddingTop: '100px' }}>
      <div className="container mx-auto px-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="product-card bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Slider {...settings}>
                {product.images.map((image, imgIndex) => (
                  <div key={imgIndex}>
                    <img src={image} alt={product.alt} className="w-full h-64 object-cover rounded-t-lg" />
                  </div>
                ))}
              </Slider>
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
};

export default Products;
