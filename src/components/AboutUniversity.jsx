import React from 'react'
import { FaGraduationCap, FaUsers, FaBook, FaAward } from 'react-icons/fa'

const AboutUniversity = () => {
  const stats = [
    { icon: FaGraduationCap, number: '50,000+', label: 'Students' },
    { icon: FaUsers, number: '1,500+', label: 'Faculty Members' },
    { icon: FaBook, number: '100+', label: 'Programs' },
    { icon: FaAward, number: '100+', label: 'Years of Excellence' },
  ]

  return (
    <section id="university" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About PUP
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="glass rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Polytechnic University of the Philippines
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Established in 1904, the Polytechnic University of the Philippines (PUP) is one of the
              largest universities in the Philippines in terms of student population. PUP is committed
              to providing accessible, quality education to Filipino students.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The university offers a wide range of academic programs from certificate courses to
              graduate studies, serving as a leading institution in technical and professional education.
            </p>
            <p className="text-gray-700 leading-relaxed">
              PUP is known for its commitment to academic excellence, research, and community service,
              producing graduates who are not only skilled professionals but also responsible citizens
              who contribute to nation-building.
            </p>
          </div>

          <div className="relative">
            <div className="glass rounded-2xl p-8 shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop"
                alt="PUP Campus"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="glass-dark rounded-lg p-4">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Our Legacy
                </h4>
                <p className="text-white/90">
                  Over a century of excellence in education, producing leaders and innovators
                  who shape the future of the Philippines.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <stat.icon className="text-4xl text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-6 shadow-lg">
            <h4 className="text-xl font-semibold text-blue-600 mb-3">
              Quality Education
            </h4>
            <p className="text-gray-700">
              Comprehensive academic programs designed to meet industry standards and prepare students
              for successful careers.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 shadow-lg">
            <h4 className="text-xl font-semibold text-purple-600 mb-3">
              Research Excellence
            </h4>
            <p className="text-gray-700">
              Cutting-edge research initiatives that contribute to knowledge creation and address
              societal challenges.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 shadow-lg">
            <h4 className="text-xl font-semibold text-blue-600 mb-3">
              Community Service
            </h4>
            <p className="text-gray-700">
              Strong commitment to community engagement and extension services that benefit
              society at large.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUniversity

