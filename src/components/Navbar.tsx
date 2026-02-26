import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Buy", href: "/buy" },
  { label: "Rent", href: "/rent" },
  { label: "Projects", href: "/projects" },
  { label: "Developers", href: "/developers" },
  { label: "Areas", href: "/areas" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blog" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={`w-full z-50 ${isHome ? "absolute top-0 left-0" : "bg-background border-b border-border"}`}>
      <div className="container-main flex items-center justify-between h-[72px]">
        <Link to="/" className="flex items-center gap-1">
          <span className={`text-2xl font-serif font-bold tracking-tight ${isHome ? "text-primary-foreground" : "text-primary"}`}>
            HexaHome
          </span>
          <span className={`text-2xl font-serif font-bold ${isHome ? "text-accent" : "text-accent"}`}>.</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`nav-link ${isHome ? "text-primary-foreground/90 hover:text-primary-foreground" : "text-foreground/80 hover:text-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button className={`flex items-center gap-1 text-sm ${isHome ? "text-primary-foreground/80" : "text-foreground/80"}`}>
            <span>USD</span>
            <ChevronDown size={14} />
          </button>
          <Link
            to="/login"
            className={`flex items-center gap-2 px-4 py-2 rounded-md border text-sm font-medium ${
              isHome
                ? "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                : "border-border text-foreground hover:bg-secondary"
            }`}
          >
            <User size={16} />
            Login
          </Link>
          <Link to="/list-property" className="btn-primary text-sm">
            List Your Property
          </Link>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X size={24} className={isHome ? "text-primary-foreground" : "text-foreground"} />
          ) : (
            <Menu size={24} className={isHome ? "text-primary-foreground" : "text-foreground"} />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-slide-in">
          <div className="container-main py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-foreground py-2 border-b border-border/50 text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-3">
              <Link to="/login" className="btn-outline-light flex-1 text-center text-sm">Login</Link>
              <Link to="/list-property" className="btn-primary flex-1 text-center text-sm">List Property</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
