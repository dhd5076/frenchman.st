import Link from 'next/link';
/*  https://coolors.co/325091-fffffe-28965a-bf0603-eeb970 */

import { MenuAlt1 } from 'heroicons-react';

const Navbar = () => {
  return (
    <nav className="p-4 fixed top-0 left-0 w-full items-center bg-[#325091] border-y-4 border-[#EEB970] text-white z-50">
      <div className="md:hidden">
        <MenuAlt1 className="w-8 h-8" />
      </div>
      <div className="hidden container mx-auto md:flex justify-between  items-center">
        <div className="md:flex space-x-4 text-lg font-bold items-center">
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
        <Link href="/contact" className="bg-[#BF0603] inline rounded-full px-4 py-2 items-center">
            <span className="block text-lg font-bold items-center" >
              Order Online
            </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;