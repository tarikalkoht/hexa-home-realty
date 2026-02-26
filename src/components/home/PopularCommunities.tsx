import { Link } from "react-router-dom";

const communities = [
  "Dubai Marina", "Downtown Dubai", "Jumeirah Beach Residence", "Palm Jumeirah",
  "Dubai Hills Estate", "Business Bay", "Damac Lagoons", "The Springs",
  "Dubai Creek Harbour", "Emaar Beachfront", "DAMAC Hills", "Jumeirah Village Circle",
  "Jumeirah Golf Estates", "Sobha Hartland", "Al Habtoor City",
];

const PopularCommunities = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-main">
        <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
          Popular Properties in Dubai Communities
        </h2>
        <div className="flex flex-wrap gap-2">
          {communities.map((community) => (
            <Link
              key={community}
              to={`/areas`}
              className="px-4 py-2 bg-background border border-border rounded-full text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              {community}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCommunities;
