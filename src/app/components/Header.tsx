"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const scrollToCalendly = () => {
  if (pathname !== '/') {
    window.location.href = '/#waitlist';
  } else {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToWaitlist = () => {
  if (pathname !== '/') {
    window.location.href = '/#calendly';
  } else {
    const element = document.getElementById('calendly');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-200 px-4 py-3 flex flex-wrap items-center justify-between">
      <Link href="/" className="flex items-center gap-2 flex-shrink-0">
        <Image
          src="/vo.png"
          alt="Logo"
          width={40}
          height={40}
          className="h-10 w-auto object-contain"
        />
      </Link>
      
      {/* Navigation links */}
      <nav className="hidden md:flex items-center gap-6">
        <Link 
          href="/about-us" 
          className={`text-sm font-medium px-3 py-2 transition ${pathname === '/about-us' ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'}`}
        >
          About Us
        </Link>
        <Link 
          href="/privacy-policy" 
          className={`text-sm font-medium px-3 py-2 transition ${pathname === '/privacy-policy' ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'}`}
        >
          Privacy Policy
        </Link>
      </nav>

      {/* Buttons container */}
      <div className="flex gap-3 mt-2 sm:mt-0 w-full sm:w-auto justify-end sm:justify-start">
        <button
          onClick={scrollToWaitlist}
          className="flex-1 sm:flex-none bg-black text-white text-sm font-medium px-4 py-2 rounded-full border border-black hover:bg-transparent hover:text-black transition-all"
        >
          Book Call
        </button>
        <button
          onClick={scrollToCalendly}
          className="flex-1 sm:flex-none bg-yellow-400 text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-yellow-500 transition-all"
        >
          Join Waitlist
        </button>
      </div>
    </header>
  );
}