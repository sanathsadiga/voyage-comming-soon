"use client";

import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Link from "next/link";

// Add this component near the top of your file (after the imports)
const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 left-4 right-4 max-w-2xl mx-auto bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-6 z-50"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1">
          <h3 className="text-white font-medium mb-2">We use cookies</h3>
          <p className="text-gray-300 text-sm">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies. See our{' '}
            <Link href="/privacy-policy" className="text-yellow-400 hover:underline">
              Privacy Policy
            </Link> for more details.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-gray-600 rounded-lg hover:bg-gray-700 transition"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition"
          >
            Accept All
          </button>
        </div>
      </div>
    </motion.div>
  );
};


declare global {
  interface Window {
    Calendly: {
      initPopupWidget?: (options: { url: string }) => void;
    };
    fbq?: (...args: [string, string, Record<string, unknown>?]) => void;

  }
}

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const calendlyRef = useRef<HTMLDivElement>(null);
  const WaitlistRefs = useRef<HTMLDivElement>(null);

  const scrollToCalendly = () => {
    calendlyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWaitlist = () => {
    WaitlistRefs.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (formData.get("company")) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        "https://hook.eu2.make.com/v9k7sdj2vallvrvnm4abbsdp3prseiix",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        setSubmitted(true);
        form.reset();

        // ✅ Track Lead Event after successful response
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "Lead", {
            value: 100,
            currency: "INR",
          });
        }
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch  {
      alert("Network error. Please try again later.");
    }

    setLoading(false);
  };


  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Analytics />
      
      <SpeedInsights />
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1258054316331739');
      fbq('track', 'PageView');
    `,
        }}
      />



      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1258054316331739&ev=PageView&noscript=1"
        />
      </noscript>



      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-D5K3W462PN`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-D5K3W462PN', {
        page_path: window.location.pathname,
      });
    `,
        }}
      />

     
    <Header />




    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 px-4 sm:px-8 pt-24 pb-20 overflow-hidden">
  {/* Modern background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-10 left-10 w-64 h-64 bg-purple-600 opacity-10 rounded-full blur-[100px] animate-float"></div>
    <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-400 opacity-10 rounded-full blur-[100px] animate-float animation-delay-2000"></div>
    <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500 opacity-05 rounded-full blur-[120px] animate-float animation-delay-3000"></div>
    
    {/* Subtle grid texture */}
    <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
  </div>

  {/* Main content container - centered without preview */}
  <div className="relative z-10 max-w-4xl mx-auto px-4 w-full mt-10 sm:mt-0">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      {/* Early access badge */}
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
        <span className="relative flex h-2 w-2 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
        </span>
        <span className="text-sm font-medium text-white">Early Access - Limited Time</span>
      </div>

      {/* Headline with gradient accent */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
        <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
          Launch Your Travel Website
        </span><br />
        in Minutes, Not Weeks
      </h1>

      {/* Subheading */}
      <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
        Get everything you need to showcase your travel business online - beautiful website, SEO optimization, and itinerary tools. 
        <span className="block mt-3 font-semibold text-yellow-300">Free during early access. No credit card required.</span>
      </p>

      {/* Countdown timer - more prominent */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-8 inline-flex items-center">
        <svg className="w-5 h-5 mr-2 text-yellow-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
        <span className="font-medium text-white">Early access ends in: <span className="font-bold text-yellow-300">7 days</span></span>
      </div>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
        <button
          onClick={scrollToCalendly}
          className="relative group flex-1 sm:flex-none flex items-center justify-center px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden max-w-xs mx-auto sm:mx-0 w-full"
        >
          <span className="relative z-10">Join Free Waitlist</span>
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
        <button
          onClick={scrollToWaitlist}
          className="relative group flex-1 sm:flex-none flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm max-w-xs mx-auto sm:mx-0 w-full"
        >
          <span className="relative z-10">See How It Works</span>
          <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
      </div>

      {/* Features list - optimized for mobile */}
      <div className="grid grid-cols-2 sm:flex sm:flex-row justify-center gap-4 sm:gap-6 text-sm text-white/80">
        <div className="flex items-center justify-center sm:justify-start">
          <svg className="w-4 h-4 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          No coding
        </div>
        <div className="flex items-center justify-center sm:justify-start">
          <svg className="w-4 h-4 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          SEO ready
        </div>
        <div className="flex items-center justify-center sm:justify-start">
          <svg className="w-4 h-4 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          Mobile perfect
        </div>
        <div className="flex items-center justify-center sm:justify-start">
          <svg className="w-4 h-4 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          Free templates
        </div>
      </div>
    </motion.div>
  </div>
</section>




      {/* FEATURES SECTION */}
      <section id="features"className="py-20 bg-gray-950 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">What to Expect</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            ["\ud83d\udccd Dynamic Itineraries", "Create drag-and-drop itineraries for any trip."],
            ["\ud83e\uddfe Booking Engine", "Accept bookings with built-in cart & payment gateway."],
            ["\ud83e\uddf9 Widgets", "Embed maps, reviews, countdowns & more."],
            ["\ud83c\udfa8 Themes", "Modern responsive templates for quick launch."],
            ["\ud83d\udcc8 Marketing Tools", "SEO, email capture, analytics & pixel ready."],
            ["\u26a1 Speed & SEO", "Ultra-fast performance with SEO baked-in."]
          ].map(([title, desc], i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="waitlist"
        ref={calendlyRef}
        className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-800 to-fuchsia-900 text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-white">
          Join Our Waitlist Today
        </h2>
        <p className="text-gray-300 mb-10">
          Be the first to know when we launch — and receive exclusive early
          access bonuses.
        </p>

        {submitted ? (
          <div className="max-w-xl mx-auto bg-white/10 p-8 rounded-xl text-green-300 text-lg font-semibold border border-white/20 shadow-xl">
            🎉 Thank you! We’ll be in touch soon with your early access perks.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto backdrop-blur-sm bg-white/10 p-8 rounded-xl space-y-4 border border-white/20 shadow-xl"
          >
            <input
              type="text"
              name="company"
              className="hidden"
              autoComplete="off"
              tabIndex={-1}
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "bg-yellow-300" : "bg-yellow-400 hover:bg-yellow-500"
              } text-black font-bold py-3 px-6 rounded transition w-full`}
            >
              {loading ? "Submitting..." : "Join Waitlist Now"}
            </button>
            <p className="text-sm text-gray-300">
              ✅ No spam. Cancel anytime. You’ll also receive our{" "}
              <span className="underline">Free Travel Website Launch Guide</span>.
            </p>
          </form>
        )}
      </section>

      {/* CALENDLY EMBED */}
      <section id="calendly"ref={WaitlistRefs} className="py-20 px-4 bg-gray-900 text-center">

        <h2 className="text-3xl font-bold mb-6 text-white">Book a Call</h2>
        <p className="text-gray-300 mb-6">Let’s discuss your travel business goals & how we can help.</p>
        <div className="max-w-4xl mx-auto">
          <div
            className="calendly-inline-widget w-full"
            data-url="https://calendly.com/founder-voyage-forge/30min"
            style={{ minWidth: "320px", height: "900px" }}
          ></div>
        </div>
      </section>

      <motion.button
        onClick={() => {
          if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
            window.Calendly.initPopupWidget({
              url: "https://calendly.com/founder-voyage-forge/30min?hide_event_type_details=1&hide_gdpr_banner=1",
            });
          } else {
            console.error("Calendly widget is not loaded yet.");
          }
        }}

        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:from-blue-700 hover:to-indigo-700 transition-all"
      >
        \ud83d\uddd3 Schedule a Call
      </motion.button>
      


       <Footer />
      <SpeedInsights />
      <Analytics />
        <CookieConsent />
    </>

  );
}
