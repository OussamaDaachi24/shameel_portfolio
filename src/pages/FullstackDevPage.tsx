import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Footer from "@/components/Footer";
import { teamMembers } from "@/data/team";
import portraitDev from "@/assets/موفق.jpeg";
import shameelImg from "@/assets/شامل.png";
import massrofiImg from "@/assets/مصروفي.jpg";
import {
  Globe,
  Server,
  Layers,
  ExternalLink,
  Mail,
  MapPin,
  Linkedin,
  GraduationCap,
  Briefcase,
  CalendarDays,
} from "lucide-react";

const member = teamMembers[1];

const projects = [
  {
    title: "Shameel Academy",
    link: "https://shameeldz.com",
    image: shameelImg,
    url: "shameeldz.com",
    period: "Oct 2025 – Dec 2025",
    company: "Shameel Academy · Algiers, Algeria · Remote",
    type: "Education Platform",
    desc: "Built a complete education platform end-to-end — backend and frontend development from scratch.",
    highlights: [
      "Developed backend systems using Laravel, including admin dashboards and a structured REST API.",
      "Created a modern, responsive frontend using Nuxt.js, integrating seamlessly with the API.",
      "Managed architecture, performance, and deployment to deliver a scalable, production-ready system.",
    ],
    tags: ["Laravel", "Nuxt.js", "Vue.js", "REST API", "MySQL"],
  },
  {
    title: "Massrofi Multi-Vendor Platform",
    link: "https://massrofi.com",
    image: massrofiImg,
    url: "massrofi.com",
    period: "Nov 2024 – Oct 2025",
    company: "Massrofi Ltd · Djelfa, Algeria · Remote",
    type: "SaaS",
    desc: "Contributed to a multi-vendor platform, implementing features and optimizing APIs across the full stack.",
    highlights: [
      "Implemented new features and optimized APIs and databases for performance.",
      "Troubleshot full-stack issues and supported production deployments.",
      "Collaborated directly with founders to align technical solutions with business goals.",
      "Gained broad startup experience across the entire development lifecycle.",
    ],
    tags: ["Laravel", "Vue.js", "MySQL", "APIs", "Git"],
  },
];

const techStack = [
  {
    category: "Backend",
    icon: Server,
    items: ["Laravel", "PHP", "Eloquent ORM", "MySQL", "SQL", "REST API", "OOP", "SOLID", "Database Design"],
  },
  {
    category: "Frontend",
    icon: Globe,
    items: ["Vue.js", "Vue Router", "Nuxt.js", "Pinia", "Blade", "Tailwind CSS", "HTML 5", "CSS 3", "JavaScript"],
  },
  {
    category: "DevOps & Tools",
    icon: Layers,
    items: ["Git", "GitHub Actions", "Basic Linux Management", "Production Deployment"],
  },
];

const education = [
  {
    degree: "Master's Degree",
    field: "Computer Networking and Distributed Systems",
    institution: "Ziane Achour University of Djelfa",
    period: "Sep 2023 – Jul 2025",
    desc: "Focused on advanced concepts in networking, distributed systems, and software design. Gained both theoretical knowledge and practical experience in how modern distributed systems work.",
  },
  {
    degree: "Professional Bachelor's Degree",
    field: "Web & Mobile Development",
    institution: "Ziane Achour University of Djelfa",
    period: "Jan 2020 – Jan 2023",
    desc: "Completed through the Erasmus+ funded COFFEE program. Curriculum focused on market-aligned practical skills, reinforced by hands-on projects and internships.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

const FullstackDevPage = () => (
  <div className="min-h-screen bg-background">
    <PageHeader
      name={member.name}
      role={member.role}
      tagline={member.tagline}
      accentColorClass="accent-dev"
      textGradientClass="text-gradient-dev"
      portraitSrc={portraitDev}
    />

    {/* Contact Bar */}
    <section className="border-b border-border">
      <motion.div
        {...fadeUp}
        className="section-padding py-5 flex flex-wrap gap-x-8 gap-y-3 items-center"
      >
        <a
          href="mailto:mouafakben@gmail.com"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-dev transition-colors"
        >
          <Mail className="w-4 h-4 text-accent-dev" />
          mouafakben@gmail.com
        </a>
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 text-accent-dev" />
          Msila, Algeria
        </span>
        <a
          href="https://linkedin.com/in/mouafakben"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-dev transition-colors"
        >
          <Linkedin className="w-4 h-4 text-accent-dev" />
          linkedin.com/in/mouafakben
        </a>
      </motion.div>
    </section>

    {/* Summary */}
    <section className="section-padding">
      <SectionTitle title="About" accentClass="bg-accent-dev" />
      <motion.p
        {...fadeUp}
        className="max-w-3xl text-muted-foreground leading-relaxed text-base md:text-lg"
      >
        Full-stack web developer experienced with <span className="text-foreground font-medium">Laravel, Vue, and Nuxt</span>.
        I build reliable backend systems, clean APIs, and responsive user interfaces using modern web technologies.
        I take ownership of my work, learn quickly, and adapt easily. Comfortable working in fast-paced environments
        and delivering on time. Motivated to grow and contribute to meaningful projects.
      </motion.p>
    </section>

    {/* Work Experience */}
    <section className="section-padding">
      <SectionTitle
        title="Work Experience"
        accentClass="bg-accent-dev"
        subtitle="Real-world projects shipped to production."
      />
      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-lg bg-card border border-border hover:border-accent-dev/30 transition-all card-hover overflow-hidden"
          >
            <div className="p-6 flex gap-6">
              {/* Left: text content */}
              <div className="flex-1 min-w-0">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="w-4 h-4 text-accent-dev shrink-0" />
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="font-display font-semibold text-foreground text-lg hover:text-accent-dev transition-colors flex items-center gap-1.5"
                      >
                        {project.title}
                        <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                      <span className="px-2 py-0.5 text-xs font-display bg-accent-dev/15 text-accent-dev rounded hidden sm:inline">
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

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.desc}</p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-4">
                  {project.highlights.map((h) => (
                    <li key={h} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-accent-dev mt-1.5 shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-display tracking-wider rounded bg-accent-dev/10 text-accent-dev"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: small thumbnail */}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 w-32 h-24 sm:w-44 sm:h-32 rounded-xl overflow-hidden bg-white/5 border border-border block self-start mt-1 hover:border-accent-dev/40 transition-colors"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground opacity-40 font-display tracking-wider text-center px-2">
                    No image
                  </div>
                )}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Tech Stack */}
    <section className="section-padding">
      <SectionTitle title="Core Skills" accentClass="bg-accent-dev" subtitle="Technologies I work with daily." />
      <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {techStack.map((cat) => (
          <div
            key={cat.category}
            className="p-6 rounded-lg bg-card border border-border hover:border-accent-dev/30 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              <cat.icon className="w-5 h-5 text-accent-dev" />
              <h3 className="text-sm font-display tracking-widest uppercase text-accent-dev">{cat.category}</h3>
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

    {/* Education */}
    <section className="section-padding">
      <SectionTitle title="Education" accentClass="bg-accent-dev" />
      <div className="space-y-5">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree + edu.period}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-lg bg-card border border-border hover:border-accent-dev/30 transition-colors p-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-accent-dev shrink-0" />
                <span className="font-display font-semibold text-foreground">{edu.degree}</span>
              </div>
              <span className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                <CalendarDays className="w-3 h-3" />
                {edu.period}
              </span>
            </div>
            <p className="text-sm text-accent-dev font-medium mb-1">{edu.field}</p>
            <p className="text-sm text-muted-foreground mb-3">{edu.institution}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{edu.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default FullstackDevPage;
