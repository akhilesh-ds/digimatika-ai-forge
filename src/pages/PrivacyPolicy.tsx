
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-10"
      >
        <div className="container-custom py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-navy mb-8 text-center">
            Privacy <span className="text-accent-coral">Policy</span>
          </h1>
          <div className="w-24 h-1 bg-accent-coral mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <div className="prose max-w-none">
              <p className="text-lg mb-8 text-secondary-slate">
                Last updated: April 15, 2025
              </p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-navy mb-4">1. Introduction</h2>
                <p className="text-secondary-slate">
                  Digimatika ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-secondary-slate mt-4">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-navy mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-secondary-slate mb-2">Personal Data</h3>
                <p className="text-secondary-slate">
                  When you visit our website or use our services, we may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, company name, and any other information you choose to provide when you:
                </p>
                <ul className="list-disc pl-6 mt-2 mb-4 text-secondary-slate">
                  <li>Fill out a form on our website</li>
                  <li>Book a consultation</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us via email or phone</li>
                  <li>Use our services</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-secondary-slate mb-2 mt-6">Non-Personal Data</h3>
                <p className="text-secondary-slate">
                  We may also collect non-personal information about you whenever you interact with our website. Non-personal information may include:
                </p>
                <ul className="list-disc pl-6 mt-2 text-secondary-slate">
                  <li>Browser name</li>
                  <li>Device type</li>
                  <li>Operating system</li>
                  <li>Pages visited</li>
                  <li>Time and date of your visit</li>
                  <li>Referring website</li>
                  <li>IP address</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-navy mb-4">3. How We Use Your Information</h2>
                <p className="text-secondary-slate">
                  We may use the information we collect from you for various purposes, including to:
                </p>
                <ul className="list-disc pl-6 mt-2 text-secondary-slate">
                  <li>Provide, operate, and maintain our website and services</li>
                  <li>Improve, personalize, and expand our website and services</li>
                  <li>Understand and analyze how you use our website</li>
                  <li>Develop new products, services, features, and functionality</li>
                  <li>Communicate with you directly or through one of our partners</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you emails and updates</li>
                  <li>Find and prevent fraud</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-navy mb-4">4. Cookie Policy</h2>
                <p className="text-secondary-slate">
                  We use cookies and similar tracking technologies to collect information about your activities on our website. Cookies are small files placed on your device that allow us to provide enhanced functionality and content personalization.
                </p>
                <p className="text-secondary-slate mt-4">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-navy mb-4">5. Third-Party Disclosure</h2>
                <p className="text-secondary-slate">
                  We do not sell, trade, or otherwise transfer your personal information to outside parties unless we provide you with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-navy mb-4">6. Security Measures</h2>
                <p className="text-secondary-slate">
                  We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-navy mb-4">7. Your Data Rights</h2>
                <p className="text-secondary-slate">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 mt-2 text-secondary-slate">
                  <li>Right to access the personal information we hold about you</li>
                  <li>Right to rectification of inaccurate information</li>
                  <li>Right to erasure of your personal information</li>
                  <li>Right to restrict processing of your personal information</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing of your personal information</li>
                </ul>
                <p className="text-secondary-slate mt-4">
                  To exercise any of these rights, please contact us using the details provided below.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-navy mb-4">8. Contact Us</h2>
                <p className="text-secondary-slate">
                  If you have any questions or concerns about our Privacy Policy, please contact us at privacy@digimatika.com or write to us at:
                </p>
                <p className="text-secondary-slate mt-4">
                  Digimatika<br />
                  123 Innovation Street<br />
                  Tech City, TC 12345<br />
                  United States
                </p>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default PrivacyPolicy;
