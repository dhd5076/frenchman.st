import { MenuAlt1 } from 'heroicons-react';

import { useState, useEffect } from 'react';

import Link from 'next/link';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

    const scrollToElementById = (elementId) => {
        const element = document.getElementById(elementId);
      
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleShowMenu = () => {
      setShowMenu(!showMenu);
    }

    useEffect(() => {

    });

    return (
      <>
        <nav className="fixed top-0 left-0 w-full bg-accent/90 text-white z-50 shadow-xl shadow-black/25">
          <div className="rosewood-font container text-xl -my-2 mx-auto flex justify-between px-6">
            <img src="/barcode.png" className="-my-auto h-16 my-4"/>
            <div className="hidden md:flex space-x-6 ml-auto my-auto">
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
            <button href="/" className="fa fa-bars align-top text-3xl md:hidden my-auto" onClick={toggleShowMenu}></button>
          </div>
          <div className={`w-full overflow-hidden px-6 ${showMenu ? 'h-[100vh] bg-black/75 visible opacity-100 backdrop-blur' : 'invisible h-0 opacity-0'} duration-1000 transition-all`}>
            <div className="space-y-8 ml-auto my-auto pt-16 rosewood-font">
              <Link href="/#top" className="block hover:text-white/50 transition duration-300 ease-in-out text-center">
                Home
              </Link>
              <Link href="/#first" className="block hover:text-white/50 transition duration-300 ease-in-out text-center">
                Menu
              </Link>
              <a href="/events" className="block hover:text-white/50 transition duration-300 ease-in-out text-center">
                About
              </a>
              <a href="/contact" className="block hover:text-white/50 transition duration-300 ease-in-out text-center">
                Contact
              </a>
              <a href="/contact" className="block hover:text-white/50 transition duration-300 ease-in-out text-center">
                Order Online
              </a>
            </div>
          </div>
        </nav>
      </>
    );
    
    
};

export default Navbar;
