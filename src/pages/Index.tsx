import ScrollReveal from "@/components/ScrollReveal";
import MarqueeStrip from "@/components/MarqueeStrip";
import { Link } from "react-router-dom";

const stats = [
  { value: "2K+", label: "Lead qualificati generati in meno di 12 mesi di attività" },
  { value: "1M+", label: "Valore totale dei progetti attivi gestiti per i clienti" },
  { value: "9/10", label: "Clienti che rinnovano la collaborazione dopo il primo trimestre" },
];

const steps = [
  { num: "01", title: "Analisi", desc: "Radiografiamo il tuo marketing attuale. Identifichiamo esattamente dove stai perdendo contatti e budget, prima di toccare qualsiasi cosa." },
  { num: "02", title: "Attivazione", desc: "Costruiamo il sistema di acquisizione: campagne Meta Ads, funnel, landing page e automazioni. Tutto tracciato e ottimizzato settimana per settimana." },
  { num: "03", title: "Scala", desc: "Una volta che il sistema funziona, lo scaliamo. Aumentiamo il budget solo dove i dati ci dicono che ha senso farlo. Zero sprechi." },
];

const caseMetrics = [
  { value: "340", label: "Prenotazioni generate nei primi 90 giorni" },
  { value: "-62%", label: "Costo per acquisizione rispetto al periodo precedente" },
  { value: "4.1×", label: "ROAS medio sulle campagne attivate" },
  { value: "3 mesi", label: "Tempo per raggiungere il break-even sull'investimento" },
];

const testimonials = [
  {
    initials: "SR",
    name: "Stefano Rotesi",
    role: "Owner AEON Studio",
    text: "✦ Crescita visibilità +200% in 60 giorni. Un gruppo di ragazzi audaci, infaticabili e sempre presenti, capaci di portare risultati concreti in pochissimo tempo. Sono affidabili, responsabili e disponibili anche nei weekend. Con il loro metodo ho visto una crescita immediata in visibilità e nuovi clienti in tempi record. In tanti anni non ho mai trovato un team più efficace e motivato.",
  },
  {
    initials: "DDC",
    name: "Dark Diamond Cafè",
    role: "Cliente",
    text: "Collaborare con BD Media ha completamente cambiato la mia presenza online. Hanno trasformato l'immagine del locale portando professionalità e risultati reali in poche settimane.",
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-20 pt-32 md:px-12 lg:px-20">
        {/* Decorative */}
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none text-[30vw] font-extrabold leading-none text-white/[0.02]">
          BD
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <ScrollReveal>
            <div className="eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              GROWTH PARTNER
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="heading-hero max-w-4xl">
              Lead Generation &<br />
              <span className="text-primary">Acquisizione Clienti</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-6 text-lg font-light text-muted-foreground">
              Più clienti. Meno sprechi. Più controllo.
            </p>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">
              Progettiamo sistemi di acquisizione clienti misurabili e scalabili. Niente promesse vaghe — solo risultati documentati e tracciabili.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link to="/services" className="btn-primary">
                Ottieni l'analisi gratuita →
              </Link>
              <a href="#case-study" className="text-sm text-muted-foreground underline decoration-white/20 underline-offset-4 transition-colors hover:text-foreground">
                Vedi i risultati
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Marquee */}
      <MarqueeStrip />

      {/* Stats */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">I Nostri Numeri</h2>
            <p className="mt-2 text-muted-foreground">Dati reali. Progetti attivi 2025–2026.</p>
          </ScrollReveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {stats.map((s, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-surface">
                  <div className="text-6xl font-extrabold tracking-tight md:text-7xl">{s.value}</div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Metodo BD */}
      <section className="section-padding bg-surface-1">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Il Metodo BD</h2>
            <p className="mt-2 text-muted-foreground">Un sistema in 3 fasi. Non un servizio. Un processo.</p>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground">
              Non facciamo "marketing generico". Applichiamo un metodo strutturato, replicabile e misurabile in ogni fase della crescita.
            </p>
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
            <span className="tag-pill mb-4 inline-block">Ristorazione & Local Business</span>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Case Study</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-10 card-surface">
              <h3 className="text-2xl font-extrabold">Dark Diamond Cafè</h3>
              <p className="mt-1 text-lg font-semibold text-primary">Da 0 a 340 prenotazioni in 90 giorni</p>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Dark Diamond Cafè aveva una presenza online frammentata e nessun sistema di acquisizione strutturato. Investivano budget su post organici senza risultati misurabili. Abbiamo azzerato e ricostruito tutto da zero con il Metodo BD: nuova identità visiva, campagne Meta con targeting iper-locale, e un funnel di prenotazione ottimizzato.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {caseMetrics.map((m, i) => (
                  <div key={i} className="rounded-lg bg-white/[0.03] p-5">
                    <div className="text-3xl font-extrabold">{m.value}</div>
                    <p className="mt-2 text-xs text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-3 rounded-lg bg-white/[0.03] p-5 text-sm">
                <div className="flex flex-wrap gap-x-8 gap-y-1">
                  <span className="text-muted-foreground">Lead settimanali Prima (organico):</span>
                  <span className="font-semibold">8/sett</span>
                  <span className="text-primary">→</span>
                  <span className="text-muted-foreground">Dopo (Metodo BD):</span>
                  <span className="font-semibold">65/sett</span>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-1">
                  <span className="text-muted-foreground">Costo per Lead Prima:</span>
                  <span className="font-semibold">€28/lead</span>
                  <span className="text-primary">→</span>
                  <span className="text-muted-foreground">Dopo:</span>
                  <span className="font-semibold">€10.6/lead</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Tasso di conversione landing page: </span>
                  <span className="font-semibold text-primary">38%</span>
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
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Quello che dicono i nostri clienti.
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-surface flex h-full flex-col">
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Pronto a costruire il tuo sistema di acquisizione?
            </h2>
            <Link to="/services" className="btn-primary mt-8 inline-flex">
              Ottieni l'analisi gratuita →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
