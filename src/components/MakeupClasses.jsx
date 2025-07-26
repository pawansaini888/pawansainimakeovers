import React from "react";
import { FaRegClock, FaRegMoneyBillAlt, FaRegCheckCircle, FaChalkboardTeacher, FaPalette, FaCertificate } from "react-icons/fa";

const MakeupClasses = () => {
  const courses = [
    {
      title: "Basic Beauty Course",
      price: "₹15,000",
      duration: "4 Weeks",
      popular: false,
      features: [
        "Daily makeup essentials",
        "Skin prep & foundation matching",
        "Eye makeup techniques",
        "Lip shaping & coloring",
        "Day-to-night makeup transformation"
      ],
      icon: <FaChalkboardTeacher className="text-rose-500 text-4xl mb-4" />
    },
    {
      title: "Professional Bridal Course",
      price: "₹35,000",
      duration: "8 Weeks",
      popular: true,
      features: [
        "Bridal makeup fundamentals",
        "Traditional & contemporary looks",
        "Long-lasting makeup techniques",
        "Bridal skincare regimen",
        "Hair styling coordination",
        "Client consultation skills"
      ],
      icon: <FaPalette className="text-rose-500 text-4xl mb-4" />
    },
    {
      title: "Master Class",
      price: "₹60,000",
      duration: "12 Weeks",
      popular: false,
      features: [
        "Advanced contouring & highlighting",
        "Special effects makeup",
        "Editorial & runway techniques",
        "Pro product knowledge",
        "Portfolio development",
        "Business & marketing skills",
        "Industry certification"
      ],
      icon: <FaCertificate className="text-rose-500 text-4xl mb-4" />
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-rose-50 to-indigo-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-rose-600 uppercase tracking-widest font-medium mb-3">
            Education
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-rose-500">Makeup Classes</span>
          </h2>
          <div className="w-20 h-1 bg-rose-400 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Learn professional makeup artistry from an industry expert. Whether you're a beginner or looking to refine your skills, I offer comprehensive training to help you master the art of makeup.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${course.popular ? "border-2 border-rose-400" : "border border-gray-100"}`}
            >
              {course.popular && (
                <div className="absolute top-0 right-0 bg-rose-500 text-white text-xs font-bold px-4 py-1 transform translate-x-2 translate-y-1 rotate-12">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8 text-center">
                {course.icon}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                
                <div className="flex justify-center gap-6 my-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaRegClock className="text-rose-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaRegMoneyBillAlt className="text-rose-400" />
                    <span>{course.price}</span>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3 text-left">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <FaRegCheckCircle className="text-rose-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* <button className={`mt-8 w-full py-3 px-6 rounded-lg font-medium transition-all ${course.popular ? "bg-rose-500 hover:bg-rose-600 text-white" : "bg-white text-rose-500 border border-rose-500 hover:bg-rose-50"}`}>
                  Enroll Now
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* Personal Note */}
        {/* <div className="mt-16 bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto border-l-4 border-rose-400">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">A Personal Note From Me</h3>
          <p className="text-gray-700 mb-4">
            Teaching makeup artistry is my passion. I remember my first class where I struggled with blending - now I get to help students overcome those same challenges. My approach focuses on:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-rose-500">✧</span>
              <span>Hands-on practice with professional products</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500">✧</span>
              <span>Small class sizes for personalized attention</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500">✧</span>
              <span>Real-world client scenarios</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500">✧</span>
              <span>Ongoing support after course completion</span>
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            All courses include my signature technique handbook and product recommendations. I can't wait to welcome you to my studio!
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default MakeupClasses;