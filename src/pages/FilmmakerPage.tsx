import { useState } from "react";
import { motion, AnimatePresence as FramerAnimatePresence } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Footer from "@/components/Footer";
import { teamMembers } from "@/data/team";
import portraitFilm from "@/assets/sifou.jpeg";
import { Play, Film, Camera, Clapperboard, ChevronLeft, ChevronRight } from "lucide-react";
import { filmmakerProjects, FilmmakerProject } from "@/data/filmmaker-projects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const member = teamMembers[2];

const btsItems = [
  { title: "On-Set Direction", desc: "Managing crews of 20+ across multi-day shoots with complex logistics." },
  { title: "Color Grading", desc: "Custom color science pipelines using DaVinci Resolve for cinematic looks." },
  { title: "VFX Integration", desc: "Seamless compositing of practical and digital effects for narrative impact." },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

const ITEMS_PER_PAGE = 6;

const FilmmakerPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<FilmmakerProject | null>(null);

  const totalPages = Math.ceil(filmmakerProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = filmmakerProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        name={member.name}
        role={member.role}
        tagline={member.tagline}
        accentColorClass="accent-film"
        textGradientClass="text-gradient-film"
        portraitSrc={portraitFilm}
      />

      {/* Professional Info & About */}
      <section className="section-padding py-12 bg-secondary/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          <motion.div {...fadeUp} className="md:col-span-2">
            <h2 className="text-sm font-display tracking-widest uppercase text-accent-film mb-4">About Me</h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Passionate about capturing emotions and telling stories through visuals.
              With a background in <span className="text-foreground font-medium">OPV</span> and years of experience
              in filmmaking and videography, I create impactful content that blends cinematic style with raw authenticity.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-foreground font-medium whitespace-nowrap">Available Fulltime</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Camera className="w-4 h-4" />
                <span className="text-sm">Alphaprod</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Film className="w-4 h-4" />
                <span className="text-sm">Algeria</span>
              </div>
              <div className="pt-4 border-t border-border flex justify-between text-xs tracking-widest uppercase text-muted-foreground">
                <span>Member Since</span>
                <span className="text-foreground font-medium">April 15, 2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding">
        <SectionTitle title="Projects" accentClass="bg-accent-film" subtitle="Selected works across film, documentary, and commercial." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <FramerAnimatePresence mode="popLayout">
            {currentProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group rounded-lg overflow-hidden bg-card border border-border hover:border-accent-film/30 transition-all card-hover cursor-pointer"
              >
                <div className="aspect-video bg-secondary relative flex items-center justify-center overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-60 transition-opacity" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2 py-1 text-[10px] font-display bg-accent-film/20 text-accent-film rounded uppercase tracking-wider">{project.type}</span>
                    <span className="px-2 py-1 text-[10px] font-display bg-secondary/80 text-muted-foreground rounded">{project.year}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-accent-film/40 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-foreground text-base mb-2 group-hover:text-accent-film transition-colors">{project.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </FramerAnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }).map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    onClick={() => setCurrentPage(i + 1)}
                    isActive={currentPage === i + 1}
                    className="cursor-pointer"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </section>

      {/* Behind the Scenes */}
      <section className="section-padding">
        <SectionTitle title="Behind the Scenes" accentClass="bg-accent-film" subtitle="The craft behind the camera." />
        <motion.div {...fadeUp} className="grid md:grid-cols-3 gap-6">
          {btsItems.map((item, i) => {
            const Icon = [Camera, Clapperboard, Film][i];
            return (
              <div key={item.title} className="p-6 rounded-lg bg-card border border-border hover:border-accent-film/30 transition-colors">
                <Icon className="w-8 h-8 text-accent-film mb-4" />
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </motion.div>
      </section>

      {/* Video Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 overflow-hidden bg-background border-border">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl font-display">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full bg-black mt-4">
            {selectedProject?.videoUrl ? (
              <iframe
                src={selectedProject.videoUrl}
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                title={selectedProject.title}
              ></iframe>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <Film className="w-12 h-12 mb-4 opacity-20" />
                <p>Video content coming soon</p>
              </div>
            )}
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2 py-1 text-xs font-display bg-accent-film/20 text-accent-film rounded uppercase tracking-wider">{selectedProject?.type}</span>
              <span className="px-2 py-1 text-xs font-display bg-secondary text-muted-foreground rounded">{selectedProject?.year}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">{selectedProject?.desc}</p>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default FilmmakerPage;
