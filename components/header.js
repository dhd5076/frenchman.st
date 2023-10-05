import { MenuAlt1 } from 'heroicons-react';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-accent text-white z-50 shadow-md">
      <div className="container mx-auto flex rosewood-font justify-between items-center py-4">
        <Link href="/" className="text-3xl">
          Frenchman Street
        </Link>
        <div className="hidden md:flex space-x-6 text-lg">
          <a href="/menu" className="hover:text-accent transition duration-300 ease-in-out">
            Menu
          </a>
          <a href="/about" className="hover:text-accent transition duration-300 ease-in-out">
            About Us
          </a>
          <a href="/events" className="hover:text-accent transition duration-300 ease-in-out">
            Events
          </a>
          <a href="/contact" className="hover:text-accent transition duration-300 ease-in-out">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <MenuAlt1 className="h-8 w-8 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
