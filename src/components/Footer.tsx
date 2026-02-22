import shameelLogo from "@/assets/شامل.png";

const Footer = () => (
  <footer className="border-t border-border section-padding py-8">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-display tracking-wider">
        © 2026 COLLECTIVE. All rights reserved.
      </p>
      <div className="flex items-center gap-6">
        <img src={shameelLogo} alt="Shameel Logo" className="h-6 opacity-60 hover:opacity-100 transition-opacity" />
      </div>
    </div>
  </footer>
);

export default Footer;
