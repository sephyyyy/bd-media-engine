import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const blogCategories = ["Tutti", "Digital Marketing", "SEO", "Advertising", "Social Media", "News"];

const featured = {
  category: "AI",
  title: "Come l'AI sta ridisegnando le strategie di digital marketing nel 2025",
  excerpt: "Dal content automatizzato agli algoritmi predittivi: scopri come i brand più intelligenti stanno integrando l'intelligenza artificiale per abbattere i costi e triplicare le conversioni. Un'analisi completa con dati reali dai nostri clienti.",
  meta: "BD Team • BD Media • 12 Marzo 2025 • 8 min di lettura",
};

const articles = [
  { cat: "SEO", title: "SEO Google SGE e il futuro della SEO: cosa cambia per chi fa content marketing nel 2025", date: "5 Febbraio 2025", time: "6 min" },
  { cat: "Advertising", title: "Meta Ads 2025: le campagne che funzionano adesso", date: "20 Gennaio 2025", time: "5 min" },
  { cat: "Social Media", title: "TikTok per i brand B2B: mito o opportunità concreta?", date: "8 Gennaio 2025", time: "4 min" },
  { cat: "Digital Marketing", title: "Conversion Rate Optimization: 7 test A/B che hanno cambiato tutto", date: "15 Dicembre 2024", time: "7 min" },
  { cat: "News", title: "Case Study: come abbiamo scalato un e-commerce da 0 a 400k/mese", date: "1 Dicembre 2024", time: "10 min" },
  { cat: "SEO", title: "Link building nel 2025: cosa funziona ancora e cosa evitare", date: "18 Novembre 2024", time: "5 min" },
  { cat: "Advertising", title: "Google Ads Performance Max nel 2025: guida avanzata", date: "3 Novembre 2024", time: "9 min" },
  { cat: "News", title: "BD Media è ufficialmente certificata Meta Business Partner", date: "20 Ottobre 2024", time: "3 min" },
];

const catColors: Record<string, string> = {
  SEO: "border-emerald-500/30 text-emerald-400",
  Advertising: "border-amber-500/30 text-amber-400",
  "Social Media": "border-sky-500/30 text-sky-400",
  "Digital Marketing": "border-violet-500/30 text-violet-400",
  News: "border-primary/30 text-primary",
  AI: "border-primary/30 text-primary",
};

const Blog = () => {
  const [filter, setFilter] = useState("Tutti");

  const filtered = filter === "Tutti" ? articles : articles.filter((a) => a.cat === filter);

  return (
    <div>
      <section className="section-padding pt-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="eyebrow mb-4 flex items-center gap-3"><span className="h-px w-8 bg-primary" />BLOG</div>
            <h1 className="heading-hero max-w-4xl">Insights & News — Il nostro Blog.</h1>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">
              Strategie, aggiornamenti dal settore e casi studio dal team BD Media. Tutto quello che devi sapere per crescere online.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <span><strong className="text-foreground">48+</strong> <span className="text-muted-foreground">Articoli pubblicati</span></span>
              <span><strong className="text-foreground">5</strong> <span className="text-muted-foreground">Categorie</span></span>
              <span><strong className="text-foreground">2×</strong> <span className="text-muted-foreground">Aggiornamenti/mese</span></span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured */}
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="card-surface border-primary/20">
              <span className={`inline-block rounded-full border px-3 py-1 text-[11px] font-medium ${catColors[featured.category]}`}>{featured.category}</span>
              <h2 className="mt-4 text-2xl font-extrabold leading-tight md:text-3xl">{featured.title}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              <p className="mt-4 text-xs text-muted-foreground">{featured.meta}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-10 flex flex-wrap gap-2">
              {blogCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-pill px-5 py-2 text-sm font-medium transition-all ${
                    filter === c ? "bg-primary text-primary-foreground" : "border border-white/[0.06] text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="card-surface flex h-full cursor-pointer flex-col transition-colors hover:border-white/[0.12]">
                  <span className={`inline-block self-start rounded-full border px-3 py-1 text-[10px] font-medium ${catColors[a.cat] || "border-white/10 text-muted-foreground"}`}>{a.cat}</span>
                  <h3 className="mt-4 flex-1 text-base font-bold leading-snug">{a.title}</h3>
                  <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{a.date}</span>
                    <span>·</span>
                    <span>{a.time}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
            <div className="card-surface border-primary/20 text-center">
              <h3 className="text-xl font-bold">Ricevi i migliori insights direttamente nella tua inbox.</h3>
              <p className="mt-2 text-sm text-muted-foreground">Niente spam. Solo aggiornamenti di valore.</p>
              <div className="mt-6 flex gap-3">
                <input
                  type="email"
                  placeholder="La tua email"
                  className="flex-1 rounded-pill border border-white/[0.06] bg-white/[0.03] px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
                />
                <button className="btn-primary whitespace-nowrap">Iscriviti →</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Blog;
