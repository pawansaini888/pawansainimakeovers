import React, { useState } from "react";
import bride1 from '../assets/creativeWork/bride1.JPG'
import bride2 from '../assets/creativeWork/bride2.JPG'
import bride3 from '../assets/creativeWork/bride3.JPG'
import eye1 from '../assets/creativeWork/eye1.JPG'
import eye2 from '../assets/creativeWork/eye2.JPG'
import eye3 from '../assets/creativeWork/eye3.JPG'
import face1 from '../assets/creativeWork/face1.JPG'
import face2 from '../assets/creativeWork/face2.JPG'
import face3 from '../assets/creativeWork/face3.JPG'
import hair1 from '../assets/creativeWork/hair1.PNG'
import hair2 from '../assets/creativeWork/hair2.JPG'
import hair3 from '../assets/creativeWork/hair3.JPG'


const categories = ["All Works", "Face Makeup", "Eye Makeup", "Hair Styling", "Bridal Makeup"];

const portfolioItems = [
  {
    id: 1,
    title: "Glamorous Evening Look",
    category: "Face Makeup",
    image: bride1
  },
  {
    id: 2,
    title: "Smokey Eye Design",
    category: "Bridal Makeup",
    image: bride2
  },
  {
    id: 3,
    title: "Elegant Updo",
    category: "Hair Styling",
    image: hair1
  },
  {
    id: 4,
    title: "Classic Bridal",
    category: "Bridal Makeup",
    image: face2
  },
  {
    id: 5,
    title: "Natural Glow",
    category: "Face Makeup",
    image: face1
  },
  {
    id: 6,
    title: "Dramatic Lashes",
    category: "Eye Makeup",
    image: eye1
  },
  {
    id: 7,
    title: "Beach Waves",
    category: "Hair Styling",
    image: hair2
  },
  {
    id: 8,
    title: "Traditional Bride",
    category: "Bridal Makeup",
    image: bride3
  },
  {
    id: 9,
    title: "Contoured Perfection",
    category: "Face Makeup",
    image: face3
  },
  {
    id: 10,
    title: "Contoured Perfection",
    category: "Eye Makeup",
    image: eye2
  },
  {
    id: 11,
    title: "Contoured Perfection",
    category: "Hair Styling",
    image: hair3
  },
  {
    id: 12,
    title: "Contoured Perfection",
    category: "Eye Makeup",
    image: eye3
  },
];

const CreativeWorks = () => {
  const [activeCategory, setActiveCategory] = useState("All Works");

  const filteredItems = activeCategory === "All Works" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="w-full bg-gradient-to-b from-rose-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-rose-600 uppercase tracking-widest font-medium mb-3">
            Our Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Creative <span className="text-rose-500">Works</span>
          </h2>
          <div className="w-20 h-1 bg-rose-400 mx-auto mb-8"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-rose-500 text-white shadow-md shadow-rose-200"
                    : "bg-white text-gray-800 border border-gray-200 hover:bg-rose-50 hover:border-rose-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-rose-300 text-sm font-medium mb-1">{item.category}</p>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {/* <div className="text-center mt-16">
          <button className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 px-8 py-3 rounded-full font-medium transition duration-300">
            VIEW MORE WORKS
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default CreativeWorks;
