import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Footer from "@/components/Footer";
import { teamMembers } from "@/data/team";
import portraitManager from "@/assets/mohamed.png";
import { Target, Users, TrendingUp, Award, Quote } from "lucide-react";

const member = teamMembers[3];

const projectsLed = [
  { title: "Shameel Platform", company: "Founder", desc: "Building a comprehensive digital ecosystem to empower professional growth and creative production.", metric: "Founder" },
  { title: "USTHB Student Union", company: "Representative", desc: "Representing thousands of students at Houari Boumediene University, driving academic and cultural initiatives.", metric: "Lead Rep" },
  { title: "Noon Academy", company: "Co-Founder", desc: "Co-founded a professional educational academy focused on high-level training and skill development.", metric: "Co-Founder" },
];

const achievements = [
  { title: "Greatest Algiers Quranic Competition", year: "2025", desc: "Organized the largest Quranic competition for students across the capital, involving 1000+ participants." },
  { title: "Institutional Leadership", year: "2024", desc: "Recognized for driving student representation and bridge-building between administration and student body." },
];

const testimonials = [
  { quote: "Diana has an extraordinary ability to align diverse teams around a shared vision. Her leadership transformed our product trajectory.", author: "James K.", role: "CTO, TechCorp" },
  { quote: "Working with Diana is like having a force multiplier on your team. She doesn't just manage — she elevates everyone around her.", author: "Sarah M.", role: "VP Product, ScaleUp Inc." },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

const ManagerPage = () => (
  <div className="min-h-screen bg-background">
    <PageHeader
      name={member.name}
      role={member.role}
      tagline={member.tagline}
      accentColorClass="accent-manager"
      textGradientClass="text-gradient-manager"
      portraitSrc={portraitManager}
    />

    {/* Leadership Philosophy */}
    <section className="section-padding">
      <SectionTitle title="Leadership Philosophy" accentClass="bg-accent-manager" />
      <motion.div {...fadeUp} className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Target, title: "Vision-Driven", desc: "Setting clear, ambitious goals and building the roadmap to achieve them with precision and adaptability." },
          { icon: Users, title: "People-First", desc: "Empowering teams through trust, transparency, and growth opportunities that unlock individual potential." },
          { icon: TrendingUp, title: "Results-Oriented", desc: "Combining strategic thinking with operational excellence to deliver measurable business outcomes." },
        ].map((item) => (
          <div key={item.title} className="p-8 rounded-lg bg-card border border-border hover:border-accent-manager/30 transition-colors">
            <item.icon className="w-8 h-8 text-accent-manager mb-4" />
            <h3 className="font-display font-semibold text-foreground text-lg mb-3">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>

    {/* Projects Led */}
    <section className="section-padding">
      <SectionTitle title="Projects Led" accentClass="bg-accent-manager" subtitle="Strategic initiatives that moved the needle." />
      <div className="space-y-6">
        {projectsLed.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-lg bg-card border border-border hover:border-accent-manager/30 transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-display font-semibold text-foreground text-lg">{project.title}</h3>
                <span className="text-xs font-display tracking-wider text-accent-manager bg-accent-manager/10 px-2 py-1 rounded">{project.company}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
            </div>
            <div className="px-4 py-2 rounded-lg bg-accent-manager/10 border border-accent-manager/20">
              <span className="font-display font-bold text-accent-manager text-lg">{project.metric}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Achievements */}
    <section className="section-padding">
      <SectionTitle title="Achievements" accentClass="bg-accent-manager" />
      <motion.div {...fadeUp} className="grid md:grid-cols-3 gap-6">
        {achievements.map((item) => (
          <div key={item.title} className="p-6 rounded-lg bg-card border border-border hover:border-accent-manager/30 transition-colors">
            <Award className="w-8 h-8 text-accent-manager mb-4" />
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
              <span className="text-xs text-muted-foreground">{item.year}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>

    {/* Testimonials */}


    <Footer />
  </div>
);

export default ManagerPage;
