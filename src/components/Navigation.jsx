import { FaLinkedin  } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState } from 'react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='bg-transparent mb-20 px-4 sm:px-6 lg:px-20'>
      <div className='flex items-center justify-between py-10'>
        <div className='flex flex-shrink-0 items-center'>
          <h3 className='text-white'>
            <strong className="text-2xl">R</strong><strong>k</strong>
          </h3>
        </div>
        
        {/* Mobile Menu Button */}
        <div className='block lg:hidden'>
          <button 
            onClick={toggleMobileMenu}
            className='text-white text-2xl'
          >
            ☰
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className={`hidden lg:flex lg:space-x-6 ${isMobileMenuOpen ? 'flex' : ''}`}>
          <a className="nav-items bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:from-purple-400 hover:via-pink-500 hover:to-red-500" href="#aboutme">About Me</a>
          <a className="nav-items bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:from-purple-400 hover:via-pink-500 hover:to-red-500" href="#skills">Skills</a>
          <a className="nav-items bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:from-purple-400 hover:via-pink-500 hover:to-red-500" href="#experience">Experience</a>
          <a className="nav-items bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:from-purple-400 hover:via-pink-500 hover:to-red-500" href="#projects">Projects</a>
          <a className="nav-items bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:from-purple-400 hover:via-pink-500 hover:to-red-500" href="#contactme">Contact Me</a>
        </div>

        {/* Mobile Menu Links */}
        <div className={`lg:hidden fixed top-0 right-0 z-50 bg-black w-3/4 h-full p-8 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
          <button 
            onClick={toggleMobileMenu}
            className='text-white text-2xl bg-whiteabsolute top-6 right-6'
          >
            ✕
          </button>
          <div className='flex flex-col space-y-4 mt-20'>
            <a className="nav-items bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:from-purple-400 hover:via-pink-500 hover:to-red-500" href="#aboutme">About Me</a>
            <a className="nav-items bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:from-purple-400 hover:via-pink-500 hover:to-red-500" href="#skills">Skills</a>
            <a className="nav-items bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:from-purple-400 hover:via-pink-500 hover:to-red-500" href="#experience">Experience</a>
            <a className="nav-items bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:from-purple-400 hover:via-pink-500 hover:to-red-500" href="#projects">Projects</a>
            <a className="nav-items bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:from-purple-400 hover:via-pink-500 hover:to-red-500" href="#contactme">Contact Me</a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="hidden lg:flex items-center justify-center gap-4 text-2xl">
            <a
                href="https://www.linkedin.com/in/rana-kashif-7b0747185/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 ease-in-out"
            >
                <FaLinkedin className='text-white hover:text-blue-500 transition-colors duration-300' />
            </a>
            <a
                href="https://github.com/rkashif96"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 ease-in-out"
            >
                <FaGithub className='text-white hover:text-gray-700 transition-colors duration-300' />
            </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
