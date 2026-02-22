import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background section-padding">
      <h1 className="text-7xl font-display font-bold text-foreground mb-2">404</h1>
      <p className="text-lg text-muted-foreground mb-8">
        The page <code className="text-primary">{location.pathname}</code> does not exist.
      </p>
      <a
        href="/"
        className="inline-flex items-center gap-2 text-sm font-display tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </a>
    </div>
  );
};

export default NotFound;
