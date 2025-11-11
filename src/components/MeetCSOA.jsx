import React from 'react'

const MeetCSOA = () => {
  return (
    <section id="csoa" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meet the CSOA
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The Central Student Organizations Assembly (CSOA) represents all student organizations
            within the university
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">
              About CSOA
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Central Student Organizations Assembly (CSOA) is the umbrella organization that
              coordinates and represents all registered student organizations (RSOs) in the Polytechnic
              University of the Philippines. CSOA serves as the bridge between individual student
              organizations and the Central Student Council.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              CSOA works to ensure that all student organizations have a voice in university governance
              and that their concerns and initiatives are properly addressed. The assembly promotes
              collaboration, unity, and mutual support among different student organizations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through CSOA, student organizations can pool their resources, share best practices, and
              work together on projects that benefit the entire student community. The assembly also
              provides training, support, and guidance to help student organizations operate effectively
              and achieve their goals.
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-orange-600 mb-3">
                Our Purpose
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Represent all student organizations in university governance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Facilitate coordination and collaboration among RSOs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Advocate for the interests of student organizations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Provide support and resources to RSOs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Promote unity and mutual respect among organizations</span>
                </li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-orange-600 mb-3">
                Key Functions
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Organize assembly meetings and forums</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Coordinate inter-organizational events and activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Provide training and capacity-building programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Facilitate communication between RSOs and CSC</span>
                </li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-6 shadow-lg bg-gradient-to-r from-orange-600 to-red-600">
              <h4 className="text-xl font-semibold text-orange-600 mb-2">
                Join CSOA
              </h4>
              <p className="text-gray/90">
                All registered student organizations are automatically members of CSOA. Participate
                in assembly meetings and contribute to building a stronger student community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetCSOA

