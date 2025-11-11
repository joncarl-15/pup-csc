import React from 'react'
import Slider from 'react-slick'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const MeetOfficers = () => {
  const officers = [
    {
      id: 1,
      name: 'Test',
      position: 'President',
      image: '/Picture/csc-logo.png',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 2,
      name: 'Test',
      position: 'Vice President',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 3,
      name: 'Test',
      position: 'Secretary',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 4,
      name: 'Ana Rodriguez',
      position: 'Treasurer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 5,
      name: 'Carlos Mendoza',
      position: 'Auditor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 6,
      name: 'Lisa Fernandez',
      position: 'Public Relations Officer',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  return (
    <section id="officers" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meet the Officers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the dedicated leaders serving the student body
          </p>
        </div>

        <Slider {...settings} className="officer-slider">
          {officers.map((officer) => (
            <div key={officer.id} className="px-4">
              <div className="glass rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="relative mb-4">
                  <img
                    src={officer.image}
                    alt={officer.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-orange-600/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-1">
                  {officer.name}
                </h3>
                <p className="text-orange-600 font-medium text-center mb-3">
                  {officer.position}
                </p>
                <p className="text-gray-600 text-sm text-center mb-4">
                  {officer.bio}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={officer.social.facebook}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default MeetOfficers

