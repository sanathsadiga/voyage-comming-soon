"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";


declare global {
  interface Window {
    Calendly: {
      initPopupWidget?: (options: { url: string }) => void;
    };

  }
}

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
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

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 text-center relative overflow-hidden px-4">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="w-[300%] h-full animate-clouds absolute top-0 left-0">
            <svg
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#ffffff10"
                d="M0,160L60,165.3C120,171,240,181,360,181.3C480,181,600,171,720,160C840,149,960,139,1080,144C1200,149,1320,171,1380,181.3L1440,192V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
              />
            </svg>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Build Modern Travel Websites with <span className="text-yellow-400">Ease</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300">
            Our powerful CMS platform is launching soon – designed for tour operators, travel agencies & adventure brands.
          </p>
        </motion.div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-gray-950 px-4 text-center">
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

      {/* WAITLIST FORM */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-800 to-fuchsia-900 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Join Our Waitlist</h2>
        <p className="text-gray-300 mb-10">
          Be the first to know when we launch. We&rsquo;ll also give you early access perks!
        </p>


        {submitted ? (
          <div className="max-w-xl mx-auto bg-white/10 p-8 rounded-xl text-green-300 text-lg font-semibold border border-white/20 shadow-xl">
            \ud83c\udf89 Thank you for joining the waitlist! We&apos;ll be in touch soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto backdrop-blur-sm bg-white/10 p-8 rounded-xl space-y-4 border border-white/20 shadow-xl"
          >
            <input type="text" name="company" className="hidden" autoComplete="off" tabIndex={-1} />
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
            <textarea
              name="message"
              placeholder="Tell us about your travel business..."
              rows={4}
              className="w-full p-3 rounded bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className={`$${loading ? "bg-yellow-300" : "bg-yellow-400 hover:bg-yellow-500"
                } text-black font-bold py-3 px-6 rounded transition w-full`}
            >
              {loading ? "Submitting..." : "Join Waitlist"}
            </button>
          </form>
        )}
      </section>

      {/* CALENDLY EMBED */}
      <section className="py-20 px-4 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Book a Call</h2>
        <p className="text-gray-300 mb-6">Want to discuss your project or use-case?</p>
        <div className="max-w-4xl mx-auto">
          <div
            className="calendly-inline-widget w-full"
            data-url="https://calendly.com/founder-voyage-forge/30min"
            style={{ minWidth: "320px", height: "700px" }}
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
      

      <footer className="py-6 text-center bg-gray-950 border-t border-gray-700">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Travel CMS. All rights reserved.</p>

      </footer>
      <Analytics/>
    </>

  );
}
