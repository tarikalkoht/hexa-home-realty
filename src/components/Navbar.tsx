import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, ChevronDown, ChevronRight, Globe } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownColumn {
  title?: string;
  items: DropdownItem[];
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownColumn[];
}

const navLinks: NavItem[] = [
  {
    label: "Buy",
    href: "/buy",
    dropdown: [
      {
        title: "Property Type",
        items: [
          { label: "Apartments for Sale", href: "/buy?type=apartment" },
          { label: "Villas for Sale", href: "/buy?type=villa" },
          { label: "Townhouses for Sale", href: "/buy?type=townhouse" },
          { label: "Penthouses for Sale", href: "/buy?type=penthouse" },
          { label: "Duplexes for Sale", href: "/buy?type=duplex" },
          { label: "Commercial for Sale", href: "/buy?type=commercial" },
        ],
      },
      {
        title: "Popular Areas",
        items: [
          { label: "Dubai Marina", href: "/buy?area=marina" },
          { label: "Downtown Dubai", href: "/buy?area=downtown" },
          { label: "Palm Jumeirah", href: "/buy?area=palm" },
          { label: "Business Bay", href: "/buy?area=business-bay" },
          { label: "JVC", href: "/buy?area=jvc" },
          { label: "Dubai Hills", href: "/buy?area=dubai-hills" },
        ],
      },
    ],
  },
  {
    label: "Rent",
    href: "/rent",
    dropdown: [
      {
        title: "Property Type",
        items: [
          { label: "Apartments for Rent", href: "/rent?type=apartment" },
          { label: "Villas for Rent", href: "/rent?type=villa" },
          { label: "Townhouses for Rent", href: "/rent?type=townhouse" },
          { label: "Penthouses for Rent", href: "/rent?type=penthouse" },
          { label: "Commercial for Rent", href: "/rent?type=commercial" },
        ],
      },
      {
        title: "Popular Areas",
        items: [
          { label: "Dubai Marina", href: "/rent?area=marina" },
          { label: "Downtown Dubai", href: "/rent?area=downtown" },
          { label: "JBR", href: "/rent?area=jbr" },
          { label: "Business Bay", href: "/rent?area=business-bay" },
          { label: "DIFC", href: "/rent?area=difc" },
          { label: "JLT", href: "/rent?area=jlt" },
        ],
      },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    dropdown: [
      {
        title: "By Status",
        items: [
          { label: "Off Plan Projects", href: "/projects?status=offplan" },
          { label: "Ready Projects", href: "/projects?status=ready" },
          { label: "Under Construction", href: "/projects?status=construction" },
        ],
      },
      {
        title: "Popular Projects",
        items: [
          { label: "Emaar Beachfront", href: "/projects/emaar-beachfront" },
          { label: "Dubai Creek Harbour", href: "/projects/creek-harbour" },
          { label: "MBR City", href: "/projects/mbr-city" },
          { label: "Dubai South", href: "/projects/dubai-south" },
        ],
      },
    ],
  },
  {
    label: "Developers",
    href: "/developers",
    dropdown: [
      {
        title: "Top Developers",
        items: [
          { label: "Emaar Properties", href: "/developers/emaar" },
          { label: "DAMAC Properties", href: "/developers/damac" },
          { label: "Nakheel", href: "/developers/nakheel" },
          { label: "Meraas", href: "/developers/meraas" },
          { label: "Sobha Realty", href: "/developers/sobha" },
          { label: "Binghatti", href: "/developers/binghatti" },
        ],
      },
    ],
  },
  {
    label: "Areas",
    href: "/areas",
    dropdown: [
      {
        title: "Popular Communities",
        items: [
          { label: "Dubai Marina", href: "/areas/dubai-marina" },
          { label: "Downtown Dubai", href: "/areas/downtown" },
          { label: "Palm Jumeirah", href: "/areas/palm-jumeirah" },
          { label: "Business Bay", href: "/areas/business-bay" },
          { label: "JVC", href: "/areas/jvc" },
          { label: "Dubai Hills Estate", href: "/areas/dubai-hills" },
        ],
      },
      {
        title: "Emerging Areas",
        items: [
          { label: "Dubai South", href: "/areas/dubai-south" },
          { label: "MBR City", href: "/areas/mbr-city" },
          { label: "Tilal Al Ghaf", href: "/areas/tilal-al-ghaf" },
          { label: "Town Square", href: "/areas/town-square" },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      {
        title: "Our Services",
        items: [
          { label: "Property Management", href: "/services/property-management" },
          { label: "Mortgage Services", href: "/services/mortgage" },
          { label: "Holiday Homes", href: "/services/holiday-homes" },
          { label: "Property Valuation", href: "/services/valuation" },
          { label: "Conveyancing", href: "/services/conveyancing" },
        ],
      },
    ],
  },
  { label: "Blogs", href: "/blog" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const showSolid = !isHome || scrolled;

  return (
    <header className={`w-full z-50 transition-all duration-300 ${
      isHome ? "fixed top-0 left-0" : "bg-background border-b border-border"
    } ${isHome && scrolled ? "bg-primary shadow-lg" : ""} ${isHome && !scrolled ? "bg-transparent" : ""}`}>
      <div className="container-main flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-0.5">
          <span className={`text-2xl font-serif font-bold tracking-tight ${isHome ? "text-primary-foreground" : "text-primary"}`}>
            HexaHome
          </span>
          <span className="text-2xl font-serif font-bold text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={link.href}
                className={`nav-link flex items-center gap-1 px-4 py-6 ${
                  isHome
                    ? "text-primary-foreground/90 hover:text-primary-foreground"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`}
                  />
                )}
              </Link>

              {/* Dropdown */}
              {link.dropdown && activeDropdown === link.label && (
                <div
                  className="absolute top-full left-0 bg-background border border-border rounded-lg shadow-xl min-w-[480px] animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="p-6 flex gap-8">
                    {link.dropdown.map((column, colIdx) => (
                      <div key={colIdx} className="flex-1 min-w-[200px]">
                        {column.title && (
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                            {column.title}
                          </h4>
                        )}
                        <ul className="space-y-1">
                          {column.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                to={item.href}
                                className="flex items-center gap-2 px-3 py-2 text-sm text-foreground/80 hover:text-accent hover:bg-accent/5 rounded-md transition-colors duration-150"
                              >
                                <ChevronRight size={12} className="text-accent opacity-0 group-hover:opacity-100" />
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border px-6 py-3">
                    <Link
                      to={link.href}
                      className="text-sm font-medium text-accent hover:underline"
                    >
                      View All {link.label} →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-3">
          <button className={`flex items-center gap-1.5 text-sm px-3 py-2 rounded-md transition-colors ${
            isHome ? "text-primary-foreground/80 hover:text-primary-foreground" : "text-foreground/80 hover:text-foreground"
          }`}>
            <Globe size={14} />
            <span>USD</span>
            <ChevronDown size={12} />
          </button>
          <Link
            to="/login"
            className={`flex items-center gap-2 px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
              isHome
                ? "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                : "border-border text-foreground hover:bg-secondary"
            }`}
          >
            <User size={16} />
            Login
          </Link>
          <Link to="/list-property" className="btn-primary text-sm !py-2.5">
            List Your Property
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <X size={24} className={isHome ? "text-primary-foreground" : "text-foreground"} />
          ) : (
            <Menu size={24} className={isHome ? "text-primary-foreground" : "text-foreground"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-slide-in max-h-[calc(100vh-72px)] overflow-y-auto">
          <div className="container-main py-4 flex flex-col">
            {navLinks.map((link) => (
              <div key={link.href} className="border-b border-border/50">
                <div className="flex items-center justify-between">
                  <Link
                    to={link.href}
                    className="flex-1 text-foreground py-3 text-sm font-medium"
                    onClick={() => !link.dropdown && setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                      className="p-3 text-muted-foreground"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${mobileExpanded === link.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>
                {link.dropdown && mobileExpanded === link.label && (
                  <div className="pb-3 pl-4 space-y-4">
                    {link.dropdown.map((column, colIdx) => (
                      <div key={colIdx}>
                        {column.title && (
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                            {column.title}
                          </p>
                        )}
                        <ul className="space-y-1">
                          {column.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                to={item.href}
                                className="block py-1.5 text-sm text-foreground/70 hover:text-accent transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex gap-3 pt-4">
              <Link to="/login" className="btn-outline-light flex-1 text-center text-sm" onClick={() => setMobileOpen(false)}>
                Login
              </Link>
              <Link to="/list-property" className="btn-primary flex-1 text-center text-sm" onClick={() => setMobileOpen(false)}>
                List Property
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
