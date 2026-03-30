import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { BarChart3, Search, Zap, Target, FlaskConical, PenTool } from "lucide-react";
import { useContactModal } from "@/components/ContactModalContext";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const About = () => {
  const { open: openContactModal } = useContactModal();
  const { t } = useLanguage();
  const A = translations.about;

  const team = [
    { initials: "BD", name: t(A.team.m1_name), role: t(A.team.m1_role) },
    { initials: "FS", name: t(A.team.m2_name), role: t(A.team.m2_role) },
    { initials: "LF", name: t(A.team.m3_name), role: t(A.team.m3_role) },
    { initials: "DA", name: t(A.team.m4_name), role: t(A.team.m4_role) },
  ];

  const values = [
    { icon: BarChart3, title: t(A.values.v1_title), desc: t(A.values.v1_body) },
    { icon: Search, title: t(A.values.v2_title), desc: t(A.values.v2_body) },
    { icon: Zap, title: t(A.values.v3_title), desc: t(A.values.v3_body) },
    { icon: Target, title: t(A.values.v4_title), desc: t(A.values.v4_body) },
    { icon: FlaskConical, title: t(A.values.v5_title), desc: t(A.values.v5_body) },
    { icon: PenTool, title: t(A.values.v6_title), desc: t(A.values.v6_body) },
  ];

  return (
    <div>
      <section className="section-padding pt-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="eyebrow mb-4 flex items-center gap-3"><span className="h-px w-8 bg-primary" />{t(A.hero.eyebrow)}</div>
            <h1 className="heading-hero max-w-3xl">{t(A.hero.h1)}</h1>
            <p className="mt-4 text-lg font-light text-muted-foreground">{t(A.hero.subtitle)}</p>
            <p className="mt-4 max-w-3xl text-base text-muted-foreground">{t(A.hero.body)}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="mx-auto max-w-7xl grid gap-6 md:grid-cols-2">
          <ScrollReveal>
            <div className="card-surface h-full">
              <span className="eyebrow">{t(A.vision.title)}</span>
              <h3 className="mt-3 text-xl font-bold">{t(A.vision.subtitle)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(A.vision.body)}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="card-surface h-full">
              <span className="eyebrow">{t(A.mission.title)}</span>
              <h3 className="mt-3 text-xl font-bold">{t(A.mission.subtitle)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(A.mission.body)}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-surface-1">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold tracking-tight">{t(A.team.title)}</h2>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {team.map((m, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="card-surface text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">{m.initials}</div>
                  <h3 className="mt-4 text-sm font-bold">{m.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{m.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <p className="mt-8 text-center text-sm text-muted-foreground">{t(A.team.note)}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold tracking-tight">{t(A.values.title)}</h2>
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

      <section className="section-padding bg-surface-1">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">BD</div>
            <blockquote className="text-2xl font-bold italic leading-snug md:text-3xl">{t(A.quote.text)}</blockquote>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{t(A.quote.body)}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button onClick={openContactModal} className="btn-primary">{t(A.cta.primary)}</button>
              <Link to="/portfolio" className="text-sm text-muted-foreground underline decoration-white/20 underline-offset-4 transition-colors hover:text-foreground">
                {t(A.cta.secondary)}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
