import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useContactModal } from "@/components/ContactModalContext";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const { open: openContactModal } = useContactModal();
  const { t } = useLanguage();
  const P = translations.portfolio;

  const categories = [
    { key: "all", label: t(P.filters.all) },
    { key: "Ristorazione", label: t(P.filters.ristorazione) },
    { key: "Brand Identity", label: t(P.filters.brand) },
    { key: "Digital", label: t(P.filters.digital) },
    { key: "Community", label: t(P.filters.community) },
  ];

  const projects = [
    { sig: "DDC", cat: "Ristorazione", client: "Dark Diamond Cafè", headline: t(P.p1_headline), desc: t(P.p1_body), tags: ["Brand Identity", "Meta Ads", "Lead Gen"] },
    { sig: "AS", cat: "Digital", client: "AEON Studio", headline: t(P.p2_headline), desc: t(P.p2_body), tags: ["Social Media", "Ads", "Crescita"] },
    { sig: "LoS", cat: "Digital", client: "Lab On Sense", headline: t(P.p3_headline), desc: t(P.p3_body), tags: ["Sito Web", "Brand Identity", "UX"] },
    { sig: "AR", cat: "Community", client: "Arkes Roleplay", headline: t(P.p4_headline), desc: t(P.p4_body), tags: ["Community Management", "Discord"] },
    { sig: "TD", cat: "Brand Identity", client: "TDSTUDIO", headline: t(P.p5_headline), desc: t(P.p5_body), tags: ["Branding", "Social", "Positioning"] },
    { sig: "CaT", cat: "Ristorazione", client: "Caffè al Teatro", headline: t(P.p6_headline), desc: t(P.p6_body), tags: ["Social Media", "Brand", "Local"] },
    { sig: "TI+", cat: "Digital", client: "TecIA+", headline: t(P.p7_headline), desc: t(P.p7_body), tags: ["AI", "Launch", "Digital"] },
    { sig: "KP", cat: "Digital", client: "KP Management", headline: t(P.p8_headline), desc: t(P.p8_body), tags: ["Strategia", "Comunicazione", "B2B"] },
    { sig: "AE", cat: "Digital", client: "Accademia Europea", headline: t(P.p9_headline), desc: t(P.p9_body), tags: ["Education", "Lead Gen", "Funnel"] },
  ];

  const statsStrip = [
    { value: t(P.stats.s1_value), label: t(P.stats.s1_label) },
    { value: t(P.stats.s2_value), label: t(P.stats.s2_label) },
    { value: t(P.stats.s3_value), label: t(P.stats.s3_label) },
    { value: t(P.stats.s4_value), label: t(P.stats.s4_label) },
  ];

  const filtered = filter === "all" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <div>
      <section className="section-padding pt-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="eyebrow mb-4 flex items-center gap-3"><span className="h-px w-8 bg-primary" />{t(P.hero.eyebrow)}</div>
            <h1 className="heading-hero max-w-3xl">{t(P.hero.h1)}</h1>
            <p className="mt-4 text-lg font-light text-muted-foreground">{t(P.hero.subtitle)}</p>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">{t(P.hero.body)}</p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="mt-10 flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setFilter(c.key)}
                  className={`rounded-pill px-5 py-2 text-sm font-medium transition-all ${
                    filter === c.key
                      ? "bg-primary text-primary-foreground"
                      : "border border-white/[0.06] text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c.label}
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">{p.sig}</div>
                </div>
                <h3 className="mt-4 text-lg font-bold">{p.client}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{p.headline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => <span key={tag} className="tag-pill text-[10px]">{tag}</span>)}
                </div>
                <div className="mt-4">
                  <span className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer">{t(P.view_project)}</span>
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
            <h2 className="text-3xl font-extrabold tracking-tight">{t(P.cta_headline)}</h2>
            <button onClick={openContactModal} className="btn-primary mt-8 inline-flex">{t(P.cta_button)}</button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
