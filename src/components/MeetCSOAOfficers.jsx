import React from 'react'
import Slider from 'react-slick'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const MeetCSOAOfficers = () => {
  const csoaOfficers = [
    {
      id: 1,
      name: 'Robert Tan',
      position: 'CSOA Chairperson',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      bio: 'Leading the assembly with dedication and vision.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 2,
      name: 'Sarah Lim',
      position: 'CSOA Vice Chairperson',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      bio: 'Supporting organizations and facilitating collaboration.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 3,
      name: 'Michael Torres',
      position: 'CSOA Secretary',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Managing assembly records and communications.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 4,
      name: 'Jennifer Lee',
      position: 'CSOA Treasurer',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
      bio: 'Overseeing financial matters with transparency.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 5,
      name: 'David Wong',
      position: 'CSOA Auditor',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      bio: 'Ensuring financial accountability and compliance.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 6,
      name: 'Grace Villanueva',
      position: 'CSOA PRO',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
      bio: 'Promoting CSOA activities and building relationships.',
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meet the CSOA Officers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the dedicated leaders of the Central Student Organizations Assembly
          </p>
        </div>

        <Slider {...settings} className="csoa-officer-slider">
          {csoaOfficers.map((officer) => (
            <div key={officer.id} className="px-4">
              <div className="glass rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="relative mb-4">
                  <img
                    src={officer.image}
                    alt={officer.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-600/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-1">
                  {officer.name}
                </h3>
                <p className="text-purple-600 font-medium text-center mb-3">
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
                  <a
                    href={officer.social.twitter}
                    className="text-blue-400 hover:text-blue-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href={officer.social.instagram}
                    className="text-pink-600 hover:text-pink-800 transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={20} />
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

export default MeetCSOAOfficers

