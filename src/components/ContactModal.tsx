import { useState, useEffect, useRef } from "react";
import { useContactModal } from "./ContactModalContext";
import { X } from "lucide-react";

const topics = [
  "Campagne pubblicitarie (Meta, Google, TikTok)",
  "Sito web e landing page",
  "Social media management",
  "Brand identity",
  "Email marketing e automazioni",
  "AI marketing",
  "Altro",
];

const ContactModal = () => {
  const { isOpen, close } = useContactModal();
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // trigger enter animation
      requestAnimationFrame(() => {
        setVisible(true);
      });
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setVisible(false);
    setAnimating(true);
    setTimeout(() => {
      close();
      setSubmitted(false);
      setAnimating(false);
    }, 150);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen && !animating) return null;

  const inputClass =
    "w-full rounded-lg border border-white/[0.08] bg-[#1a1a1a] px-4 py-3.5 text-sm text-foreground placeholder:text-[#555] focus:border-primary focus:outline-none transition-colors";
  const labelClass =
    "mb-1.5 block text-xs font-medium uppercase tracking-[1px] text-muted-foreground";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center sm:items-center"
      style={{
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(12px)",
        opacity: visible ? 1 : 0,
        transition: "opacity 200ms ease-out",
      }}
      onClick={handleClose}
    >
      {/* Mobile: bottom-sheet. Desktop: centered card */}
      <div
        ref={cardRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[560px] sm:w-[90%] sm:rounded-2xl rounded-t-2xl sm:rounded-b-2xl rounded-b-none fixed bottom-0 sm:static sm:bottom-auto"
        style={{
          background: "#111114",
          border: "1px solid rgba(255,255,255,0.08)",
          transform: visible ? "scale(1) translateY(0)" : "scale(0.96) translateY(16px)",
          opacity: visible ? 1 : 0,
          transition: "transform 200ms ease-out, opacity 200ms ease-out",
        }}
      >
        <div className="relative max-h-[90vh] overflow-y-auto p-6 sm:p-8">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Chiudi"
          >
            <X className="h-5 w-5" />
          </button>

          {submitted ? (
            <div className="flex min-h-[200px] flex-col items-center justify-center text-center">
              <p className="text-lg font-bold text-primary">
                ✦ Richiesta inviata.
              </p>
              <p className="mt-2 text-sm text-primary">
                Ti contatteremo entro 24 ore.
              </p>
            </div>
          ) : (
            <>
              {/* Eyebrow */}
              <div className="eyebrow mb-3 flex items-center gap-3">
                <span className="h-px w-6 bg-primary" />
                ANALISI GRATUITA
              </div>

              <h2
                className="text-[28px] font-extrabold leading-tight text-foreground"
                style={{ letterSpacing: "-1px" }}
              >
                Parliamo del tuo progetto.
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Compila il form. Ti ricontattiamo entro 24 ore.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* Nome / Cognome */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>Nome</label>
                    <input
                      type="text"
                      required
                      placeholder="Il tuo nome"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Cognome</label>
                    <input
                      type="text"
                      required
                      placeholder="Il tuo cognome"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Telefono */}
                <div>
                  <label className={labelClass}>Telefono</label>
                  <input
                    type="tel"
                    required
                    placeholder="+39 000 000 0000"
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className={inputClass}
                  />
                </div>

                {/* Select */}
                <div>
                  <label className={labelClass}>Di cosa vuoi parlare?</label>
                  <select required defaultValue="" className={`${inputClass} appearance-none`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 5L6 8L9 5' stroke='%23888' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 16px center",
                    }}
                  >
                    <option value="" disabled>
                      Seleziona un argomento
                    </option>
                    {topics.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary w-full justify-center py-4 text-[15px]"
                >
                  Invia la richiesta →
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
