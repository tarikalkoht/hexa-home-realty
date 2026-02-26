import { useState } from "react";
import { Link } from "react-router-dom";
import { Bed, Bath, Maximize, Heart, Mail, Phone } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    id: 1,
    image: property1,
    price: "USD 816,771",
    title: "High Floor | Partial Sea View | High ROI",
    location: "Palace Beach Residence, Emaar Beachfront, Dubai",
    type: "Apartment",
    beds: 1,
    baths: 1,
    area: "728 sq ft",
    category: "sale",
  },
  {
    id: 2,
    image: property2,
    price: "USD 2,450,000",
    title: "Panoramic Skyline Views | Private Pool | Luxury Living",
    location: "Downtown Dubai, Burj Khalifa District",
    type: "Penthouse",
    beds: 3,
    baths: 4,
    area: "3,200 sq ft",
    category: "sale",
  },
  {
    id: 3,
    image: property3,
    price: "USD 5,890,000",
    title: "Waterfront Villa | Private Beach | Smart Home",
    location: "Palm Jumeirah, Dubai",
    type: "Villa",
    beds: 5,
    baths: 6,
    area: "7,345 sq ft",
    category: "sale",
  },
  {
    id: 4,
    image: property1,
    price: "USD 95,000/yr",
    title: "Fully Furnished | Marina View | Modern Design",
    location: "Dubai Marina, Dubai",
    type: "Apartment",
    beds: 2,
    baths: 2,
    area: "1,200 sq ft",
    category: "rent",
  },
  {
    id: 5,
    image: property2,
    price: "USD 208,276",
    title: "Stylish Residences in a Vibrant Community",
    location: "Binghatti Etherea, Jumeirah Village Circle",
    type: "Apartment",
    beds: 0,
    baths: 1,
    area: "336 sq ft",
    category: "offplan",
  },
  {
    id: 6,
    image: property3,
    price: "USD 1,200,000",
    title: "Modern Townhouse | Garden View | Family Living",
    location: "Dubai Hills Estate, Dubai",
    type: "Townhouse",
    beds: 3,
    baths: 3,
    area: "2,100 sq ft",
    category: "offplan",
  },
];

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
            <div key={property.id} className="group bg-card rounded-lg overflow-hidden border border-border card-hover">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.image}
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
            </div>
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
