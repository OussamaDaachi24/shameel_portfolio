import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  name: string;
  role: string;
  tagline: string;
  accentColorClass: string;
  textGradientClass: string;
  portraitSrc: string;
}

const PageHeader = ({ name, role, tagline, textGradientClass, portraitSrc }: PageHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="relative min-h-[70vh] flex items-end section-padding overflow-hidden">
      {/* Background portrait */}
      <div className="absolute inset-0">
        <img src={portraitSrc} alt={name} className="h-full w-full object-cover object-top opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        onClick={() => navigate("/")}
        className="absolute top-8 left-6 md:left-12 lg:left-20 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors z-10"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-display tracking-wider uppercase">Back to team</span>
      </motion.button>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`text-sm font-medium tracking-[0.2em] uppercase mb-4 ${textGradientClass}`}
        >
          {role}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-6"
        >
          {name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          {tagline}
        </motion.p>
      </div>
    </header>
  );
};

export default PageHeader;
