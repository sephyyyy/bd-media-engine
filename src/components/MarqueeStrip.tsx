const clients = [
  "AEON Studio", "Dark Diamond Cafè", "Caffè al Teatro", "Lab On Sense",
  "KP Management", "CR Digital", "TDSTUDIO", "Arkes Roleplay", "Tecia+",
  "Accademia Europea", "Istituto Campanella", "Golosi", "Barber Feb"
];

const MarqueeStrip = () => {
  const content = clients.map((c, i) => (
    <span key={i} className="whitespace-nowrap">
      <span className="text-muted-foreground">{c}</span>
      <span className="mx-4 text-primary">✦</span>
    </span>
  ));

  return (
    <div className="overflow-hidden border-y border-white/[0.06] bg-surface-1 py-4">
      <div className="flex animate-marquee">
        <div className="flex shrink-0 items-center text-[13px] font-semibold uppercase tracking-[2px]">
          {content}
        </div>
        <div className="flex shrink-0 items-center text-[13px] font-semibold uppercase tracking-[2px]">
          {content}
        </div>
      </div>
    </div>
  );
};

export default MarqueeStrip;
