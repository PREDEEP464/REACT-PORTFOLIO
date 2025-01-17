'use client'

import PP from '../assets/Profile Pic.jpg'  // Import the image
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  const config = {
    name: 'Predeep',
    subtitle: 'A Full-stack developer and an aspiring designer',
    social: {
      github: 'https://github.com/PREDEEP464',
      linkedin: 'https://www.linkedin.com/in/predeepkumar-u-s-4b012325a/'
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-red-600 via-purple-700 to-orange-500">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Hi, I'm {config.name}!
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {config.subtitle}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <SocialLink href={config.social.github} icon={FaGithub} label="GitHub" />
              <SocialLink href={config.social.linkedin} icon={FaLinkedin} label="LinkedIn" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96"> {/* Increased the size here */}
              {/* Use motion.img instead of next/image */}
              <motion.img
                src={PP} // Use the imported PP image directly here
                alt="Profile"
                className="rounded-full shadow-2xl" // Style for the round image
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, icon: Icon, label }) {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 rounded-full text-white bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"
    >
      <Icon className="w-6 h-6 mr-2" />
      <span className="font-semibold">{label}</span>
    </motion.a>
  )
}
