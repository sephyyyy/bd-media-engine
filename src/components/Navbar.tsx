import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


const navLinks = [
  { label: "Cosa Facciamo", to: "/services" },
  { label: "Chi Siamo", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
];

const dropdownLinks = [
  { label: "Politica della Privacy", to: "/privacy" },
  { label: "Rimborsi", to: "/rimborsi" },
  { label: "Termini e Condizioni", to: "/termini" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.05] bg-[rgba(10,10,10,0.85)] backdrop-blur-[20px]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
          <Link to="/">
            <img src={logoImg} alt="BD Media" className="h-9 w-auto mx-0 my-0 mr-0 ml-px mb-[2px] pr-0 pb-0 pt-0 pl-0" />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm transition-colors hover:text-foreground ${
                  location.pathname === l.to ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}

            {/* Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Pagine
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}>
                  <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-white/[0.06] bg-[#1a1a1a] p-2 shadow-xl">
                  {dropdownLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right */}
          <div className="hidden items-center gap-4 md:flex">
            <span className="text-xs font-medium text-muted-foreground">IT</span>
            <Link to="/services" className="btn-primary text-sm">
              Analisi Gratuita →
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="flex h-10 w-10 items-center justify-center md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-6 bg-foreground transition-all ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-6 bg-foreground transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-6 bg-foreground transition-all ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="absolute right-0 top-0 h-full w-72 bg-[#0e0e12] p-8 pt-24"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              ))}
              <div className="border-t border-white/[0.06] pt-4">
                {dropdownLinks.map((l) => (
                  <Link key={l.to} to={l.to} className="block py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </Link>
                ))}
              </div>
              <Link to="/services" className="btn-primary mt-4 justify-center text-sm">
                Analisi Gratuita →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
