import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Bed, Bath, Maximize, Heart, Mail, Phone, MapPin, Calendar, Car, Sofa, Building, ChevronLeft, ChevronRight, X, Share2, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === Number(id));
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container-main pt-[120px] pb-16 text-center">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Property Not Found</h1>
          <p className="text-muted-foreground mb-6">The property you're looking for doesn't exist.</p>
          <Link to="/buy" className="btn-primary">Browse Properties</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % property.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-[72px] border-b border-border bg-background">
        <div className="container-main py-3 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-accent">Home</Link>
          {" / "}
          <Link to="/buy" className="hover:text-accent">Properties</Link>
          {" / "}
          <span className="text-foreground">{property.title}</span>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="bg-background">
        <div className="container-main py-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 rounded-xl overflow-hidden">
            {/* Main Image */}
            <div
              className="lg:col-span-2 lg:row-span-2 relative cursor-pointer group h-[300px] lg:h-[460px]"
              onClick={() => { setCurrentImage(0); setLightboxOpen(true); }}
            >
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
            {/* Side Images */}
            {property.images.slice(1, 3).map((img, i) => (
              <div
                key={i}
                className="hidden lg:block relative cursor-pointer group h-[225px]"
                onClick={() => { setCurrentImage(i + 1); setLightboxOpen(true); }}
              >
                <img
                  src={img}
                  alt={`${property.title} ${i + 2}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                {i === 1 && property.images.length > 3 && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">+{property.images.length - 3} Photos</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile gallery nav */}
          <div className="flex items-center justify-center gap-2 mt-3 lg:hidden">
            {property.images.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrentImage(i); setLightboxOpen(true); }}
                className={`w-2 h-2 rounded-full transition-colors ${i === 0 ? "bg-accent" : "bg-border"}`}
              />
            ))}
            <span className="text-xs text-muted-foreground ml-2">{property.images.length} photos</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background pb-16">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-3">
                      For {property.category === "rent" ? "Rent" : property.category === "offplan" ? "Off Plan" : "Sale"}
                    </span>
                    <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">{property.title}</h1>
                    <p className="flex items-center gap-1 text-muted-foreground mt-2">
                      <MapPin size={16} className="text-accent" />
                      {property.location}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => setLiked(!liked)}
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${liked ? "bg-red-50 border-red-200 text-red-500" : "border-border text-muted-foreground hover:text-foreground"}`}
                    >
                      <Heart size={18} fill={liked ? "currentColor" : "none"} />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>

                <p className="text-3xl font-bold text-accent mt-4">{property.price}</p>

                {/* Quick Stats */}
                <div className="flex flex-wrap items-center gap-6 mt-6 p-4 bg-secondary/50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Building size={18} className="text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Type</p>
                      <p className="text-sm font-medium text-foreground">{property.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed size={18} className="text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Bedrooms</p>
                      <p className="text-sm font-medium text-foreground">{property.beds === 0 ? "Studio" : property.beds}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath size={18} className="text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Bathrooms</p>
                      <p className="text-sm font-medium text-foreground">{property.baths}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize size={18} className="text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Area</p>
                      <p className="text-sm font-medium text-foreground">{property.area}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </div>

              {/* Property Details */}
              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-4">Property Details</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { icon: Building, label: "Type", value: property.type },
                    { icon: Bed, label: "Bedrooms", value: property.beds === 0 ? "Studio" : String(property.beds) },
                    { icon: Bath, label: "Bathrooms", value: String(property.baths) },
                    { icon: Maximize, label: "Size", value: property.area },
                    { icon: Sofa, label: "Furnishing", value: property.furnishing },
                    { icon: Car, label: "Parking", value: `${property.parking} Space${property.parking > 1 ? "s" : ""}` },
                    { icon: Building, label: "Floor", value: property.floor },
                    { icon: Calendar, label: "Year Built", value: String(property.yearBuilt) },
                  ].map((detail) => (
                    <div key={detail.label} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                      <detail.icon size={18} className="text-accent flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">{detail.label}</p>
                        <p className="text-sm font-medium text-foreground">{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-4">Features & Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <Check size={16} className="text-accent flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Reference */}
              <div className="flex items-center gap-6 text-xs text-muted-foreground border-t border-border pt-6">
                <span>Reference: {property.reference}</span>
                <span>Permit: {property.permitNumber}</span>
              </div>
            </div>

            {/* Sidebar - Agent Card */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6 sticky top-[90px]">
                <h3 className="font-serif font-bold text-foreground mb-1">Contact Agent</h3>
                <p className="text-sm text-muted-foreground mb-6">{property.agent.name}</p>

                <div className="space-y-3 mb-6">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-accent text-white rounded-lg font-medium text-sm hover:bg-accent/90 transition-colors"
                  >
                    <Phone size={16} /> Call Agent
                  </a>
                  <a
                    href={`mailto:${property.agent.email}`}
                    className="flex items-center justify-center gap-2 w-full py-3 border border-border rounded-lg font-medium text-sm text-foreground hover:bg-secondary transition-colors"
                  >
                    <Mail size={16} /> Send Email
                  </a>
                  <a
                    href={`https://wa.me/${property.agent.phone.replace(/\s|\+/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white rounded-lg font-medium text-sm hover:bg-[#20bd5a] transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>

                {/* Inquiry Form */}
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-3 py-2.5 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-3 py-2.5 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-3 py-2.5 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                  <textarea
                    placeholder={`I'm interested in ${property.title}`}
                    rows={3}
                    className="w-full px-3 py-2.5 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                  />
                  <button type="submit" className="btn-primary w-full text-sm">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <img
            src={property.images[currentImage]}
            alt={`${property.title} ${currentImage + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {property.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentImage ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PropertyDetailPage;
