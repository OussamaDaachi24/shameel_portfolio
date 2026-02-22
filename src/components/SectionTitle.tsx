import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  accentClass?: string;
}

const SectionTitle = ({ title, subtitle, accentClass = "bg-primary" }: SectionTitleProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <div className={`h-1 w-12 ${accentClass} rounded-full mb-6`} />
    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground text-lg max-w-2xl">{subtitle}</p>}
  </motion.div>
);

export default SectionTitle;
