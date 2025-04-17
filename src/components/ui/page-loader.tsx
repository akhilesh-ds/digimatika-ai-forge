
import { Loader2 } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 text-primary-navy animate-spin" />
        <p className="text-secondary-slate font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default PageLoader;
