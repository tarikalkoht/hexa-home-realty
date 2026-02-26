import { Users, Home, Download, Building } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Connect with a Specialist",
    description: "Access our dedicated team of over 400+ expert agents ready to assist you.",
    link: "/team",
  },
  {
    icon: Home,
    title: "List Your Property",
    description: "Achieve optimal value by listing your property with our expert marketing strategies.",
    link: "/list-property",
  },
  {
    icon: Download,
    title: "Download Report",
    description: "Download the latest Comprehensive Dubai Real Estate Market Report YTD 2025",
    link: "#",
  },
  {
    icon: Building,
    title: "Explore Dubai Projects",
    description: "Browse and find your ideal property from our extensive portfolio of Dubai projects.",
    link: "/projects",
  },
];

const ServicesGrid = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 max-w-2xl">
          Dubai real estate solutions focused around excellent customer service.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.link}
              className="group p-6 rounded-lg border border-border bg-card hover:border-accent transition-all duration-300 card-hover"
            >
              <service.icon className="w-10 h-10 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="font-sans font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
