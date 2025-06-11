import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Investment', path: '/investment' },
    { name: 'News & Updates', path: '/news' },
    { name: 'Contact', path: '/contact' },
    { name: 'Media Gallery', path: '/gallery' },
  ];

  // Handle scroll event to change navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-lg py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img 
                src="https://i.imgur.com/tBmdhmC.png" 
                alt="Port of Dangriga Logo" 
                className="h-24 md:h-24 w-auto rounded-xl"
              />
            </Link>
            <span className="text-black mx-2">by</span>
            <button
              onClick={() => window.open('https://www.thelegacyholding.com/', '_blank')}
              className="bg-none p-2 rounded-xl hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://i.imgur.com/r7uvPhd.jpeg" 
                alt="Legacy Holding Logo" 
                className="h-[calc(96vh*0.06)] md:h-12 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`text-sm uppercase tracking-wider font-medium px-1 py-2 hover:text-teal-600 transition-colors relative ${
                      isActive(link.path) 
                        ? 'text-teal-600' 
                        : 'text-black'
                    }`}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 rounded-full"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`block text-sm uppercase tracking-wider font-medium px-1 py-2 ${
                      isActive(link.path) 
                        ? 'text-teal-600' 
                        : 'text-black'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;