
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

const BookConsultationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Load Calendly script
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    head?.appendChild(script);

    return () => {
      head?.removeChild(script);
    };
  }, []);

  return (
    <section ref={sectionRef} id="book-consultation" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">Book a <span className="text-accent-coral">Consultation</span></h2>
          <div className="w-24 h-1 bg-accent-coral mx-auto mb-8"></div>
          <p className="text-lg text-secondary-slate max-w-3xl mx-auto">
            Schedule a 30-minute Google Meet call with our experts to discuss how we can help transform your business with automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary-navy mb-6">What to Expect</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary-navy text-white">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-primary-navy">Personalized Assessment</h4>
                      <p className="text-secondary-slate">We'll analyze your specific needs and challenges.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent-coral text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-primary-navy">Solution Overview</h4>
                      <p className="text-secondary-slate">Get tailored recommendations for your business.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary-slate text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-primary-navy">Next Steps</h4>
                      <p className="text-secondary-slate">Clear action plan to move forward with confidence.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right side: Calendly */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 min-h-[600px]"
          >
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/info-deepaisolutions/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=1C1C1E&primary_color=FF5C58"
              style={{ minWidth: '320px', height: '630px' }}
            />
            <p className="text-xs text-secondary-slate mt-4 text-center">
              By booking a consultation, you agree to our <a href="/terms-and-conditions" className="text-accent-coral hover:underline">Terms of Service</a> and <a href="/privacy-policy" className="text-accent-coral hover:underline">Privacy Policy</a>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookConsultationSection;
