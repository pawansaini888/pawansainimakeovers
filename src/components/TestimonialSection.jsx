import React, { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    review: "Olivia's makeup artistry transformed my wedding day look beyond my expectations. The makeup stayed flawless from morning until the last dance. She captured exactly the natural yet glamorous look I wanted.",
    images: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
    ]
  },
  {
    id: 2,
    name: "Michaela Smith",
    role: "Model",
    review: "Working with Olivia on my portfolio shoot was incredible. Her eye for detail and understanding of how makeup translates on camera is exceptional. She created looks that made me feel confident and photographed beautifully.",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1551836026-d1b5d30c0938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"
    ]
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Event Planner",
    review: "I've hired Olivia for multiple high-profile events. Her professionalism and talent consistently impress both me and my clients. She has a magical ability to enhance natural beauty while creating show-stopping looks.",
    images: [
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    ]
  }
];

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-rose-50 to-indigo-50 flex items-center py-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-rose-600 uppercase tracking-widest font-medium mb-3">
            Client Love
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Clients <span className="text-rose-500">Say</span>
          </h2>
          <div className="w-20 h-1 bg-rose-400 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Image Collage */}
          <div className="relative w-full lg:w-1/2 h-96 lg:h-[500px]">
            {/* Main Image */}
            <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-xl z-10 border-4 border-white">
              <img 
                src={testimonials[currentTestimonial].images[0]} 
                alt={testimonials[currentTestimonial].name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Top Right Image */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 rounded-xl overflow-hidden shadow-lg z-20 border-4 border-white">
              <img 
                src={testimonials[currentTestimonial].images[1]} 
                alt={testimonials[currentTestimonial].name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom Left Image */}
            <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 rounded-xl overflow-hidden shadow-lg z-20 border-4 border-white">
              <img 
                src={testimonials[currentTestimonial].images[2]} 
                alt={testimonials[currentTestimonial].name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          </div>

          {/* Right Side - Testimonial Content */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <FaQuoteLeft className="text-rose-300 text-4xl mb-6" />
              
              <p className="text-gray-700 text-lg md:text-xl mb-8">
                {testimonials[currentTestimonial].review}
              </p>
              
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-rose-500">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
              
              {/* Navigation Arrows */}
              <div className="flex gap-4 mt-8">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center hover:bg-rose-200 transition"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center hover:bg-rose-600 transition"
                >
                  <FaChevronRight />
                </button>
              </div>
              
              {/* Testimonial Indicators */}
              <div className="flex gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition ${currentTestimonial === index ? 'bg-rose-500' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;