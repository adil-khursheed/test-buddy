// components/LandingPage.tsx

import React from 'react';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
export default function LandingPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-image.jpeg" // Make sure this image exists in the /public directory
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#e7d7f6] via-[#f4e9f9] to-[#deeefc] opacity-80" />
      </div>

      {/* Main Container */}
      <div className="flex items-center justify-center h-full px-4">
        <div className="relative backdrop-blur-[5px] bg-white/8 rounded-3xl border border-white/20 shadow-2xl w-full max-w-6xl mx-auto p-10">
          
          {/* Navbar */}
          <div className="flex justify-between items-center mb-10">
            {/* Logo */}
            <div className="text-2xl font-extrabold text-black ">TB</div>

            {/* Right Nav */}
            <div className="flex items-center space-x-6">
              {/* Social Icons */}
              <div className="flex space-x-4 text-[#666] text-lg">
                <a href="#"><i className="fab fa-instagram hover:text-[#8147fc]"></i></a>
                <a href="#"><i className="fab fa-twitter hover:text-[#8147fc]"></i></a>
                <a href="#"><i className="fab fa-github hover:text-[#8147fc]"></i></a>
              </div>

              {/* Auth Buttons */}
              <div className="flex space-x-3">
                <Link href="/signup"><button className="cursor-pointer px-4 py-2 bg-[#9F70FD] hover:bg-[#8147fc] text-white rounded-full transition">
                  Sign Up
                </button></Link>
                <Link href="/login"><button className="cursor-pointer px-4 py-2 border border-black text-black rounded-full hover:bg-black hover:text-white transition">
                  Login
                </button></Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center py-20">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black">
              Your <span className="text-[#9F70FD]">AI Testing </span>buddy
                <br />is here.
            </h1>

            {/* Buttons */}
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Link href="/test-bot"><button className="cursor-pointer px-6 py-3 bg-[#9F70FD] hover:bg-[#8147fc] text-white rounded-full font-medium">
                Get started
              </button></Link>
              {/* <button className="px-6 py-3 border border-black text-black rounded-full hover:bg-black hover:text-white transition font-medium">
                Login
              </button> */}
            </div>

            {/* Discover more */}
            <div className="mt-10 text-sm text-gray-600 underline cursor-pointer">
              Discover more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
