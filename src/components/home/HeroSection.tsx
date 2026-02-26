import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"buy" | "rent" | "offplan">("buy");

  return (
    <section className="relative h-[600px] md:h-[650px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/30" />
      </div>

      <div className="container-main relative z-10 pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-8 max-w-lg leading-tight">
          Find your home in Dubai.
        </h1>

        <div className="max-w-2xl">
          {/* Tabs */}
          <div className="flex gap-1 mb-0">
            {[
              { key: "buy", label: "Buy" },
              { key: "rent", label: "Rent" },
              { key: "offplan", label: "Off Plan" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-6 py-2.5 text-sm font-medium rounded-t transition-colors ${
                  activeTab === tab.key
                    ? "bg-background text-foreground"
                    : "bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="bg-background rounded-b rounded-tr p-2 flex flex-col sm:flex-row items-stretch gap-2">
            <div className="flex-1 flex items-center gap-2 px-3">
              <Search size={18} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="Area, project or community"
                className="flex-1 py-2 text-sm bg-transparent focus:outline-none text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <button className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground border-l border-border">
              Beds <ChevronDown size={14} />
            </button>
            <button className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground border-l border-border">
              Price Range <ChevronDown size={14} />
            </button>
            <button className="btn-primary text-sm flex items-center gap-2">
              <Search size={16} />
              Search
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-6 text-primary-foreground/80 text-sm">
          <span>4,000 listings</span>
          <span>·</span>
          <span>400+ agents</span>
          <span>·</span>
          <span>Serving 80+ countries</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
