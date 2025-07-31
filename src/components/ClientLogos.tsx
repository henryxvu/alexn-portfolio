const ClientLogos = () => {
  const clients = [
    { name: 'AUDI', logo: 'N' },
    { name: 'FERRARI', logo: 'I' },
    { name: 'SONY', logo: 'G' },
    { name: 'DJI', logo: 'G' },
    { name: 'APPLE', logo: 'E' },
    { name: 'NETFLIX', logo: 'R' },
  ];

  return (
    <section className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group cursor-pointer smooth-transition hover:opacity-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-border/30 rounded-lg smooth-transition group-hover:border-accent/50 group-hover:glow-effect">
                <span className="text-lg md:text-xl font-bold text-muted-foreground group-hover:text-accent smooth-transition">
                  {client.logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;