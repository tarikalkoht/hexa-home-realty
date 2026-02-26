import propertyMgmt from "@/assets/property-management.jpg";

const PropertyManagement = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden">
            <img src={propertyMgmt} alt="Property Management" className="w-full h-[400px] object-cover rounded-lg" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Professional Property Management for Your Dubai Investment
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              HexaHome Realty handles every aspect of property management, from tenant screening and rent collection to maintenance and legal compliance. Our tailored approach ensures your property runs smoothly, delivering steady returns and long-term growth in Dubai's competitive market.
            </p>
            <a href="/services" className="btn-primary inline-block text-sm">
              Find out more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyManagement;
