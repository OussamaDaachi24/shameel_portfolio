export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tagline: string;
  accentClass: string;
  textGradientClass: string;
  glowClass: string;
  path: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "ai-engineer",
    name: "DAACHI Oussama",
    role: "Software & AI Engineering Student",
    tagline: "Aspiring Engineer building intelligent systems with a strong foundation in C++, Python, and Web Development.",
    accentClass: "accent-ai",
    textGradientClass: "text-gradient-ai",
    glowClass: "shadow-[var(--shadow-glow-ai)]",
    path: "/portfolio/ai-engineer",
  },
  {
    id: "fullstack-dev",
    name: "Mouafak Benabderrahmane",
    role: "Full Stack Developer · Laravel & Vue.js",
    tagline: "Building reliable backend systems, clean APIs, and responsive interfaces using modern web technologies.",
    accentClass: "accent-dev",
    textGradientClass: "text-gradient-dev",
    glowClass: "shadow-[var(--shadow-glow-dev)]",
    path: "/portfolio/fullstack-dev",
  },
  {
    id: "filmmaker",
    name: "kh Sifou",
    role: "Filmmaker | certified OPV",
    tagline: "Passionate about capturing emotions and telling stories through visuals. Blending cinematic style with raw authenticity.",
    accentClass: "accent-film",
    textGradientClass: "text-gradient-film",
    glowClass: "shadow-[var(--shadow-glow-film)]",
    path: "/portfolio/filmmaker",
  },
  {
    id: "manager",
    name: "Mohamed Bouakline",
    role: "Manager",
    tagline: "Leading teams with vision, empathy, and strategic precision.",
    accentClass: "accent-manager",
    textGradientClass: "text-gradient-manager",
    glowClass: "shadow-[var(--shadow-glow-manager)]",
    path: "/portfolio/manager",
  },
];
