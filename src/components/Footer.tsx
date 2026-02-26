import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      {/* Newsletter */}
      <div className="bg-secondary py-12">
        <div className="container-main text-center">
          <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Stay in the loop</h3>
          <p className="text-muted-foreground text-sm mb-6">Get to know about the latest real estate insights.</p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="btn-primary text-sm">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/60">Buy</h4>
              <ul className="space-y-2">
                {["Properties for Sale", "Guide to Buying", "Mortgages", "Property Management", "Legal Services"].map((item) => (
                  <li key={item}>
                    <Link to="/buy" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/60">Sell</h4>
              <ul className="space-y-2">
                {["List your Property", "Guide to Selling", "Book a Valuation"].map((item) => (
                  <li key={item}>
                    <Link to="/list-property" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/60">Off Plan</h4>
              <ul className="space-y-2">
                {["New Projects", "Best Dubai Communities", "Top Dubai Developers", "Branded Residences"].map((item) => (
                  <li key={item}>
                    <Link to="/projects" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/60">Rent</h4>
              <ul className="space-y-2">
                {["Properties to Rent", "Guide to Renting", "Short Term Rentals", "Property Management"].map((item) => (
                  <li key={item}>
                    <Link to="/rent" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/60">About</h4>
              <ul className="space-y-2">
                {["About Us", "Meet The Team", "Our Awards", "Careers", "Blog"].map((item) => (
                  <li key={item}>
                    <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1">
              <span className="text-xl font-serif font-bold">HexaHome</span>
              <span className="text-xl font-serif font-bold text-accent">.</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>+971 4 892 5831</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>info@hexahomerealty.com</span>
              </div>
            </div>
            <p className="text-xs text-primary-foreground/40">© 2026 HexaHome Realty. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
