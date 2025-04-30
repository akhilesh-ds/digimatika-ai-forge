
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import PageLoader from "./components/ui/page-loader";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ServicesPage = lazy(() => import("./pages/Services"));
const AboutPage = lazy(() => import("./pages/About"));
const BlogPage = lazy(() => import("./pages/Blog"));
const ContactPage = lazy(() => import("./pages/Contact"));
const BookAppointmentPage = lazy(() => import("./pages/BookAppointment"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicy"));
const TermsPage = lazy(() => import("./pages/TermsAndConditions"));

// Service specific pages
const ChatbotsPage = lazy(() => import("./pages/services/Chatbots"));
const VoiceAgentsPage = lazy(() => import("./pages/services/VoiceAgents"));
const WorkflowAutomationPage = lazy(() => import("./pages/services/WorkflowAutomation"));
const BusinessAutomationPage = lazy(() => import("./pages/services/BusinessAutomation"));

// Configure the QueryClient for optimal performance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      refetchOnWindowFocus: false,
      retry: 1, // Limit retries for better performance
      gcTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
