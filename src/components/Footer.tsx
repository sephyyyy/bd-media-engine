import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-white/[0.06] bg-background px-6 py-16 md:px-12 lg:px-20">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Link to="/" className="text-[22px] font-extrabold tracking-tight">
            BD<span className="text-primary">·</span>MEDIA
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">Growth Partner</p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <Link to="/privacy" className="transition-colors hover:text-foreground">Privacy Policy</Link>
          <Link to="/termini" className="transition-colors hover:text-foreground">Termini & Condizioni</Link>
          <Link to="/rimborsi" className="transition-colors hover:text-foreground">Rimborsi</Link>
        </div>

        <div className="flex gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.06] text-muted-foreground transition-colors hover:border-primary hover:text-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.06] text-muted-foreground transition-colors hover:border-primary hover:text-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>

      <div className="mt-12 border-t border-white/[0.06] pt-6 text-center text-xs text-muted-foreground">
        © 2026 BD Media. Tutti i diritti riservati.
      </div>
    </div>
  </footer>
);

export default Footer;
