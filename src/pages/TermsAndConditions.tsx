
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
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
            Terms & <span className="text-accent-coral">Conditions</span>
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
                  Welcome to Digimatika. These Terms and Conditions govern your use of our website and services. By accessing or using our website and services, you agree to be bound by these Terms and Conditions.
                </p>
                <p className="text-secondary-slate mt-4">
                  Please read these Terms and Conditions carefully before using our website or services. If you do not agree with any part of these terms, you may not use our website or services.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-navy mb-4">2. Definitions</h2>
                <p className="text-secondary-slate">
                  In these Terms and Conditions:
                </p>
                <ul className="list-disc pl-6 mt-2 text-secondary-slate">
                  <li>"Digimatika", "we", "us", or "our" refers to Digimatika.</li>
                  <li>"Website" refers to digimatika.com and all its subdomains.</li>
                  <li>"Services" refers to all services provided by Digimatika.</li>
                  <li>"You" or "your" refers to the individual or entity accessing or using our website or services.</li>
                  <li>"Content" refers to all information, text, graphics, images, and other material that may be created, posted, or accessible through our website or services.</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-navy mb-4">3. Use of Website and Services</h2>
                <p className="text-secondary-slate">
                  By using our website and services, you represent and warrant that:
                </p>
                <ul className="list-disc pl-6 mt-2 mb-4 text-secondary-slate">
                  <li>You are at least 18 years of age.</li>
                  <li>You have the legal capacity to enter into a binding agreement.</li>
                  <li>You will comply with these Terms and Conditions.</li>
                  <li>You will comply with all applicable laws and regulations.</li>
                </ul>
                
                <p className="text-secondary-slate">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 mt-2 text-secondary-slate">
                  <li>Use our website in any way that could damage, disable, overburden, or impair the website or interfere with any other party's use of the website.</li>
                  <li>Use any robot, spider, or other automatic device, process, or means to access our website for any purpose, including monitoring or copying any of the material on our website.</li>
                  <li>Use any device, software, or routine that interferes with the proper working of our website.</li>
                  <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
                  <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of our website, the server on which our website is stored, or any server, computer, or database connected to our website.</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-navy mb-4">4. Intellectual Property</h2>
                <p className="text-secondary-slate">
                  The website and its original content, features, and functionality are owned by Digimatika and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
                <p className="text-secondary-slate mt-4">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website, except as follows:
                </p>
                <ul className="list-disc pl-6 mt-2 text-secondary-slate">
                  <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</li>
                  <li>You may store files that are automatically cached by your web browser for display enhancement purposes.</li>
                  <li>You may print or download one copy of a reasonable number of pages of the website for your own personal, non-commercial use and not for further reproduction, publication, or distribution.</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-navy mb-4">5. Service Terms</h2>
                <p className="text-secondary-slate">
                  When you engage our services, you agree to provide accurate and complete information as required for the service. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                </p>
                <p className="text-secondary-slate mt-4">
                  We reserve the right to modify, suspend, or discontinue our services at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of our services.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-navy mb-4">6. Payment and Fees</h2>
                <p className="text-secondary-slate">
                  Some of our services may require payment of fees. All fees are in US dollars and are non-refundable unless otherwise stated. We reserve the right to change our fees at any time. Any changes to fees will be effective immediately upon posting on our website.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-navy mb-4">7. Disclaimer of Warranties</h2>
                <p className="text-secondary-slate">
                  Our website and services are provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. We disclaim all warranties, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-navy mb-4">8. Limitation of Liability</h2>
                <p className="text-secondary-slate">
                  In no event shall Digimatika be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including, but not limited to, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use our website or services.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-navy mb-4">9. Indemnification</h2>
                <p className="text-secondary-slate">
                  You agree to defend, indemnify, and hold harmless Digimatika, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms and Conditions or your use of the website or services.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary-navy mb-4">10. Governing Law</h2>
                <p className="text-secondary-slate">
                  These Terms and Conditions and any dispute or claim arising out of or in connection with them or their subject matter or formation shall be governed by and construed in accordance with the law of the United States and the State of California, without giving effect to any choice or conflict of law provision or rule.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">11. Contact Us</h2>
                <p className="text-secondary-slate">
                  If you have any questions about these Terms and Conditions, please contact us at legal@digimatika.com or write to us at:
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

export default TermsAndConditions;
