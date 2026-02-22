import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { TeamMember } from "@/data/team";

import portraitAi from "@/assets/oussama.jpg";
import portraitDev from "@/assets/موفق.jpeg";
import portraitFilm from "@/assets/sifou.jpeg";
import portraitManager from "@/assets/mohamed.png";

const portraits: Record<string, string> = {
  "ai-engineer": portraitAi, // Oussama
  "fullstack-dev": portraitDev, // Mouafak
  "filmmaker": portraitFilm, // Sifou
  "manager": portraitManager, // Mohamed
};

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard = ({ member, index }: TeamCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => navigate(member.path)}
      className="group relative cursor-pointer overflow-hidden rounded-lg bg-card border border-border card-hover"
    >
      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={portraits[member.id]}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <p className={`text-sm font-medium tracking-widest uppercase mb-2 ${member.textGradientClass}`}>
          {member.role}
        </p>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
          {member.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {member.tagline}
        </p>

        {/* Animated line */}
        <div className="mt-4 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-primary to-transparent transition-all duration-500" />
      </div>
    </motion.div>
  );
};

export default TeamCard;
