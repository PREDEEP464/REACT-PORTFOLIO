import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-6 bg-gradient-to-r  from-red-600 via-purple-700 to-orange-600 text-white shadow-2xl">
            <a className="text-2xl font-bold text-white hover:text-black" href="/">Predeep</a>

            <nav className="hidden md:flex ml-auto">
                <ul className="flex space-x-6 bg-gradient-to-r from-pink-700 via-blue-800 to-violet-700 p-2 rounded-lg">
                    <li><a className="text-white hover:text-black font-bold transition-colors duration-300" href="/">Home</a></li>
                    <li><a className="text-white hover:text-black font-bold transition-colors duration-300" href="/#about">About</a></li>
                    <li><a className="text-white hover:text-black font-bold transition-colors duration-300" href="/#projects">Projects</a></li>
                    <li><a className="text-white hover:text-black font-bold transition-colors duration-300" href="/#resume">Resume</a></li>
                    <li><a className="text-white hover:text-black font-bold transition-colors duration-300" href="/#contact">Contact</a></li>
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button 
                onClick={() => setToggleMenu(!toggleMenu)} 
                className='block md:hidden absolute top-4 right-4 p-3 focus:outline-none' 
                aria-label="Toggle menu"
            >
                {toggleMenu ? <XMarkIcon className='text-white h-6'/> : <Bars3Icon className='text-white h-6'/>}
            </button>

            {/* Mobile Navigation */}
            {toggleMenu && (
                <nav className="fixed flex justify-center top-4 right-4 mt-16 w-48 bg-gradient-to-r from-pink-700 via-blue-800 to-violet-700 text-white shadow-lg rounded-lg">
                    <ul className="flex flex-col p-4 space-y-4">
                        <li><a className="text-lg font-bold hover:text-black" href="/" onClick={() => setToggleMenu(false)}>Home</a></li>
                        <li><a className="text-lg font-bold hover:text-black" href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                        <li><a className="text-lg font-bold hover:text-black" href="#projects" onClick={() => setToggleMenu(false)}>Projects</a></li>
                        <li><a className="text-lg font-bold hover:text-black" href="#resume" onClick={() => setToggleMenu(false)}>Resume</a></li>
                        <li><a className="text-lg font-bold hover:text-black" href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
