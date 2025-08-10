import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: "Privacy Policy | Travel CMS",
  description: "Read our Privacy Policy to understand how we collect, use, and protect your data.",
  openGraph: {
    title: "Privacy Policy | Travel CMS",
    description: "Learn how Travel CMS handles your personal information and data security.",
    url: "https://voyage-forge.com/privacy-policy",
    siteName: "Travel CMS",
    images: [
      {
        url: "https://res.cloudinary.com/dp3fvdwse/image/upload/v1754218499/Voyage_Forge_Company_laudwl.jpg",
        width: 1200,
        height: 630,
        alt: "Travel CMS Privacy Policy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Travel CMS",
    description: "Learn how Travel CMS handles your personal information",
    images: ["https://res.cloudinary.com/dp3fvdwse/image/upload/v1754218499/Voyage_Forge_Company_laudwl.jpg"],
  },
  metadataBase: new URL("https://voyage-forge.com"),
  alternates: {
    canonical: "https://voyage-forge.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <section className="min-h-screen pt-24 pb-20 bg-gray-950 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto py-12">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
              <p className="text-gray-300 mb-6">
                We collect information you provide directly to us when you sign up for our services, 
                including your name, email address, and any other contact details you choose to provide.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-6">
                We use the information we collect to provide, maintain, and improve our services, 
                to communicate with you, and to develop new products and services.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">3. Cookies and Tracking</h2>
              <p className="text-gray-300 mb-6">
                We use cookies and similar tracking technologies to track activity on our website 
                and hold certain information to improve your experience.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">4. Data Sharing</h2>
              <p className="text-gray-300 mb-6">
                We do not share your personal information with third parties except as necessary 
                to provide our services or as required by law.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
              <p className="text-gray-300 mb-6">
                You have the right to access, correct, or delete your personal information. 
                Please contact us if you wish to exercise these rights.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">6. Changes to This Policy</h2>
              <p className="text-gray-300">
                We may update our Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}