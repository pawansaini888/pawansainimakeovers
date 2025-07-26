import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ title, current }) => {
  return (
    <section className="hidden md:flex w-full h-[40vh] md:h-[50vh] relative items-center justify-center overflow-hidden bg-gradient-to-r from-rose-900/30 to-indigo-900/30">
      {/* Left BG image (makeup products) */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
          maskImage: "linear-gradient(to right, black 70%, transparent 100%)"
        }}
      ></div>

      {/* Right BG image (model) */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')",
          maskImage: "linear-gradient(to left, black 70%, transparent 100%)"
        }}
      ></div>

      {/* Overlay Text */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          ABOUT <span className="text-rose-300">US</span>
        </h1>
        <div className="flex items-center justify-center gap-3 text-sm md:text-base">
          <span className="text-white/80 hover:text-white transition">
            <NavLink to='/'>Home</NavLink>
          </span>
          <span className="text-rose-300">/</span>
          <span className="text-rose-300 font-medium">About</span>
        </div>
      </div>

      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/60 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-400/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-400/20 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Navigation;