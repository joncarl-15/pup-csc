import React from 'react'

const AboutCSC = () => {
  return (
    <section id="about-csc" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Central Student Council
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Central Student Council (CSC) is the highest governing body of all student organizations
              in the Polytechnic University of the Philippines. We serve as the voice of the student body,
              representing their interests and concerns to the university administration.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our mission is to foster student leadership, promote academic excellence, and create a vibrant
              campus community where every student can thrive and succeed.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through various programs, events, and initiatives, we work tirelessly to enhance the student
              experience and ensure that every PUPian has access to quality education and opportunities
              for growth.
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-orange-600 mb-3">
                Our Values
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Integrity and Transparency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Student-Centered Leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Inclusive Community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Academic Excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Service to Others</span>
                </li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-orange-600 mb-3">
                Our Goals
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Advocate for student rights and welfare</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Promote student engagement and participation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Facilitate communication between students and administration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Organize meaningful events and activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCSC

