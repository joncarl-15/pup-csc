import React from 'react'

const Hero = () => {
  // Change this to your background image URL or path
  // For local images: place image in public folder and use: '/your-image.jpg'
  // For external URLs: use the full URL
  const backgroundImage = "url('/Picture/csc.jpg')"
  
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Blurred Overlay (optional - can be adjusted or removed) */}
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            PUP Lopez Central Student Council
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8">
            TALINO, TAPANG, AT PANININDIGAN NG MGA ISKOLAR NG BAYAN.
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            The official student governing body of the Polytechnic University of the Philippines Lopez, Quezon Campus
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#about-csc"
              className="px-8 py-3 bg-white text-red-600 rounded-full font-semibold hover:bg-orange-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

