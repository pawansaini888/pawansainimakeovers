import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import pawanMain from '../assets/pawan/pawanMain.webp';
import pawan1 from '../assets/pawan/pawan1.webp';
import pawan2 from '../assets/pawan/pawan2.webp';

const sliderImages = [
  pawanMain,
  pawan1,
  pawan2
];

// Cache for loaded images
const imageCache = {};

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const intervalRef = useRef(null);
  const heroRef = useRef(null);

  // Preload images on component mount (only once)
  useEffect(() => {
    if (Object.keys(imageCache).length === 0) {
      sliderImages.forEach(src => {
        if (!imageCache[src]) {
          const img = new Image();
          img.src = src;
          img.fetchPriority = 'high';
          imageCache[src] = true;
        }
      });
      
      // Set loaded after a small delay
      const timer = setTimeout(() => {
        setImagesLoaded(true);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      setImagesLoaded(true);
    }
  }, []);

  // Auto-rotate images every 5 seconds (persistent interval)
  useEffect(() => {
    if (!imagesLoaded) return;
    
    // Only set interval if not already set
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex(prev => (prev === sliderImages.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    
    return () => {
      // Don't clear interval when unmounting to maintain state
      // Interval will be cleared only when component is permanently unmounted
    };
  }, [imagesLoaded]);

  // Cleanup interval when component is permanently unmounted
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="w-full min-h-screen bg-gradient-to-r from-rose-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
        <div className="absolute bottom-20 right-32 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left side - Text content */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <p className="text-rose-600 text-sm mb-4 uppercase tracking-widest font-medium">
            Professional Makeup Artist
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Beauty Crafted <br className="hidden md:block" />
            <span className="text-rose-500">With Passion</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
            I've alway  passionate about transforming faces and bringing out the best in every individual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to='/portfolio'>
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-medium transition duration-300">
                View My Work
              </button>
            </Link>
            <Link to='/contact'>
              <button className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 px-8 py-3 rounded-full font-medium transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Right side - Simple Image Slider */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md h-auto overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {sliderImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image}
                    alt="Professional makeup examples"
                    className="w-full rounded-lg shadow-2xl border-8 border-white"
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchpriority={index === 0 ? "high" : "low"}
                  />
                </div>
              ))}
            </div>

            {/* Image slider indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentImageIndex ? 'bg-rose-500' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;