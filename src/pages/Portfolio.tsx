import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useContactModal } from "@/components/ContactModalContext";

const categories = ["Tutti", "Ristorazione", "Brand Identity", "Digital", "Community"];

const projects = [
  { sig: "DDC", cat: "Ristorazione", client: "Dark Diamond Cafè", headline: "Rebranding completo e sistema di acquisizione clienti", desc: "Da 0 a 340 prenotazioni in 90 giorni. Campagne Meta Ads, nuova identità visiva e funnel di prenotazione ottimizzato.", tags: ["Brand Identity", "Meta Ads", "Lead Gen"] },
  { sig: "AS", cat: "Digital", client: "AEON Studio", headline: "Crescita visibilità online e acquisizione nuovi clienti", desc: "Sistema di marketing integrato con social media management e campagne ads.", tags: ["Social Media", "Ads", "Crescita"] },
  { sig: "LoS", cat: "Digital", client: "Lab On Sense", headline: "Realizzazione sito web con identità digitale coerente", desc: "Design che interpreta l'essenza del progetto con approccio creativo e collaborativo.", tags: ["Sito Web", "Brand Identity", "UX"] },
  { sig: "AR", cat: "Community", client: "Arkes Roleplay", headline: "Riorganizzazione e gestione professionale della community", desc: "Portato qualità, ordine e struttura a un progetto in forte crescita nel settore roleplay.", tags: ["Community Management", "Discord"] },
  { sig: "TD", cat: "Brand Identity", client: "TDSTUDIO", headline: "Presenza digitale e posizionamento del brand", desc: "Comunicazione visiva coerente con l'identità creativa del progetto.", tags: ["Branding", "Social", "Positioning"] },
  { sig: "CaT", cat: "Ristorazione", client: "Caffè al Teatro", headline: "Cura dell'immagine online e comunicazione professionale", desc: "Il locale comunica ora la qualità che offre ogni sera.", tags: ["Social Media", "Brand", "Local"] },
  { sig: "TI+", cat: "Digital", client: "TecIA+", headline: "Lancio e posizionamento nel settore AI", desc: "Comunicazione digitale e strategia di acquisizione per una realtà tech in fase di crescita.", tags: ["AI", "Launch", "Digital"] },
  { sig: "KP", cat: "Digital", client: "KP Management", headline: "Strategia di comunicazione e presenza digitale", desc: "Posizionamento professionale e acquisizione nuovi clienti.", tags: ["Strategia", "Comunicazione", "B2B"] },
  { sig: "AE", cat: "Digital", client: "Accademia Europea", headline: "Strategia digitale e sistema di acquisizione studenti", desc: "Campagne ads e funnel di iscrizione ottimizzati.", tags: ["Education", "Lead Gen", "Funnel"] },
];

const statsStrip = [
  { value: "9+", label: "Clienti attivi nel portfolio" },
  { value: "5+", label: "Settori verticali coperti" },
  { value: "2K+", label: "Lead generati complessivi" },
  { value: "12 mo", label: "Da 0 a portfolio completo" },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("Tutti");
  const { open: openContactModal } = useContactModal();

  const filtered = filter === "Tutti" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <div>
      <section className="section-padding pt-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="eyebrow mb-4 flex items-center gap-3"><span className="h-px w-8 bg-primary" />PORTFOLIO</div>
            <h1 className="heading-hero max-w-3xl">Portfolio</h1>
            <p className="mt-4 text-lg font-light text-muted-foreground">Ogni progetto nasce da un obiettivo chiaro. Risultati misurabili.</p>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">
              Non realizziamo lavori isolati, ma sistemi pensati per crescere nel tempo, adattati al contesto e agli obiettivi di ogni cliente.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="mt-10 flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-pill px-5 py-2 text-sm font-medium transition-all ${
                    filter === c
                      ? "bg-primary text-primary-foreground"
                      : "border border-white/[0.06] text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="mx-auto max-w-7xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ScrollReveal key={p.sig} delay={i * 60}>
              <div className="card-surface flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <span className="tag-pill text-[10px]">{p.cat}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {p.sig}
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-bold">{p.client}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{p.headline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => <span key={t} className="tag-pill text-[10px]">{t}</span>)}
                </div>
                <div className="mt-4">
                  <span className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer">Vedi progetto →</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-surface-1 px-6 py-12 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {statsStrip.map((s, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="text-center">
                <div className="text-3xl font-extrabold">{s.value}</div>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold tracking-tight">Il tuo progetto potrebbe essere il prossimo.</h2>
            <button onClick={useContactModal().open} className="btn-primary mt-8 inline-flex">Parliamo del tuo obiettivo →</button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
