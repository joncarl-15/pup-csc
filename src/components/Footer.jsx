import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">PUP CSC</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              The Central Student Council of the Polytechnic University of the Philippines,
              serving students with dedication and integrity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about-csc" className="text-gray-300 hover:text-white transition-colors">
                  About CSC
                </a>
              </li>
              <li>
                <a href="#officers" className="text-gray-300 hover:text-white transition-colors">
                  Officers
                </a>
              </li>
              <li>
                <a href="#university" className="text-gray-300 hover:text-white transition-colors">
                  University
                </a>
              </li>
              <li>
                <a href="#mission-vision" className="text-gray-300 hover:text-white transition-colors">
                  Mission & Vision
                </a>
              </li>
              <li>
                <a href="#updates" className="text-gray-300 hover:text-white transition-colors">
                  Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Polytechnic University of the Philippines</li>
              <li>Sta. Mesa, Manila</li>
              <li>Phone: +63 (2) 5335-1PUP</li>
              <li>Email: csc@pup.edu.ph</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/pupcsc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/pupcsc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 p-3 rounded-full hover:bg-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/pupcsc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/pupcsc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
            <div className="mt-4">
              <a
                href="mailto:csc@pup.edu.ph"
                className="flex items-center text-gray-300 hover:text-white transition-colors text-sm"
              >
                <FaEnvelope className="mr-2" />
                Subscribe to Newsletter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} PUP Central Student Council. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm mt-4 md:mt-0">
              Built with ❤️ for PUP Students
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

