const developers = [
  "DAMAC", "EMAAR", "MERAAS", "SOBHA REALTY", "NAKHEEL", "BINGHATTI", "SELECT GROUP", "ELLINGTON",
];

const DeveloperLogos = () => {
  return (
    <section className="bg-secondary py-10">
      <div className="container-main flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/4">
          <p className="text-sm font-medium text-muted-foreground">
            Partners with Dubai's leading developers
          </p>
        </div>
        <div className="md:w-3/4 overflow-hidden">
          <div className="flex items-center gap-12 animate-marquee">
            {developers.map((dev) => (
              <span key={dev} className="text-foreground/40 font-bold text-lg whitespace-nowrap tracking-wider font-sans">
                {dev}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperLogos;
