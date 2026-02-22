import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Footer from "@/components/Footer";
import { teamMembers } from "@/data/team";
import portraitAi from "@/assets/oussama.jpg";
import {
  Brain,
  Cpu,
  Code,
  ExternalLink,
  Mail,
  MapPin,
  Linkedin,
  Trophy,
  GraduationCap,
  CalendarDays,
  GitBranch,
  Star as StarIcon,
} from "lucide-react";

const member = teamMembers[0];

const projects = [
  {
    title: "GardistaSport",
    link: "https://gardistasport.com",
    image: "", // Placeholder
    period: "2024",
    company: "Freelance",
    type: "E-commerce",
    desc: "Designed and implemented a full-featured e-commerce website for sports equipment.",
    highlights: [
      "Built with Flask (Python) backend and PostgreSQL database.",
      "Developed responsive frontend using HTML, CSS, and JavaScript.",
      "Implemented secure user authentication and product management systems.",
    ],
    tags: ["Flask", "PostgreSQL", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Let’s Rank (LetsRank)",
    link: "#",
    image: "",
    period: "Ongoing",
    company: "Co-Founder",
    type: "Evaluation Platform",
    desc: "Real-time jury evaluation platform for pitch days, hackathons, and competitive events.",
    highlights: [
      "Implemented weighted-criteria scoring, jury dashboards, and live leaderboards.",
      "Designed scalable backend with Django REST Framework and Docker.",
      "Built modern frontend with React and TypeScript.",
    ],
    tags: ["Django", "React", "TypeScript", "PostgreSQL", "Docker"],
  },
  {
    title: "BMS – AI-Driven Warehouse Optimization",
    link: "#",
    image: "",
    period: "2026",
    company: "Academic Project",
    type: "Optimization System",
    desc: "Storage Optimization Service assigning SKUs to optimal locations to minimize travel handling costs.",
    highlights: [
      "Implemented distance-aware picking optimization using Dijkstra/A* algorithms.",
      "Built dynamic heuristic scoring integrating weight, demand, and slot availability.",
      "Reduced chariot congestion and travel time significantly.",
    ],
    tags: ["Python", "Graph Search", "FastAPI", "ML Regression"],
  },
  {
    title: "ABIX-XAI – Algerian Banking Analysis",
    link: "#",
    image: "",
    period: "2010–2024 Data",
    company: "Data Science",
    type: "Analytics",
    desc: "Analyzed Algerian banking performance and risk using ML models.",
    highlights: [
      "Predicted banking performance with 81% accuracy using Random Forest.",
      "Segmented 27 banks using K-Means clustering.",
      "Applied SHAP explainability to analyze risk drivers.",
    ],
    tags: ["Python", "Random Forest", "K-Means", "SHAP"],
  },
  {
    title: "Mobikio",
    link: "#",
    image: "",
    period: "Freelance",
    company: "Mobile App",
    type: "Retail Management",
    desc: "Offline-first Flutter application for drivers and retail management.",
    highlights: [
      "Built using Clean Architecture and BLoC state management.",
      "Integrated native hardware for thermal printing and barcode scanning.",
      "Implemented Isar database for seamless offline capability.",
    ],
    tags: ["Flutter", "PHP", "CodeIgniter", "Isar DB"],
  },
];

const techStack = [
  {
    category: "Languages",
    icon: Code,
    items: ["Python", "C++", "JavaScript", "Dart", "SQL", "PHP", "Bash"],
  },
  {
    category: "AI & Data",
    icon: Brain,
    items: ["Machine Learning", "PyTorch", "Pandas", "Scikit-Learn", "Graph Algorithms", "Heuristics"],
  },
  {
    category: "Frameworks",
    icon: Cpu,
    items: ["Flask", "Django/DRF", "React", "Flutter", "FastAPI", "PySide6"],
  },
  {
    category: "Tools & DevOps",
    icon: GitBranch,
    items: ["Git/GitHub", "Docker", "Linux", "PostgreSQL", "OracleDB", "Jira"],
  },
];

const education = [
  {
    degree: "Secondary Education",
    school: "Mohammed Sherif High School",
    period: "2023",
    details: "Grade: 19.32/20. Ranked 2nd in Algeria (Baccalaureate).",
    highlight: true,
  },
  {
    degree: "Engineering in Computer Science and AI",
    school: 'National Higher School of Artificial Intelligence "ENSIA"',
    period: "Sep 2023 – June 2028 (Expected)",

  },

];

const awards = [
  {
    title: "2nd Place in BAC 2023",
    desc: "BAC 2023, Algeria",
  },
  {
    title: "1st Place at MobAi",
    desc: "National School of Artificial Intelligence - AI & mobile development.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

const AiEngineerPage = () => (
  <div className="min-h-screen bg-background">
    <PageHeader
      name={member.name}
      role={member.role}
      tagline={member.tagline}
      accentColorClass="accent-ai"
      textGradientClass="text-gradient-ai"
      portraitSrc={portraitAi}
    />

    {/* Contact Bar */}
    <section className="border-b border-border">
      <motion.div
        {...fadeUp}
        className="section-padding py-5 flex flex-wrap gap-x-8 gap-y-3 items-center"
      >
        <a
          href="mailto:oussamadaachi1932@gmail.com"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-ai transition-colors"
        >
          <Mail className="w-4 h-4 text-accent-ai" />
          oussamadaachi1932@gmail.com
        </a>
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 text-accent-ai" />
          Algiers, Algeria
        </span>
        <a
          href="https://www.linkedin.com/in/oussama-student-daachi-/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-ai transition-colors"
        >
          <Linkedin className="w-4 h-4 text-accent-ai" />
          LinkedIn
        </a>
      </motion.div>
    </section>

    {/* Summary / Objective */}
    <section className="section-padding">
      <SectionTitle title="About" accentClass="bg-accent-ai" />
      <motion.p
        {...fadeUp}
        className="max-w-3xl text-muted-foreground leading-relaxed text-base md:text-lg"
      >
        Aspiring Software/AI Engineering student with a strong foundation in <span className="text-foreground font-medium">C++, Python, and Web Development</span>.
        I am seeking to apply my knowledge of data structures, algorithms, back-end development, and AI concepts in innovative projects.
        Eager to contribute to collaborative development and expand my technical skills in a practical environment.
      </motion.p>
    </section>

    {/* Feature: 2nd in Bac Flex */}
    <section className="section-padding py-0">
      <motion.div
        {...fadeUp}
        className="rounded-xl bg-gradient-to-r from-accent-ai/10 to-transparent border border-accent-ai/20 p-6 md:p-8 flex items-center gap-6"
      >
        <div className="bg-accent-ai/20 p-4 rounded-full shrink-0">
          <Trophy className="w-8 h-8 text-accent-ai" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-1">Ranked 2nd in Algeria</h3>
          <p className="text-muted-foreground">Achieved a remarkable <span className="text-accent-ai font-medium">19.32/20</span> in the National Baccalaureate Exam (2023).</p>
        </div>
      </motion.div>
    </section>

    {/* Projects */}
    <section className="section-padding">
      <SectionTitle
        title="Projects"
        accentClass="bg-accent-ai"
        subtitle="Innovative solutions spanning AI, Web, and Mobile."
      />
      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-lg bg-card border border-border hover:border-accent-ai/30 transition-all card-hover overflow-hidden"
          >
            <div className="p-6 flex flex-col md:flex-row gap-6">
              {/* Left: Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Code className="w-4 h-4 text-accent-ai shrink-0" />
                      <a
                        href={project.link !== "#" ? project.link : undefined}
                        target={project.link !== "#" ? "_blank" : undefined}
                        rel="noreferrer"
                        className={`font-display font-semibold text-foreground text-lg ${project.link !== "#" ? "hover:text-accent-ai cursor-pointer" : ""} transition-colors flex items-center gap-1.5`}
                      >
                        {project.title}
                        {project.link !== "#" && <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />}
                      </a>
                      <span className="px-2 py-0.5 text-xs font-display bg-accent-ai/15 text-accent-ai rounded hidden sm:inline">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{project.company}</p>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                    <CalendarDays className="w-3 h-3" />
                    {project.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.desc}</p>

                <ul className="space-y-1.5 mb-4">
                  {project.highlights.map((h) => (
                    <li key={h} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-accent-ai mt-1.5 shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-display tracking-wider rounded bg-accent-ai/10 text-accent-ai"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Thumbnail (Placeholder logic) */}
              <a
                href={project.link !== "#" ? project.link : undefined}
                target={project.link !== "#" ? "_blank" : undefined}
                className={`shrink-0 w-32 h-24 sm:w-44 sm:h-32 rounded-xl overflow-hidden bg-white/5 border border-border block self-start mt-1 ${project.link !== "#" ? "hover:border-accent-ai/40 cursor-pointer" : "cursor-default"} transition-colors`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground opacity-40 font-display tracking-wider text-center px-2">
                    {project.link !== "#" ? "View Project" : "No Image"}
                  </div>
                )}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Education & Awards Grid */}
    <section className="section-padding">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <SectionTitle title="Education" accentClass="bg-accent-ai" />
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="relative pl-6 border-l border-border hover:border-accent-ai/50 transition-colors"
              >
                <div className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full ${edu.highlight ? "bg-accent-ai animate-pulse" : "bg-border"}`} />
                <h3 className="font-display font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-sm text-accent-ai mb-1">{edu.school}</p>
                <p className="text-xs text-muted-foreground mb-2">{edu.period}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <SectionTitle title="Honors & Awards" accentClass="bg-accent-ai" />
          <div className="space-y-4">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-4 rounded-lg bg-card border border-border hover:border-accent-ai/30 transition-colors flex gap-4"
              >
                <div className="bg-accent-ai/10 p-2 rounded-md h-fit">
                  <Trophy className="w-5 h-5 text-accent-ai" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{award.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{award.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Skills */}
    <section className="section-padding">
      <SectionTitle title="Technical Skills" accentClass="bg-accent-ai" />
      <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {techStack.map((cat) => (
          <div
            key={cat.category}
            className="p-6 rounded-lg bg-card border border-border hover:border-accent-ai/30 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              <cat.icon className="w-5 h-5 text-accent-ai" />
              <h3 className="text-sm font-display tracking-widest uppercase text-accent-ai">{cat.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="px-2 py-1 text-xs rounded bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>

    <Footer />
  </div>
);

export default AiEngineerPage;
