import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: `About Us | Travel CMS`,
  description: `Learn about our mission to revolutionize travel website creation with our powerful CMS platform.`,
  openGraph: {
    title: `About Us | Travel CMS`,
    description: `Discover the team and vision behind Travel CMS - the modern solution for travel businesses.`,
    url: `https://voyage-forge.com/about-us`,
    siteName: `Travel CMS`,
    images: [
      {
        url: `https://res.cloudinary.com/dp3fvdwse/image/upload/v1754218499/Voyage_Forge_Company_laudwl.jpg`,
        width: 1200,
        height: 630,
        alt: `About Travel CMS`,
      },
    ],
    type: `website`,
  },
  twitter: {
    card: `summary_large_image`,
    title: `About Us | Travel CMS`,
    description: `Discover the team and vision behind Travel CMS`,
    images: [`https://res.cloudinary.com/dp3fvdwse/image/upload/v1754218499/Voyage_Forge_Company_laudwl.jpg`],
  },
  metadataBase: new URL(`https://voyage-forge.com`),
};


export default function AboutUs() {
  return (
    <>
      <Header />
      <section className="min-h-screen pt-24 pb-20 bg-gray-950 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto py-12">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">About Us</h1>
          
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-8">
              We&apos;re on a mission to make it effortless for travel businesses to establish a stunning 
              online presence. Our platform removes the technical barriers, so you can focus on what 
              you do best - creating amazing travel experiences.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">Our Story</h3>
                <p className="text-gray-300">
                  Founded in 2023 by travel industry veterans and tech enthusiasts, we saw firsthand 
                  how difficult it was for small travel businesses to compete online. We built this 
                  platform to level the playing field.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  We envision a world where every travel business, no matter how small, has access to 
                  professional-grade digital tools that help them grow and thrive in the modern marketplace.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mb-6">Meet the Team</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sanath",
                  role: "Founder & CEO",
                  bio: "Former travel agency owner turned tech entrepreneur."
                },
                {
                  name: "Sarah Chen",
                  role: "CTO",
                  bio: "Full-stack developer with a passion for travel tech."
                },
                {
                  name: "Michael Rodriguez",
                  role: "Head of Design",
                  bio: "Creating beautiful digital experiences for 10+ years."
                }
              ].map((person, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="w-16 h-16 rounded-full bg-yellow-500 mb-4"></div>
                  <h3 className="text-lg font-semibold text-white">{person.name}</h3>
                  <p className="text-yellow-400 text-sm mb-2">{person.role}</p>
                  <p className="text-gray-400 text-sm">{person.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}