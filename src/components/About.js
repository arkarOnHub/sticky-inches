import React from 'react';
import { useSpring, animated } from 'react-spring';

const About = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
  });

  // Define styles for mobile and non-mobile views
  const mobilePadding = { padding: '0 20px' };
  const desktopPadding = { padding: '0' }; // Adjust padding for desktop/tablet views

  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <animated.h2 className="text-4xl font-bold text-gray-800 mb-8" style={{ ...fade, ...(window.innerWidth < 768 ? mobilePadding : desktopPadding) }}>
          About Sticky Inches
        </animated.h2>
        <div className="max-w-3xl mx-auto">
          <animated.p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ ...fade, ...(window.innerWidth < 768 ? mobilePadding : desktopPadding) }}>
            Sticky Inches offers a unique collection of high-quality stickers designed to add personality and style to your everyday items. From water bottles to laptops and everything in between, our stickers are crafted with creativity and durability in mind.
          </animated.p>
          <animated.p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ ...fade, ...(window.innerWidth < 768 ? mobilePadding : desktopPadding) }}>
            Whether you're looking to express yourself, enhance your gadgets, or gift something special, Sticky Inches has the perfect sticker for every occasion. Explore our collection and discover the art of sticking with style!
          </animated.p>
        </div>
      </div>
    </section>
  );
}

export default About;
