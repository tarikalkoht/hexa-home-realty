import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown, Bed, Bath, Maximize, Heart, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const allProperties = [
  { id: 1, image: property1, price: "USD 816,771", title: "High Floor | Partial Sea View | High ROI", location: "Palace Beach Residence, Emaar Beachfront", type: "Apartment", beds: 1, baths: 1, area: "728 sq ft" },
  { id: 2, image: property2, price: "USD 2,450,000", title: "Panoramic Skyline Views | Private Pool", location: "Downtown Dubai, Burj Khalifa District", type: "Penthouse", beds: 3, baths: 4, area: "3,200 sq ft" },
  { id: 3, image: property3, price: "USD 5,890,000", title: "Waterfront Villa | Private Beach | Smart Home", location: "Palm Jumeirah, Dubai", type: "Villa", beds: 5, baths: 6, area: "7,345 sq ft" },
  { id: 4, image: property1, price: "USD 208,276", title: "Stylish Residences in a Vibrant Community", location: "Binghatti Etherea, JVC, Dubai", type: "Apartment", beds: 0, baths: 1, area: "336 sq ft" },
  { id: 5, image: property2, price: "USD 6,193,848", title: "Renovated | Luxurious Furniture | Vacant Soon", location: "1 JBR, Jumeirah Beach Residence", type: "Apartment", beds: 4, baths: 5, area: "3,753 sq ft" },
  { id: 6, image: property3, price: "USD 1,200,000", title: "Modern Townhouse | Garden View | Family Living", location: "Dubai Hills Estate, Dubai", type: "Townhouse", beds: 3, baths: 3, area: "2,100 sq ft" },
  { id: 7, image: property1, price: "USD 450,000", title: "Canal View | Modern Finish | Ready to Move", location: "Business Bay, Dubai", type: "Apartment", beds: 1, baths: 2, area: "850 sq ft" },
  { id: 8, image: property2, price: "USD 9,270,353", title: "Sophisticated Residences in Design District", location: "The Edit at D3, Dubai Design District", type: "Apartment", beds: 5, baths: 5, area: "9,399 sq ft" },
];

const BuyPage = () => {
  const [filter, setFilter] = useState("any");

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Search Bar */}
      <div className="border-b border-border bg-background pt-[72px]">
        <div className="container-main py-4 flex flex-wrap items-center gap-3">
          <div className="flex-1 min-w-[200px] flex items-center gap-2 px-3 py-2 border border-border rounded">
            <Search size={16} className="text-muted-foreground" />
            <input type="text" placeholder="Area, project or community" className="flex-1 text-sm bg-transparent focus:outline-none" />
          </div>
          <button className="flex items-center gap-1 px-4 py-2 border border-border rounded text-sm text-muted-foreground">
            Property Type <ChevronDown size={14} />
          </button>
          <button className="flex items-center gap-1 px-4 py-2 border border-border rounded text-sm text-muted-foreground">
            Price <ChevronDown size={14} />
          </button>
          <button className="flex items-center gap-1 px-4 py-2 border border-border rounded text-sm text-muted-foreground">
            Beds <ChevronDown size={14} />
          </button>
          <button className="btn-primary text-sm flex items-center gap-2">
            <Search size={16} /> Search
          </button>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container-main py-3 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-accent">Home</Link> / <span className="text-foreground">Properties for sale in Dubai</span>
      </div>

      <div className="container-main pb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-serif font-bold text-foreground">Property for Sale in Dubai</h1>
            <p className="text-sm text-muted-foreground mt-1">3,167 listings</p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            {["any", "ready", "offplan"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-sm rounded ${filter === f ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
              >
                {f === "any" ? "Any" : f === "ready" ? "Ready" : "Off Plan"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {allProperties.map((property) => (
              <div key={property.id} className="flex flex-col sm:flex-row bg-card border border-border rounded-lg overflow-hidden card-hover">
                <div className="sm:w-[300px] h-52 sm:h-auto relative flex-shrink-0">
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                  <button className="absolute top-3 right-3 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center">
                    <Heart size={16} className="text-foreground" />
                  </button>
                </div>
                <div className="flex-1 p-4">
                  <p className="text-lg font-bold text-accent">{property.price}</p>
                  <h3 className="font-sans font-medium text-foreground text-sm mt-1">{property.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{property.location}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mt-3">
                    <span className="text-foreground font-medium">{property.type}</span>
                    <span className="flex items-center gap-1"><Bed size={14} /> {property.beds === 0 ? "Studio" : property.beds}</span>
                    <span className="flex items-center gap-1"><Bath size={14} /> {property.baths}</span>
                    <span className="flex items-center gap-1"><Maximize size={14} /> {property.area}</span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button className="flex items-center gap-1 px-4 py-2 border border-border rounded text-xs font-medium hover:bg-secondary transition-colors">
                      <Mail size={14} /> Book a Viewing
                    </button>
                    <button className="flex items-center gap-1 px-4 py-2 border border-border rounded text-xs font-medium hover:bg-secondary transition-colors">
                      <Phone size={14} /> Call
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-sans font-semibold text-foreground mb-4">Popular Searches</h3>
              <ul className="space-y-2">
                {["Apartments for sale", "Villas for sale", "Townhouses for sale", "Penthouses for sale", "Duplexes for sale"].map((s) => (
                  <li key={s}><a href="#" className="text-sm text-accent hover:underline">{s} in Dubai</a></li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-sans font-semibold text-foreground mb-4">Useful Links</h3>
              <ul className="space-y-2">
                {["Off Plan Projects", "Area Guides", "Market Reports", "Buying Guide"].map((s) => (
                  <li key={s}><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuyPage;
