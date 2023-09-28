import Link from 'next/link';
/*  https://coolors.co/325091-fffffe-28965a-bf0603-eeb970 */
const Navbar = () => {
  return (
    <nav className="p-4 fixed top-0 left-0 w-screen bg-[#325091] shadow-xl border-y-4 border-[#EEB970] text-white">
      <div className="container mx-auto md:flex justify-center items-center">
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
          <Link href="/contact" className="bg-[#BF0603] inline rounded-full px-4 py-2 items-center">
            <span className="block" >
              Order Online
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;