import sadhyaImg from "@/assets/sadhya.jpg";
import { MapPin, Calendar, Clock, Phone, Heart, Star, Sparkles } from "lucide-react";

const WHATSAPP_NUMBER = "919XXXXXXXXX"; // Replace with your WhatsApp number
const RSVP_MESSAGE = encodeURIComponent(
  "Hi! We'd love to attend Sadhya's 1st Birthday Party! 🎂🎀\n\nName: \nNumber of Guests: "
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating decorations */}
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center pt-8 pb-4 px-4">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          <p className="text-muted-foreground font-medium tracking-[0.3em] uppercase text-xs">You're Invited To</p>
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
        </div>
        <h1
          className="text-5xl md:text-7xl text-primary mb-1"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Sadhya's
        </h1>
        <p
          className="text-2xl md:text-3xl text-accent font-bold"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          1st Birthday Party!
        </p>

        {/* Barbie badge */}
        <div className="mt-4 bg-primary text-primary-foreground px-6 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg">
          ✨ Barbie Theme ✨
        </div>
      </section>

      {/* Photo Section */}
      <section className="flex justify-center py-6 px-4">
        <div className="relative">
          {/* Decorative ring */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-60 blur-sm" />
          <div className="absolute -inset-2 rounded-full border-4 border-primary/30" />
          <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
            <img
              src={sadhyaImg}
              alt="Birthday girl Sadhya"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Crown decoration */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-4xl">👑</div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full shadow">
            Turning ONE!
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="max-w-md mx-auto px-6 py-6 space-y-4">
        <DetailCard
          icon={<Calendar className="w-5 h-5 text-primary" />}
          title="Date"
          value="Saturday, 15th April 2026"
        />
        <DetailCard
          icon={<Clock className="w-5 h-5 text-primary" />}
          title="Time"
          value="4:00 PM Onwards"
        />
        <DetailCard
          icon={<MapPin className="w-5 h-5 text-primary" />}
          title="Venue"
          value="[Your Venue Name Here]"
          subtitle="[Full Address Line 1, Line 2, City - Pincode]"
        />
      </section>

      {/* Map Placeholder */}
      <section className="max-w-md mx-auto px-6 pb-6">
        <div className="rounded-2xl overflow-hidden border-2 border-border shadow-md bg-card">
          <div className="bg-secondary/50 p-3 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Location Map</span>
          </div>
          {/* Replace the src below with your Google Maps embed URL */}
          <div className="w-full h-48 bg-muted flex items-center justify-center">
            <a
              href="https://maps.google.com/?q=YOUR+ADDRESS+HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <MapPin className="w-8 h-8" />
              <span className="text-sm font-medium">Tap to open in Google Maps</span>
            </a>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="max-w-md mx-auto px-6 pb-10">
        <div className="bg-card rounded-3xl p-6 border-2 border-primary/20 shadow-xl text-center space-y-4">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-primary fill-primary" />
            ))}
          </div>
          <h2
            className="text-2xl text-primary"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            RSVP
          </h2>
          <p className="text-muted-foreground text-sm">
            Kindly confirm your presence by replying on WhatsApp 💕
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${RSVP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            <Phone className="w-5 h-5" />
            RSVP on WhatsApp
          </a>
          <p className="text-xs text-muted-foreground">
            Or call: <a href="tel:+919XXXXXXXXX" className="text-primary font-semibold underline">+91 9XXX XXX XXX</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center pb-8 px-4">
        <div className="flex justify-center gap-1 mb-2">
          <Heart className="w-4 h-4 text-primary fill-primary" />
          <Heart className="w-3 h-3 text-accent fill-accent" />
          <Heart className="w-4 h-4 text-primary fill-primary" />
        </div>
        <p
          className="text-lg text-primary"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          With love from Sadhya's Family
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          We can't wait to celebrate with you! 🎀
        </p>
      </footer>
    </div>
  );
};

const DetailCard = ({
  icon,
  title,
  value,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle?: string;
}) => (
  <div className="flex items-start gap-3 bg-card rounded-2xl p-4 border border-border shadow-sm">
    <div className="mt-0.5 bg-secondary rounded-full p-2">{icon}</div>
    <div>
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{title}</p>
      <p className="text-foreground font-bold">{value}</p>
      {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
    </div>
  </div>
);

const FloatingElements = () => (
  <>
    {["🎀", "🎂", "⭐", "💖", "🎈", "👛", "💎", "🌸"].map((emoji, i) => (
      <span
        key={i}
        className="absolute text-2xl opacity-20 select-none pointer-events-none"
        style={{
          top: `${10 + i * 12}%`,
          left: i % 2 === 0 ? `${5 + i * 3}%` : `${75 + i * 2}%`,
          animation: `float ${3 + i}s ease-in-out infinite alternate`,
        }}
      >
        {emoji}
      </span>
    ))}
    <style>{`
      @keyframes float {
        from { transform: translateY(0px) rotate(0deg); }
        to { transform: translateY(-20px) rotate(10deg); }
      }
    `}</style>
  </>
);

export default Index;
