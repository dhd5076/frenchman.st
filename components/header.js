import Link from 'next/link';
/*  https://coolors.co/325091-fffffe-28965a-bf0603-eeb970 */

import { MenuAlt1 } from 'heroicons-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full text-white flex bg-accent" id="navbar">
      <img src="/logo/PrimaryLogo.svg" className="h-[16rem] -my-16">
      </img>
      <div className="hidden mx-auto h-32 md:flex justify-between items-center mr-16">
        <div className="md:flex space-x-16 text-xl font-thin rosewood-font items-center">
          <Link href="/menu">
            Menu
          </Link>
          <Link href="/about">
            About Us
          </Link>
          <Link href="/events">
            Events
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;