import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Placeholder pages - would be implemented with actual content in a full project
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen flex items-center justify-center bg-customBg">
    <div className="text-center max-w-lg px-4">
      <h1 className="text-4xl font-bold mb-4 text-primary-navy">{title}</h1>
      <p className="text-xl text-secondary-slate mb-8">This page is under development. Check back soon for updates!</p>
      <a href="/" className="btn-primary inline-block">Back to Home</a>
    </div>
  </div>
);

const ServicesPage = () => <PlaceholderPage title="Our Services" />;
const AboutPage = () => <PlaceholderPage title="About Us" />;
const BlogPage = () => <PlaceholderPage title="Blog" />;
const ContactPage = () => <PlaceholderPage title="Contact Us" />;
const BookAppointmentPage = () => <PlaceholderPage title="Book a Consultation" />;
const PrivacyPolicyPage = () => <PlaceholderPage title="Privacy Policy" />;
const TermsPage = () => <PlaceholderPage title="Terms & Conditions" />;

// Service specific pages
const ChatbotsPage = () => <PlaceholderPage title="AI Chatbots" />;
const VoiceAgentsPage = () => <PlaceholderPage title="AI Voice Agents" />;
const WorkflowAutomationPage = () => <PlaceholderPage title="Workflow Automation" />;
const BusinessAutomationPage = () => <PlaceholderPage title="Business Automation" />;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Main Pages */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-appointment" element={<BookAppointmentPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          
          {/* Service-specific Pages */}
          <Route path="/services/chatbots" element={<ChatbotsPage />} />
          <Route path="/services/voice-agents" element={<VoiceAgentsPage />} />
          <Route path="/services/workflow-automation" element={<WorkflowAutomationPage />} />
          <Route path="/services/business-automation" element={<BusinessAutomationPage />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
