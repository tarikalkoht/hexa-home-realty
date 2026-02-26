import { Shield, TrendingUp, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Exclusive Access to Prime Properties",
    description: "Gain priority access to exclusive listings and off-plan developments in Dubai's top markets.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record of Success",
    description: "Achieve your goals with our trusted expertise, delivering results for investors, buyers, and sellers.",
  },
  {
    icon: Lightbulb,
    title: "Expert Guidance in Dubai's Market",
    description: "Make informed, profitable decisions with our strategic insights into Dubai's real estate market.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-12">
          Dubai's Premier Property Marketplace
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <feature.icon className="w-12 h-12 text-accent mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-sans font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
