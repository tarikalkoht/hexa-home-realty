import { useState } from "react";
import { Link } from "react-router-dom";
import { Bed, Bath, Maximize, Heart, Mail, Phone } from "lucide-react";
import { properties } from "@/data/properties";

const PropertyListings = () => {
  const [activeTab, setActiveTab] = useState<"sale" | "rent" | "offplan">("sale");
  const filtered = properties.filter((p) => p.category === activeTab);

  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Explore Property in Dubai.
          </h2>
          <Link to="/buy" className="hidden sm:inline-block btn-outline-light text-sm">
            View more
          </Link>
        </div>

        <div className="flex gap-1 mb-8">
          {[
            { key: "sale", label: "For Sale" },
            { key: "rent", label: "For Rent" },
            { key: "offplan", label: "Off Plan" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-5 py-2 text-sm font-medium rounded transition-colors ${
                activeTab === tab.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((property) => (
            <Link to={`/property/${property.id}`} key={property.id} className="group bg-card rounded-lg overflow-hidden border border-border card-hover block">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-colors">
                  <Heart size={16} className="text-foreground" />
                </button>
              </div>
              <div className="p-4">
                <p className="text-lg font-bold text-accent mb-1">{property.price}</p>
                <h3 className="font-sans font-medium text-foreground text-sm mb-2 line-clamp-1">{property.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{property.location}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border pt-3">
                  <span className="text-foreground font-medium">{property.type}</span>
                  <span className="flex items-center gap-1"><Bed size={14} /> {property.beds === 0 ? "Studio" : property.beds}</span>
                  <span className="flex items-center gap-1"><Bath size={14} /> {property.baths}</span>
                  <span className="flex items-center gap-1"><Maximize size={14} /> {property.area}</span>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 flex items-center justify-center gap-1 py-2 border border-border rounded text-xs font-medium hover:bg-secondary transition-colors">
                    <Mail size={14} /> Book a Viewing
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1 py-2 border border-border rounded text-xs font-medium hover:bg-secondary transition-colors">
                    <Phone size={14} /> Call
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link to="/buy" className="btn-outline-light text-sm inline-block">View more</Link>
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;
