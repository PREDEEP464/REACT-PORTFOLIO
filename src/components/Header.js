import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-6 bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 text-white shadow-xl">
            {/* Overlay div for dark background */}
            <div className="absolute inset-0 bg-black opacity-20"></div>

            <motion.a 
                className="text-3xl font-bold text-white hover:text-black transition-colors duration-300 relative z-10"
                href="/"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                Predeep
            </motion.a>

            <nav className="hidden md:flex ml-auto relative z-10">
                <ul className="flex space-x-8 bg-gradient-to-r from-pink-700 via-blue-800 to-violet-700 p-2 rounded-lg">
                    {['About', 'Projects', 'Resume', 'Contact'].map((item, index) => (
                        <motion.li 
                            key={index}
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.95 }} 
                            className="text-white hover:text-black font-semibold transition-colors duration-300"
                        >
                            <a href={`/#${item.toLowerCase()}`}>{item}</a>
                        </motion.li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button 
                onClick={() => setToggleMenu(!toggleMenu)} 
                className='block md:hidden absolute top-4 right-4 p-3 focus:outline-none z-10' 
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                {toggleMenu ? <XMarkIcon className='text-white h-6'/> : <Bars3Icon className='text-white h-6'/>}
            </motion.button>

            {/* Mobile Navigation */}
            {toggleMenu && (
                <motion.nav 
                    className="fixed flex justify-center top-4 right-4 mt-16 w-48 bg-gradient-to-r from-pink-700 via-blue-800 to-violet-700 text-white shadow-lg rounded-lg z-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <ul className="flex flex-col p-4 space-y-4">
                        {['About', 'Projects', 'Resume', 'Contact'].map((item, index) => (
                            <motion.li 
                                key={index}
                                whileHover={{ scale: 1.1 }} 
                                whileTap={{ scale: 0.95 }} 
                                className="text-lg font-semibold hover:text-black"
                            >
                                <a href={`/#${item.toLowerCase()}`} onClick={() => setToggleMenu(false)}>{item}</a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.nav>
            )}
        </header>
    );
}
