import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import areaDowntown from "@/assets/area-downtown.jpg";
import areaPalm from "@/assets/area-palm.jpg";
import areaMarina from "@/assets/area-marina.jpg";
import areaBusiness from "@/assets/area-business-bay.jpg";

const areas = [
  { name: "Downtown Dubai", image: areaDowntown, description: "A district that offers the perfect blend of cutting-edge architecture, world-class shopping, and cultural allure, all set against the iconic backdrop of the Burj Khalifa." },
  { name: "Palm Jumeirah", image: areaPalm, description: "Home to top-notch attractions and world-class hotels, Palm Jumeirah symbolizes the 'Dubai style of Island living.'" },
  { name: "Dubai Marina", image: areaMarina, description: "Captivating views and a luxury lifestyle, experience the 'Big City Life' in Dubai Marina!" },
  { name: "Business Bay", image: areaBusiness, description: "Live, work, and play in the dynamic Business Bay community!" },
  { name: "Dubai Hills Estate", image: areaDowntown, description: "An upscale community offering premium villas, apartments and townhouses surrounded by lush green landscapes." },
  { name: "Jumeirah Village Circle", image: areaMarina, description: "A family-friendly community offering affordable living with excellent amenities and connectivity." },
  { name: "Jumeirah Beach Residence", image: areaPalm, description: "A waterfront community with stunning beach views, vibrant dining and entertainment options." },
  { name: "Emaar Beachfront", image: areaBusiness, description: "A premium beachfront destination offering stunning residences with panoramic sea views." },
];

const AreasPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-[72px]">
        <div className="container-main py-3 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-accent">Home</Link> / <span className="text-foreground">Communities</span>
        </div>

        <div className="container-main pb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Top Dubai Communities</h1>
            <p className="text-muted-foreground leading-relaxed">
              Discover vibrant living in Dubai through our comprehensive area guide, offering insights into top communities, attractions, and things to do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area) => (
              <Link key={area.name} to={`/areas/${area.name.toLowerCase().replace(/\s+/g, '-')}`} className="group card-hover">
                <div className="rounded-lg overflow-hidden h-52">
                  <img src={area.image} alt={area.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-sans font-semibold text-foreground mt-3 group-hover:text-accent transition-colors">{area.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-3">{area.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AreasPage;
