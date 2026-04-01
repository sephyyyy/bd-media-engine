import ScrollReveal from "@/components/ScrollReveal";
import MarqueeStrip from "@/components/MarqueeStrip";
import KPIDashboard from "@/components/KPIDashboard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { useContactModal } from "@/components/ContactModalContext";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const Index = () => {
  const { open: openContactModal } = useContactModal();
  const { t } = useLanguage();
  const H = translations.home;

  const steps = [
    { num: "01", title: t(H.method.step1_title), desc: t(H.method.step1_body) },
    { num: "02", title: t(H.method.step2_title), desc: t(H.method.step2_body) },
    { num: "03", title: t(H.method.step3_title), desc: t(H.method.step3_body) },
  ];

  const caseMetrics = [
    { value: t(H.casestudy.metric1_value), label: t(H.casestudy.metric1_label) },
    { value: t(H.casestudy.metric2_value), label: t(H.casestudy.metric2_label) },
    { value: t(H.casestudy.metric3_value), label: t(H.casestudy.metric3_label) },
    { value: t(H.casestudy.metric4_value), label: t(H.casestudy.metric4_label) },
    { value: t(H.casestudy.metric5_value), label: t(H.casestudy.metric5_label) },
    { value: t(H.casestudy.metric6_value), label: t(H.casestudy.metric6_label) },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-end overflow-hidden px-6 pb-16 pt-24 md:px-12 lg:px-20">
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none text-[30vw] font-extrabold leading-none text-white/[0.02]">
          BD
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <ScrollReveal>
            <div className="eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              {t(H.hero.eyebrow)}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="heading-hero max-w-4xl">
              {t(H.hero.h1_line1)}<br />
              <span className="text-primary">{t(H.hero.h1_line2)}</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 text-lg font-light text-muted-foreground">{t(H.hero.tagline)}</p>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">{t(H.hero.body)}</p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <button onClick={openContactModal} className="btn-primary">{t(H.hero.cta_primary)}</button>
              <a href="#case-study" className="text-sm text-muted-foreground underline decoration-white/20 underline-offset-4 transition-colors hover:text-foreground">
                {t(H.hero.cta_secondary)}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <MarqueeStrip />

      {/* Stats / KPI Dashboard */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{t(H.stats.title)}</h2>
            <p className="mt-2 text-muted-foreground">{t(H.stats.subtitle)}</p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <KPIDashboard />
          </ScrollReveal>
        </div>
      </section>

      {/* Metodo BD */}
      <section className="section-padding bg-surface-1">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{t(H.method.title)}</h2>
            <p className="mt-2 text-muted-foreground">{t(H.method.subtitle)}</p>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground">{t(H.method.intro)}</p>
          </ScrollReveal>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="card-surface relative overflow-hidden">
                  <span className="absolute -right-2 -top-4 text-8xl font-extrabold text-primary/10">{s.num}</span>
                  <div className="relative z-10">
                    <span className="text-sm font-bold text-primary">{s.num}</span>
                    <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="section-padding">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <span className="tag-pill mb-4 inline-block">{t(H.casestudy.category)}</span>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{t(H.casestudy.label)}</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-10 card-surface">
              <h3 className="text-2xl font-extrabold">{t(H.casestudy.client)}</h3>
              <p className="mt-1 text-lg font-semibold text-primary">{t(H.casestudy.headline)}</p>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{t(H.casestudy.body)}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {caseMetrics.map((m, i) => (
                  <div key={i} className="rounded-lg bg-white/[0.03] p-5">
                    <div className="text-3xl font-extrabold">{m.value}</div>
                    <p className="mt-2 text-xs text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-3 rounded-lg bg-white/[0.03] p-5 text-sm">
                <div className="flex flex-wrap gap-x-8 gap-y-1">
                  <span className="text-muted-foreground">{t(H.casestudy.chart_leads_title)} — {t(H.casestudy.chart_before_label)}:</span>
                  <span className="font-semibold">7,4/mese</span>
                  <span className="text-primary">→</span>
                  <span className="text-muted-foreground">{t(H.casestudy.chart_after_label)}:</span>
                  <span className="font-semibold">85,8/mese</span>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-1">
                  <span className="text-muted-foreground">{t(H.casestudy.chart_cpl_title)} — {t(H.casestudy.chart_before_label)}:</span>
                  <span className="font-semibold">€15,46/lead</span>
                  <span className="text-primary">→</span>
                  <span className="text-muted-foreground">{t(H.casestudy.chart_after_label)}:</span>
                  <span className="font-semibold">€6,30/lead</span>
                </div>
                <div>
                  <span className="text-muted-foreground">{t(H.casestudy.chart_conv_title)}: </span>
                  <span className="font-semibold text-primary">17,16x</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-surface-1">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{t(H.testimonials.title)}</h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="mt-12">
              <TestimonialCarousel />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{t(H.cta_final.headline)}</h2>
            <button onClick={openContactModal} className="btn-primary mt-8 inline-flex">{t(H.cta_final.button)}</button>
          </ScrollReveal>
        </div>
      </section>

      {/* Contacts */}
      <section className="section-padding bg-surface-1">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{t((H as any).contacts.title)}</h2>
            <p className="mt-2 text-muted-foreground">{t((H as any).contacts.subtitle)}</p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <a href="mailto:bdmedia.main@gmail.com" className="card-surface flex items-center gap-4 transition-colors hover:border-primary/30">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/[0.06] text-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t((H as any).contacts.email_label)}</p>
                  <p className="text-sm font-semibold">bdmedia.main@gmail.com</p>
                </div>
              </a>
              <a href="tel:+393382862017" className="card-surface flex items-center gap-4 transition-colors hover:border-primary/30">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/[0.06] text-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t((H as any).contacts.phone_label)}</p>
                  <p className="text-sm font-semibold">+39 338 286 2017</p>
                </div>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
