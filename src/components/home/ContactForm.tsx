import { Phone, Mail, MessageCircle } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Speak with our Real Estate specialists today
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Get in touch for tailored guidance from our expert team. We're committed to assisting you through each phase of your journey.
            </p>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-accent transition-colors group">
                <MessageCircle className="text-accent" size={20} />
                <div>
                  <p className="font-medium text-sm text-foreground group-hover:text-accent">WhatsApp</p>
                  <p className="text-xs text-muted-foreground">Click to WhatsApp</p>
                </div>
              </a>
              <a href="tel:+97148925831" className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-accent transition-colors group">
                <Phone className="text-accent" size={20} />
                <div>
                  <p className="font-medium text-sm text-foreground group-hover:text-accent">Phone</p>
                  <p className="text-xs text-muted-foreground">+971 4 892 5831</p>
                </div>
              </a>
              <a href="mailto:info@hexahomerealty.com" className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-accent transition-colors group">
                <Mail className="text-accent" size={20} />
                <div>
                  <p className="font-medium text-sm text-foreground group-hover:text-accent">Email</p>
                  <p className="text-xs text-muted-foreground">info@hexahomerealty.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-secondary p-8 rounded-lg">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 rounded border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <select className="w-full px-4 py-3 rounded border border-border bg-background text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                <option>English</option>
                <option>Arabic</option>
              </select>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 rounded border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
              <button type="submit" className="btn-primary w-full text-sm">Submit Details</button>
              <p className="text-xs text-muted-foreground text-center">
                By clicking Submit, you agree to our Terms & Conditions and Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
