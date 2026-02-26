import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import areaMarina from "@/assets/area-marina.jpg";
import areaPalm from "@/assets/area-palm.jpg";
import areaBusiness from "@/assets/area-business-bay.jpg";
import areaDowntown from "@/assets/area-downtown.jpg";

const offices = [
  { name: "HexaHome HQ – Dubai Marina", address: "Office 1802, 18th Floor, Marina Plaza, Dubai Marina, Dubai, UAE", image: areaMarina, phone: "+971 4 892 5831" },
  { name: "Property Management – Dubai Media City", address: "Business Central Towers - Al Sufouh 2 - Dubai", image: areaDowntown, phone: "+971 4 892 5831" },
  { name: "PVH – Palm Jumeirah", address: "Golden Mile 8, Palm Jumeirah, Dubai, UAE", image: areaPalm, phone: "+971 4 892 5831" },
  { name: "HexaHome Dubai Hills Estate Branch", address: "Business Park Building 4, Dubai Hills Estate, Dubai, UAE", image: areaBusiness, phone: "+971 4 892 5831" },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-[72px]">
        <div className="container-main py-3 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-accent">Home</Link> / <span className="text-foreground">Contact</span>
        </div>

        <div className="container-main pb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Contact HexaHome</h1>
            <p className="text-muted-foreground leading-relaxed">
              HexaHome is dedicated to providing outstanding service across Dubai and beyond. This is your direct line to our experienced team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {offices.map((office) => (
              <div key={office.name} className="bg-card border border-border rounded-lg overflow-hidden card-hover">
                <div className="h-48">
                  <img src={office.image} alt={office.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-sans font-semibold text-foreground text-sm mb-2">{office.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{office.address}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <Phone size={12} />
                    <span>{office.phone}</span>
                  </div>
                  <button className="btn-primary w-full text-xs py-2">Contact Office</button>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-xl mx-auto bg-secondary p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">Send us a message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="px-4 py-3 rounded border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                <input type="text" placeholder="Last Name" className="px-4 py-3 rounded border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              <textarea placeholder="Your message" rows={4} className="w-full px-4 py-3 rounded border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
              <button type="submit" className="btn-primary w-full text-sm">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
