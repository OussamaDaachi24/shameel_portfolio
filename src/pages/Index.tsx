import { motion } from "framer-motion";
import TeamCard from "@/components/TeamCard";
import SectionTitle from "@/components/SectionTitle";
import Footer from "@/components/Footer";
import { teamMembers } from "@/data/team";
import {
  Code2,
  Server,
  Palette,
  Search,
  TrendingUp,
  Lightbulb,
  BrainCircuit,
  PenTool,
  Gem,
  GitBranch,
  Film,
} from "lucide-react";

/* ─── shared animation preset ─── */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

/* ─── data ─── */
const services = [
  {
    title: "Digital Product Engineering",
    icon: Code2,
    items: [
      { label: "Custom Web Applications", desc: "SaaS platforms, enterprise systems, and API-driven applications" },
      { label: "AI Integration", desc: "AI agents, business-process automation, ML models, and LLM orchestration" },
      { label: "UX/UI Product Design", desc: "Research-driven strategy, interface design, and interaction systems" },
    ],
  },
  {
    title: "Creative Production",
    icon: Film,
    items: [
      { label: "Brand Identity & Visual Systems", desc: "Strategy, positioning, logo design, and brand guidelines" },
      { label: "Social Media & Campaign Design", desc: "Visual content, campaign creative, and digital advertising" },
      { label: "Motion Graphics & Video", desc: "Post-production, motion design, and promotional videos" },
      { label: "Conversion-Focused Assets", desc: "Landing pages, product presentations, and advertising visuals" },
    ],
  },
];

const process = [
  { step: "Discovery", icon: Search, desc: "Understand goals, users, and market landscape" },
  { step: "Design", icon: Palette, desc: "Craft UX/UI, brand systems, and prototypes" },
  { step: "Build", icon: Code2, desc: "Engineer robust, scalable digital products" },
  { step: "Scale", icon: TrendingUp, desc: "Optimize, automate, and accelerate growth" },
];

const values = [
  { title: "Product Thinking", icon: Lightbulb, desc: "Strategy-first approach — not just code delivery." },
  { title: "Applied AI", icon: BrainCircuit, desc: "Real AI solutions integrated into your workflow." },
  { title: "Design-Led Engineering", icon: PenTool, desc: "Beautiful, functional products built to last." },
  { title: "Studio Craft", icon: Gem, desc: "Depth and quality over mass outsourcing." },
];

const techGroups = [
  { category: "Engineering", icon: Server, items: ["Vue.js", "Nuxt.js", "Laravel", "PHP", "MySQL", "REST API"] },
  { category: "AI & Automation", icon: BrainCircuit, items: ["LLMs", "Workflow Orchestration", "Automation Platforms", "ML Integration"] },
  { category: "Design & Creative", icon: Palette, items: ["Figma", "Photoshop", "Illustrator", "After Effects"] },
  { category: "Collaboration", icon: GitBranch, items: ["Git", "CI/CD", "GitHub Actions", "Project Management"] },
];

/* ─── component ─── */
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* ═══════════════════ Hero ═══════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center section-padding overflow-hidden">
        {/* Grid pattern bg */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-sm font-display tracking-[0.3em] uppercase text-muted-foreground">
              Creative Technology Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-display font-bold leading-[0.95] tracking-tight text-foreground"
          >
            Building intelligent
            <br />
            digital products &amp;
            <br />
            <span className="text-gradient-gold">brand experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            We help companies design, build, and scale intelligent digital
            products by combining product engineering, AI integration, and
            creative production.
          </motion.p>



          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 h-[1px] w-24 bg-primary"
          />
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-display tracking-[0.2em] uppercase text-muted-foreground">
            Meet the team
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent"
          />
        </motion.div>
      </section>

      {/* ═══════════════════ What We Do ═══════════════════ */}
      <section className="section-padding">
        <SectionTitle
          title="What We Do"
          subtitle="Software engineering, AI, and creative production — under one roof."
          accentClass="bg-primary"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-lg bg-card border border-border hover:border-primary/30 transition-colors p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <svc.icon className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-display font-semibold text-foreground tracking-wide">
                  {svc.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {svc.items.map((item) => (
                  <li key={item.label}>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ How We Work ═══════════════════ */}
      <section className="section-padding">
        <SectionTitle
          title="How We Work"
          subtitle="A clear, outcome-driven process from concept to scale."
          accentClass="bg-primary"
        />

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-[1px] bg-border" />

          {process.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-card border border-border mb-5">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-display font-semibold tracking-widest uppercase text-foreground mb-2">
                {step.step}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ Why Choose Us ═══════════════════ */}
      <section className="section-padding">
        <SectionTitle
          title="Why Choose Us"
          subtitle="Product thinking, applied AI, and studio-level craft."
          accentClass="bg-primary"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-lg bg-card border border-border hover:border-primary/30 transition-colors p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <val.icon className="w-5 h-5 text-primary" />
                <h3 className="font-display font-semibold text-foreground">{val.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ Technology & Capabilities ═══════════════════ */}
      <section className="section-padding">
        <SectionTitle
          title="Technology & Capabilities"
          subtitle="The tools and platforms we build with."
          accentClass="bg-primary"
        />

        <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techGroups.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <cat.icon className="w-5 h-5 text-primary" />
                <h3 className="text-sm font-display tracking-widest uppercase text-primary">{cat.category}</h3>
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

      {/* ═══════════════════ Team Grid ═══════════════════ */}
      <section className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-display tracking-[0.3em] uppercase text-muted-foreground">
            The Team
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-foreground">
            Four minds. Infinite possibilities.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
