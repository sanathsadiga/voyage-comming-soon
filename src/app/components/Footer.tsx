"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {

    const pathname = usePathname();
const scrollToFeatures = () => {
  if (pathname !== '/') {
    window.location.href = '/#features';
  } else {
    const element = document.getElementById('features');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
    <footer className="py-12 bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Voyage Forge</h3>
            <p className="text-gray-400 text-sm">
              The fastest way to launch your travel business online.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/#features" className="text-gray-400 hover:text-white transition text-sm">Features</Link></li>
              <li><Link href="/#waitlist" className="text-gray-400 hover:text-white transition text-sm">Pricing</Link></li>
              <li><Link href="/#waitlist" className="text-gray-400 hover:text-white transition text-sm">Waitlist</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-gray-400 hover:text-white transition text-sm">About Us</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:hello@travelcms.com" className="text-gray-400 hover:text-white transition text-sm">Email Us</a></li>
              <li><Link href="/#waitlist" className="text-gray-400 hover:text-white transition text-sm">Book a Call</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Travel CMS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}