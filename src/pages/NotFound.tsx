
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout/Layout";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <Helmet>
        <title>404 - Page Not Found | Digimatika</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl sm:text-8xl font-bold text-accent-coral mb-6">404</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-navy mb-4">Page Not Found</h2>
          <p className="text-lg text-secondary-slate mb-8 max-w-md mx-auto">
            We're sorry, but the page you were looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="flex items-center justify-center gap-2 btn-primary"
            >
              <ArrowLeft size={20} /> Back to Home
            </Link>
            
            <Link 
              to="/contact" 
              className="btn-secondary"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
