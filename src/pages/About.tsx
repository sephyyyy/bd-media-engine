import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { useContactModal } from "@/components/ContactModalContext";

const team = [
  { initials: "BD", name: "Bedr Diana", role: "CEO & Founder" },
  { initials: "FS", name: "Francesco Schilirò", role: "COO & CLO" },
  { initials: "LF", name: "Luca Fortunato", role: "CTO, CIO & CDO" },
  { initials: "DA", name: "Donato Angerame", role: "CMO" },
];

const values = [
  { emoji: "📊", title: "Dati prima di tutto", desc: "Nessuna decisione senza dati. Ogni strategia nasce da un'analisi reale, ogni ottimizzazione è guidata da numeri concreti — non da intuizioni." },
  { emoji: "🔍", title: "Trasparenza totale", desc: "I tuoi dati sono tuoi. Nessun dato trattenuto, nessun report abbellito. Sai sempre dove sta andando il tuo investimento e perché." },
  { emoji: "⚡", title: "Velocità di esecuzione", desc: "Siamo la realtà più giovane e agile del settore. Nessuna burocrazia interna rallenta le decisioni: se funziona, lo facciamo. Se non funziona, lo cambiamo." },
  { emoji: "🎯", title: "Risultati, non attività", desc: "Non ti fatturiamo \"post pubblicati\" o \"campagne attivate\". Il nostro successo si misura sul tuo: lead generati, clienti acquisiti, ROI realizzato." },
  { emoji: "🔬", title: "Test continuo", desc: "Il marketing non si imposta e si lascia girare. Testiamo, impariamo e ottimizziamo ogni settimana. Ogni progetto migliora nel tempo." },
  { emoji: "✍️", title: "Ci mettiamo la firma", desc: "Ogni progetto che seguiamo è un progetto in cui mettiamo il nostro nome. Se non possiamo garantire qualità e crescita, preferiamo non iniziare." },
];

const About = () => {
  const { open: openContactModal } = useContactModal();
  return (
  <div>
    <section className="section-padding pt-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="eyebrow mb-4 flex items-center gap-3"><span className="h-px w-8 bg-primary" />CHI SIAMO</div>
          <h1 className="heading-hero max-w-3xl">Chi Siamo</h1>
          <p className="mt-4 text-lg font-light text-muted-foreground">Progettiamo sistemi che trasformano attenzione in clienti.</p>
          <p className="mt-4 max-w-3xl text-base text-muted-foreground">
            Dalla strategia all'esecuzione, integriamo marketing, advertising e tecnologia per massimizzare il ritorno sull'investimento. BD Media nasce con un obiettivo semplice: eliminare il marketing che non porta risultati. Siamo la realtà più giovane del settore, con un approccio fondato su dati, trasparenza e crescita misurabile.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Visione & Missione */}
    <section className="section-padding pt-0">
      <div className="mx-auto max-w-7xl grid gap-6 md:grid-cols-2">
        <ScrollReveal>
          <div className="card-surface h-full">
            <span className="eyebrow">La Nostra Visione</span>
            <h3 className="mt-3 text-xl font-bold">Partnership di crescita basate sui dati.</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Costruire partnership di crescita fondate su strategia, dati e tecnologia, aiutando le aziende a generare opportunità reali e sostenibili nel tempo. Non cerchiamo clienti — cerchiamo partner a cui possiamo dare risultati concreti.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="card-surface h-full">
            <span className="eyebrow">La Nostra Missione</span>
            <h3 className="mt-3 text-xl font-bold">Trasformare il marketing in un asset misurabile.</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Trasformare marketing e advertising in sistemi concreti di acquisizione lead, progettando soluzioni su misura che massimizzano risultati e ritorno sull'investimento. Ogni euro investito deve avere un ROI tracciabile.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding bg-surface-1">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="text-3xl font-extrabold tracking-tight">Il Team</h2>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {team.map((m, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="card-surface text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                  {m.initials}
                </div>
                <h3 className="mt-4 text-sm font-bold">{m.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{m.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={400}>
          <p className="mt-8 text-center text-sm text-muted-foreground">Disponibili, presenti — anche nei weekend.</p>
        </ScrollReveal>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="text-3xl font-extrabold tracking-tight">I Nostri Valori</h2>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="card-surface h-full">
                <span className="text-2xl">{v.emoji}</span>
                <h3 className="mt-3 text-base font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Quote */}
    <section className="section-padding bg-surface-1">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">BD</div>
          <blockquote className="text-2xl font-bold italic leading-snug md:text-3xl">
            "Se non possiamo garantire qualità e crescita, preferiamo non iniziare."
          </blockquote>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Costruiamo solo ciò che possiamo firmare. Non accettiamo progetti in cui non crediamo — e non ti promettiamo risultati che non possiamo consegnare.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      <div className="relative mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button onClick={openContactModal} className="btn-primary">Costruisci qualcosa insieme a noi →</button>
            <Link to="/portfolio" className="text-sm text-muted-foreground underline decoration-white/20 underline-offset-4 transition-colors hover:text-foreground">
              Siamo il partner giusto per i tuoi obiettivi? Scopriamolo insieme →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
  );
};

export default About;
