import React from 'react'
import Slider from 'react-slick'

const ProgressSlideshow = () => {
  const progressImages = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      title: 'Student Leadership Summit 2024',
      description: 'Bringing together student leaders from across the university'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
      title: 'Community Outreach Program',
      description: 'Serving communities and making a difference'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      title: 'Annual Cultural Festival',
      description: 'Celebrating diversity and culture on campus'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
      title: 'Environmental Initiative',
      description: 'Promoting sustainability and environmental awareness'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      title: 'Sports Tournament',
      description: 'Fostering teamwork and healthy competition'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      title: 'Academic Excellence Award',
      description: 'Recognizing outstanding student achievements'
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 backdrop-blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Progress & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded mb-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Celebrating milestones and accomplishments in serving the student community
          </p>
        </div>

        <div className="glass-dark rounded-3xl p-4 md:p-8 shadow-2xl">
          <Slider {...settings}>
            {progressImages.map((item) => (
              <div key={item.id} className="outline-none">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-96 md:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                    <h3 className="text-2xl md:text-4xl font-bold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Progress Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="glass-dark rounded-2xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300">Events Organized</div>
          </div>
          <div className="glass-dark rounded-2xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
            <div className="text-gray-300">Students Served</div>
          </div>
          <div className="glass-dark rounded-2xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">20+</div>
            <div className="text-gray-300">Programs Launched</div>
          </div>
          <div className="glass-dark rounded-2xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
            <div className="text-gray-300">Community Projects</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgressSlideshow

