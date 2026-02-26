import { Star } from "lucide-react";

const reviews = [
  {
    name: "Bashar Masalha",
    time: "2 months ago",
    title: "An Honest Approach to Real Estate",
    text: "I worked with the team and it was an exceptional experience. They combine deep market knowledge with genuine care for their clients.",
  },
  {
    name: "Anadi Mishra",
    time: "2 months ago",
    title: "Expert Guidance and Value-Driven Solutions",
    text: "An exceptional individual and a highly astute property professional in the UAE. Delivered outstanding results for my investment.",
  },
  {
    name: "Violin Lee",
    time: "4 months ago",
    title: "A Supportive and Professional Experience",
    text: "Finding the right apartment wasn't always easy, but they stayed patient, professional, and supportive throughout the entire process.",
  },
  {
    name: "M. Khan",
    time: "1 year ago",
    title: "Smooth Relocation Experience",
    text: "Relocating to Dubai for work was a big move, and finding a new home was stressful. HexaHome made the entire process seamless.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-main">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground">Why Our Clients Trust Us</h2>
            <p className="text-muted-foreground mt-2">Discover what our customers are saying about their experiences.</p>
          </div>
          <a href="#" className="hidden sm:inline-block btn-outline-light text-sm">See all reviews</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.time}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <h4 className="font-sans font-semibold text-sm text-foreground mb-2">{review.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
