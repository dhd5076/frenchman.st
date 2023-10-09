import { MenuAlt1 } from 'heroicons-react';

import { useState, useEffect } from 'react';

import Link from 'next/link';

const Navbar = () => {

  const [showScroll, setShowScroll] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const scrollToElementById = (elementId) => {
        const element = document.getElementById(elementId);
      
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {

        setIsVisible(true);

        window.addEventListener('scroll', () => {
            if(window.scrollY > 300) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }

        })
    });

    return (
      <nav className="fixed top-0 left-0 w-full bg-accent/90 backdrop-blur text-white z-50 shadow-xl shadow-black/25 px-6">
        <div className="container mx-auto flex rosewood-font justify-between py-2 items-center"> {/* Add 'items-center' */}
          <Link href="/" className="text-2xl align-baseline inline-block pt-2">
              Frenchman Street
          </Link>
          <div className="hidden md:flex space-x-6 text-lg">
            <Link href="/#top" className="hover:text-white/50 transition duration-300 ease-in-out">
              Home
            </Link>
            <Link href="/#first" className="hover:text-white/50 transition duration-300 ease-in-out">
              Menu
            </Link>
            <a href="/events" className="hover:text-white/50 transition duration-300 ease-in-out">
              About
            </a>
            <a href="/contact" className="hover:text-white/50 transition duration-300 ease-in-out">
              Contact
            </a>
            <a href="/contact" className="hover:text-white/50 transition duration-300 ease-in-out">
              Order Online
            </a>
          </div>
          <Link href="/" className="fa fa-bars text-2xl md:hidden">

          </Link>
        </div>
      </nav>
    );
    
};

export default Navbar;
