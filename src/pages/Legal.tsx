import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const LegalPage = ({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) => (
  <div className="section-padding pt-32">
    <div className="mx-auto max-w-3xl">
      <ScrollReveal>
        <h1 className="text-4xl font-extrabold tracking-tight">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{updated}</p>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted-foreground [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-foreground [&_p]:mb-3">
          {children}
        </div>
      </ScrollReveal>
    </div>
  </div>
);

export const Privacy = () => {
  const { t } = useLanguage();
  const T = translations.privacy;
  return (
    <LegalPage title={t(T.h1)} updated={t(T.updated)}>
      <h2>Titolare del Trattamento</h2>
      <p>BD Media — con sede operativa in Italia. Per qualsiasi richiesta relativa alla privacy è possibile contattarci all'indirizzo email: privacy@bdmedia.it</p>
      <h2>Dati Raccolti</h2>
      <p>Raccogliamo dati personali forniti volontariamente dall'utente (nome, email, telefono) tramite form di contatto, iscrizioni alla newsletter o richieste di consulenza. Raccogliamo inoltre dati di navigazione in forma anonima tramite cookie tecnici e analitici.</p>
      <h2>Finalità del Trattamento</h2>
      <p>I dati raccolti vengono utilizzati per: rispondere alle richieste dell'utente, inviare comunicazioni informative e promozionali (previo consenso), migliorare l'esperienza di navigazione sul sito e analizzare le performance del sito.</p>
      <h2>Conservazione dei Dati</h2>
      <p>I dati personali vengono conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti e comunque non oltre 24 mesi dall'ultimo contatto, salvo diversi obblighi di legge.</p>
      <h2>Diritti dell'Interessato</h2>
      <p>L'utente ha diritto di accedere ai propri dati, richiederne la rettifica o la cancellazione, limitare il trattamento, opporsi al trattamento e richiedere la portabilità dei dati. Per esercitare tali diritti è possibile scrivere a privacy@bdmedia.it.</p>
      <h2>Cookie</h2>
      <p>Il sito utilizza cookie tecnici necessari al funzionamento e cookie analitici per monitorare le visite. L'utente può gestire le preferenze sui cookie tramite le impostazioni del proprio browser.</p>
      <h2>Contatti</h2>
      <p>Per qualsiasi domanda o richiesta relativa alla presente informativa, scrivere a: privacy@bdmedia.it</p>
    </LegalPage>
  );
};

export const Rimborsi = () => {
  const { t } = useLanguage();
  const T = translations.rimborsi;
  return (
    <LegalPage title={t(T.h1)} updated={t(T.updated)}>
      <h2>Premessa</h2>
      <p>BD Media offre servizi di consulenza, marketing digitale e sviluppo. La presente politica disciplina le condizioni di rimborso applicabili ai servizi acquistati.</p>
      <h2>Servizi di Consulenza</h2>
      <p>I servizi di consulenza una volta erogati non sono rimborsabili. Il pagamento copre il tempo e le competenze dedicate alla consulenza, indipendentemente dall'esito delle raccomandazioni fornite.</p>
      <h2>Servizi Continuativi</h2>
      <p>Per i servizi con sottoscrizione mensile, è possibile annullare l'abbonamento in qualsiasi momento. L'annullamento avrà effetto dal mese successivo. Non sono previsti rimborsi per il mese in corso.</p>
      <h2>Eccezioni</h2>
      <p>In caso di mancata erogazione del servizio per cause imputabili a BD Media, il cliente ha diritto al rimborso integrale dell'importo versato per il servizio non erogato. Le richieste di eccezione saranno valutate caso per caso.</p>
      <h2>Come Richiedere un Rimborso</h2>
      <p>Le richieste di rimborso devono essere inviate per iscritto all'indirizzo info@bdmedia.it entro 14 giorni dalla data di addebito, specificando il motivo della richiesta.</p>
    </LegalPage>
  );
};

export const Termini = () => {
  const { t } = useLanguage();
  const T = translations.termini;
  return (
    <LegalPage title={t(T.h1)} updated={t(T.updated)}>
      <h2>Accettazione dei Termini</h2>
      <p>L'utilizzo del sito web e dei servizi di BD Media implica l'accettazione integrale dei presenti Termini e Condizioni. Se non si accettano i presenti termini, si prega di non utilizzare il sito.</p>
      <h2>Descrizione dei Servizi</h2>
      <p>BD Media fornisce servizi di marketing digitale, lead generation, sviluppo web, branding e consulenza strategica. I dettagli specifici di ogni servizio vengono concordati con il cliente tramite proposta commerciale o contratto dedicato.</p>
      <h2>Obblighi del Cliente</h2>
      <p>Il cliente si impegna a fornire informazioni accurate e aggiornate, a collaborare attivamente al raggiungimento degli obiettivi concordati e a rispettare i tempi di pagamento stabiliti nel contratto.</p>
      <h2>Proprietà Intellettuale</h2>
      <p>Tutti i contenuti presenti sul sito (testi, grafiche, loghi, immagini) sono di proprietà di BD Media o dei rispettivi titolari e sono protetti dalle leggi sul diritto d'autore. I deliverable prodotti per il cliente diventano di proprietà del cliente al completamento del pagamento.</p>
      <h2>Limitazione di Responsabilità</h2>
      <p>BD Media non garantisce risultati specifici derivanti dall'utilizzo dei propri servizi. Le stime e le proiezioni fornite sono basate su dati storici e best practice del settore, ma non costituiscono garanzia di risultato.</p>
      <h2>Legge Applicabile</h2>
      <p>I presenti Termini e Condizioni sono regolati dalla legge italiana. Per qualsiasi controversia sarà competente il Foro di riferimento della sede legale di BD Media.</p>
      <h2>Contatti</h2>
      <p>Per qualsiasi domanda relativa ai presenti Termini e Condizioni, contattare: info@bdmedia.it</p>
    </LegalPage>
  );
};
