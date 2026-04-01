import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const ITEMS = [
  { key: "t1", initials: "SR" },
  { key: "t2", initials: "LC" },
  { key: "t3", initials: "RM" },
  { key: "t4", initials: "TL" },
  { key: "t5", initials: "VC" },
] as const;

const AUTOPLAY_MS = 5000;

const TestimonialCarousel = () => {
  const { t } = useLanguage();
  const H = translations.home;
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const deltaX = useRef(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval>>();

  const count = ITEMS.length;

  const go = useCallback((dir: 1 | -1) => {
    setActive((prev) => (prev + dir + count) % count);
  }, [count]);

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(autoplayRef.current);
  }, [go]);

  const resetAutoplay = useCallback(() => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => go(1), AUTOPLAY_MS);
  }, [go]);

  const handlePrev = () => { go(-1); resetAutoplay(); };
  const handleNext = () => { go(1); resetAutoplay(); };

  // Touch / pointer swipe
  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    startX.current = e.clientX;
    deltaX.current = 0;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    deltaX.current = e.clientX - startX.current;
  };
  const onPointerUp = () => {
    if (!dragging) return;
    setDragging(false);
    if (Math.abs(deltaX.current) > 50) {
      go(deltaX.current < 0 ? 1 : -1);
      resetAutoplay();
    }
  };

  return (
    <div className="relative select-none">
      {/* Slides viewport */}
      <div
        className="relative overflow-hidden"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        style={{ touchAction: "pan-y" }}
      >
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {ITEMS.map((item, i) => {
            const isActive = i === active;
            return (
              <div
                key={item.key}
                className="w-full shrink-0 px-4 md:px-16"
              >
                <div
                  className={[
                    "mx-auto max-w-3xl rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 md:p-12",
                    "shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-sm",
                    "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isActive
                      ? "scale-100 opacity-100"
                      : "scale-[0.92] opacity-40",
                    "hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:border-primary/20",
                  ].join(" ")}
                >
                  <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    "{t((H.testimonials as any)[`${item.key}_text`])}"
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {item.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">
                        {t((H.testimonials as any)[`${item.key}_name`])}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {t((H.testimonials as any)[`${item.key}_role`])}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous"
        className="absolute left-0 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.08] hover:text-foreground active:scale-95 md:left-2"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={handleNext}
        aria-label="Next"
        className="absolute right-0 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.08] hover:text-foreground active:scale-95 md:right-2"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {ITEMS.map((item, i) => (
          <button
            key={item.key}
            onClick={() => { setActive(i); resetAutoplay(); }}
            aria-label={`Slide ${i + 1}`}
            className={[
              "h-2 rounded-full transition-all duration-300",
              i === active
                ? "w-6 bg-primary"
                : "w-2 bg-white/20 hover:bg-white/40",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
