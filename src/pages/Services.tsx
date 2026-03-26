import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

const services = [
  { num: "01", name: "Multiplatform ADS", desc: "Campagne pubblicitarie su Meta (Facebook & Instagram), Google, TikTok e LinkedIn. Costruiamo funnel completi dalla awareness alla conversione, ottimizzati settimana per settimana sui dati reali — non sulle intuizioni.", tags: ["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads", "Funnel Strategy"] },
  { num: "02", name: "Siti Web", desc: "Design e sviluppo di siti ad alta conversione. Non siti vetrina, ma strumenti di acquisizione pensati per trasformare traffico in contatti e contatti in clienti.", tags: ["Design", "Sviluppo", "CRO"] },
  { num: "03", name: "Software & Automazioni", desc: "Sviluppo di tool, CRM, automazioni e integrazioni su misura. Costruiamo la tecnologia che ti permette di scalare senza aggiungere complessità operativa.", tags: ["CRM", "Automazioni", "Integrazioni"] },
  { num: "04", name: "Social Media Marketing", desc: "Gestione strategica dei canali social: piano editoriale, produzione contenuti, community management e analisi delle performance. Ogni post ha uno scopo nel sistema.", tags: ["Instagram", "TikTok", "Content Plan"] },
  { num: "05", name: "Brand Identity", desc: "Costruzione o ridefinizione dell'identità visiva: logo, palette, tipografia, tono di voce e brand guidelines. Un'identità che comunica chi sei prima ancora che tu parli.", tags: ["Logo", "Visual Identity", "Brand Guidelines"] },
  { num: "06", name: "Email Marketing", desc: "Sequenze automatizzate, newsletter e campagne DEM per nurturare i lead e aumentare il lifetime value dei clienti esistenti. Il canale con il ROI più alto nel marketing digitale.", tags: ["Automazioni", "Newsletter", "DEM"] },
  { num: "07", name: "AI Marketing", desc: "Integrazione di strumenti di intelligenza artificiale nei processi di marketing: copy generation, analisi dati, chatbot, personalizzazione e ottimizzazione automatica delle campagne.", tags: ["AI Tools", "Automazione", "Personalizzazione"] },
  { num: "08", name: "Influencer & UGC", desc: "Selezione, gestione e misurazione di campagne con creator e influencer. Produzione di contenuti UGC autentici che performano meglio dei contenuti brandizzati tradizionali.", tags: ["Influencer", "UGC", "Content Creator Network"] },
  { num: "09", name: "Merchandising", desc: "Progettazione e produzione di merchandise per scuole, società sportive, aziende ed eventi. Dal concept al prodotto fisico, con gestione completa della supply chain.", tags: ["Print on Demand", "Corporate", "Eventi"] },
];

const howWeWork = [
  { title: "Prima analizziamo, poi agiamo", desc: "Ogni progetto parte da un audit del marketing esistente. Capiamo dove sei prima di dirti dove andare." },
  { title: "KPI chiari dall'inizio", desc: "Stabiliamo insieme le metriche di successo prima di partire. Nessuna sorpresa, nessun obiettivo vago." },
  { title: "Report settimanali e trasparenza totale", desc: "Accesso completo ai dati in ogni momento. Sai sempre cosa stiamo facendo e perché." },
  { title: "Ottimizzazione continua", desc: "Il sistema non si monta e si lascia girare. Lo monitoriamo, testiamo e miglioriamo ogni settimana." },
];

const Services = () => (
  <div>
    <section className="section-padding pt-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="eyebrow mb-4 flex items-center gap-3"><span className="h-px w-8 bg-primary" />SERVIZI</div>
          <h1 className="heading-hero max-w-3xl">Cosa Facciamo</h1>
          <p className="mt-4 text-lg font-light text-muted-foreground">Il marketing non è una lista di attività. È un sistema.</p>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            In BD Media progettiamo soluzioni integrate per ridurre sprechi, aumentare l'efficienza e trasformare il digitale in un asset misurabile. Ogni servizio nasce da un'analisi strategica e ha un obiettivo chiaro: far crescere il tuo business.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-12 rounded-xl border-l-2 border-primary bg-surface-1 p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ogni servizio funziona al massimo quando è parte di un sistema più grande. Non vendiamo singoli servizi in isolamento. Costruiamo architetture di marketing dove ogni componente è progettata per lavorare in sinergia. Il risultato è un sistema scalabile, misurabile e ottimizzabile nel tempo.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding">
      <div className="mx-auto max-w-7xl space-y-6">
        {services.map((s, i) => (
          <ScrollReveal key={i} delay={i * 60}>
            <div className="card-surface flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
              <span className="text-4xl font-extrabold text-primary/20">{s.num}</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => <span key={t} className="tag-pill">{t}</span>)}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    <section className="section-padding bg-surface-1">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="text-3xl font-extrabold tracking-tight">Non un servizio alla volta. Un sistema che cresce.</h2>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {howWeWork.map((h, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="card-surface">
                <h3 className="text-base font-bold">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      <div className="relative mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-extrabold tracking-tight">Pronto a costruire il tuo sistema di acquisizione?</h2>
          <Link to="/services" className="btn-primary mt-8 inline-flex">Inizia con l'analisi gratuita →</Link>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default Services;
