import React from 'react'
import { FaBullseye, FaEye } from 'react-icons/fa'

const MissionVision = () => {
  return (
    <section id="mission-vision" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Mission & Vision
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="glass rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 rounded-full p-4 mr-4">
                <FaBullseye className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              The Central Student Council is committed to representing and serving the student body
              with integrity, transparency, and dedication. We aim to:
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span>Advocate for student rights, welfare, and academic excellence</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span>Foster a culture of leadership, service, and active citizenship</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span>Promote unity, diversity, and inclusivity within the student community</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span>Facilitate meaningful dialogue between students and administration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span>Organize programs and initiatives that enhance student life and development</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span>Uphold the values and principles of the Polytechnic University of the Philippines</span>
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="glass rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="bg-purple-600 rounded-full p-4 mr-4">
                <FaEye className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              To be a dynamic and responsive student government that empowers every PUPian to achieve
              their full potential and contribute meaningfully to society.
            </p>
            <div className="glass-dark rounded-2xl p-6 mt-6">
              <h4 className="text-xl font-semibold text-white mb-4">
                Our Aspirations
              </h4>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start">
                  <span className="text-purple-300 mr-3 mt-1">→</span>
                  <span>A united and engaged student community that actively participates in
                    governance and decision-making</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-300 mr-3 mt-1">→</span>
                  <span>Student leaders who are committed to service, excellence, and integrity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-300 mr-3 mt-1">→</span>
                  <span>A vibrant campus life enriched with diverse programs and activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-300 mr-3 mt-1">→</span>
                  <span>Strong partnerships between students, faculty, and administration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-300 mr-3 mt-1">→</span>
                  <span>A legacy of student-centered leadership that inspires future generations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <div className="glass rounded-3xl p-8 md:p-10 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Core Values
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h4>
                <p className="text-gray-600">Honesty and ethical conduct in all endeavors</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌟</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Excellence</h4>
                <p className="text-gray-600">Striving for the highest standards in service</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">❤️</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Service</h4>
                <p className="text-gray-600">Dedication to serving the student community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision

