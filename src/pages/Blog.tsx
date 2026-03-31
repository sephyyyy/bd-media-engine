import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const catColors: Record<string, string> = {
  SEO: "border-emerald-500/30 text-emerald-400",
  Advertising: "border-amber-500/30 text-amber-400",
  "Social Media": "border-sky-500/30 text-sky-400",
  "Digital Marketing": "border-violet-500/30 text-violet-400",
  News: "border-primary/30 text-primary",
  AI: "border-primary/30 text-primary",
};

const Blog = () => {
  const [filter, setFilter] = useState("all");
  const { t } = useLanguage();
  const B = translations.blog;

  const blogCategories = [
    { key: "all", label: t(B.filters.all) },
    { key: "Digital Marketing", label: t(B.filters.digital) },
    { key: "SEO", label: t(B.filters.seo) },
    { key: "Advertising", label: t(B.filters.adv) },
    { key: "Social Media", label: t(B.filters.social) },
    { key: "News", label: t(B.filters.news) },
  ];

  const articles = [
    { cat: "SEO", title: t(B.a2_title), date: "5 Febbraio 2025", time: "6 min" },
    { cat: "Advertising", title: t(B.a3_title), date: "20 Gennaio 2025", time: "5 min" },
    { cat: "Social Media", title: t(B.a4_title), date: "8 Gennaio 2025", time: "4 min" },
    { cat: "Digital Marketing", title: t(B.a5_title), date: "15 Dicembre 2024", time: "7 min" },
    { cat: "News", title: t(B.a6_title), date: "1 Dicembre 2024", time: "10 min" },
    { cat: "SEO", title: t(B.a7_title), date: "18 Novembre 2024", time: "5 min" },
    { cat: "Advertising", title: t(B.a8_title), date: "3 Novembre 2024", time: "9 min" },
    { cat: "News", title: t(B.a9_title), date: "20 Ottobre 2024", time: "3 min" },
  ];

  const filtered = filter === "all" ? articles : articles.filter((a) => a.cat === filter);

  return (
    <div>
      <section className="section-padding pt-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="eyebrow mb-4 flex items-center gap-3"><span className="h-px w-8 bg-primary" />{t(B.hero.eyebrow)}</div>
            <h1 className="heading-hero max-w-4xl">{t(B.hero.h1)}. <span className="text-primary">{t(B.hero.subtitle)}</span></h1>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">{t(B.hero.body)}</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <span><strong className="text-foreground">{t(B.hero.stat1_value)}</strong> <span className="text-muted-foreground">{t(B.hero.stat1_label)}</span></span>
              <span><strong className="text-foreground">{t(B.hero.stat2_value)}</strong> <span className="text-muted-foreground">{t(B.hero.stat2_label)}</span></span>
              <span><strong className="text-foreground">{t(B.hero.stat3_value)}</strong> <span className="text-muted-foreground">{t(B.hero.stat3_label)}</span></span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured */}
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="card-surface border-primary/20">
              <span className={`inline-block rounded-full border px-3 py-1 text-[11px] font-medium ${catColors["AI"]}`}>AI</span>
              <h2 className="mt-4 text-2xl font-extrabold leading-tight md:text-3xl">{t(B.a1_title)}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{t(B.a1_excerpt)}</p>
              <p className="mt-4 text-xs text-muted-foreground">BD Team • BD Media • 12 Marzo 2025 • 8 {t(B.read_time)}</p>
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
                  key={c.key}
                  onClick={() => setFilter(c.key)}
                  className={`rounded-pill px-5 py-2 text-sm font-medium transition-all ${
                    filter === c.key ? "bg-primary text-primary-foreground" : "border border-white/[0.06] text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c.label}
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
              <h3 className="text-xl font-bold">{t(B.newsletter.body)}</h3>
              <div className="mt-6 flex gap-3">
                <input
                  type="email"
                  placeholder={t(B.newsletter.placeholder)}
                  className="flex-1 rounded-pill border border-white/[0.06] bg-white/[0.03] px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
                />
                <button className="btn-primary whitespace-nowrap">{t(B.newsletter.button)}</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Blog;
