import sadhyaImg from "@/assets/sadhya.jpg";
import { MapPin, Calendar, Clock, Phone, Heart, Star, Sparkles, Gift, PartyPopper, Cake, Music } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";

const WHATSAPP_NUMBER = "919XXXXXXXXX"; // Replace with your WhatsApp number
const RSVP_MESSAGE = encodeURIComponent(
  "Hi! We'd love to attend Sadhya's 1st Birthday Party! 🎂🎀\n\nName: \nNumber of Guests: "
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating decorations */}
      <FloatingElements />
      <ConfettiBurst />

      {/* Top Banner Ribbon */}
      <div className="w-full bg-gradient-to-r from-primary via-accent to-primary py-2 text-center">
        <p className="text-primary-foreground text-xs font-bold tracking-[0.4em] uppercase">
          🎉 You're Invited 🎉
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center pt-10 pb-4 px-4">
        {/* Decorative bunting */}
        <div className="absolute top-0 left-0 right-0 flex justify-center gap-0 text-3xl opacity-40 select-none">
          {"🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺"}
        </div>

        <div className="flex items-center gap-3 mb-3">
          <PartyPopper className="w-6 h-6 text-primary" />
          <p className="text-muted-foreground font-semibold tracking-[0.3em] uppercase text-xs">Come Celebrate</p>
          <PartyPopper className="w-6 h-6 text-primary scale-x-[-1]" />
        </div>
        <h1
          className="text-6xl md:text-8xl text-primary mb-1 drop-shadow-sm"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Sadhya's
        </h1>
        <div className="flex items-center gap-3">
          <span className="text-3xl">🎂</span>
          <p
            className="text-3xl md:text-4xl text-accent font-bold"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            1st Birthday Party!
          </p>
          <span className="text-3xl">🎂</span>
        </div>

        {/* Sparkle row */}
        <div className="flex items-center gap-2 mt-4">
          {[...Array(7)].map((_, i) => (
            <Star
              key={i}
              className="text-primary fill-primary"
              style={{
                width: i === 3 ? 20 : 12,
                height: i === 3 ? 20 : 12,
                opacity: i === 3 ? 1 : 0.4,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Photo Section */}
      <section className="flex justify-center py-8 px-4">
        <div className="relative">
          {/* Outer glow */}
          <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 blur-xl" />
          {/* Decorative ring */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-50 blur-sm" />
          <div className="absolute -inset-3 rounded-full border-[3px] border-dashed border-primary/30 animate-spin-slow" />
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-[5px] border-primary shadow-2xl">
            <img
              src={sadhyaImg}
              alt="Birthday girl Sadhya"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Crown decoration */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl drop-shadow-lg">👑</div>
          {/* Side decorations */}
          <div className="absolute top-1/4 -left-8 text-2xl animate-bounce">🎈</div>
          <div className="absolute top-1/3 -right-8 text-2xl animate-bounce" style={{ animationDelay: "0.5s" }}>🎈</div>
          <div className="absolute bottom-1/4 -left-6 text-xl animate-bounce" style={{ animationDelay: "1s" }}>🌟</div>
          <div className="absolute bottom-1/3 -right-6 text-xl animate-bounce" style={{ animationDelay: "0.3s" }}>🌟</div>
          {/* Turning ONE badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-bold px-6 py-1.5 rounded-full shadow-lg">
            ✨ Turning ONE! ✨
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-3 py-4">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
        <Cake className="w-5 h-5 text-primary" />
        <Gift className="w-5 h-5 text-accent" />
        <Music className="w-5 h-5 text-primary" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
      </div>

      {/* Countdown Timer */}
      <CountdownTimer />

      {/* Event Details */}
      <section className="max-w-md mx-auto px-6 py-4 space-y-4">
        <h2 className="text-center text-sm font-bold text-muted-foreground tracking-[0.3em] uppercase mb-2">
          Party Details
        </h2>
        <DetailCard
          icon={<Calendar className="w-5 h-5 text-primary" />}
          title="Date"
          value="Thursday, 23rd April 2026"
          emoji="📅"
        />
        <DetailCard
          icon={<Clock className="w-5 h-5 text-primary" />}
          title="Time"
          value="4:00 PM Onwards"
          emoji="⏰"
        />
        <DetailCard
          icon={<MapPin className="w-5 h-5 text-primary" />}
          title="Venue"
          value="Seasons 24 Banquets"
          subtitle="Landmark 24, Wagholi, Pune, SH Nagar, Road, Wagholi, Pune, Maharashtra 412207"
          emoji="📍"
        />
      </section>

      {/* Map Placeholder */}
      <section className="max-w-md mx-auto px-6 pb-6">
        <div className="rounded-2xl overflow-hidden border-2 border-border shadow-md bg-card">
          <div className="bg-gradient-to-r from-secondary to-secondary/50 p-3 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Location Map</span>
          </div>
          <div className="w-full h-48 bg-muted flex items-center justify-center">
            <a
              href="https://share.google/WpcxNhhkopoJyVVC7"
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

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-2 py-2">
        {["🎀", "💖", "🎀", "💖", "🎀"].map((e, i) => (
          <span key={i} className="text-lg opacity-50">{e}</span>
        ))}
      </div>

      {/* RSVP Section */}
      <section className="max-w-md mx-auto px-6 pb-10">
        <div className="bg-gradient-to-br from-card to-secondary/30 rounded-3xl p-8 border-2 border-primary/20 shadow-xl text-center space-y-5 relative overflow-hidden">
          {/* Corner decorations */}
          <span className="absolute top-3 left-4 text-xl opacity-30">🎁</span>
          <span className="absolute top-3 right-4 text-xl opacity-30">🎁</span>
          <span className="absolute bottom-3 left-4 text-xl opacity-30">🎊</span>
          <span className="absolute bottom-3 right-4 text-xl opacity-30">🎊</span>

          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-primary fill-primary" />
            ))}
          </div>
          <h2
            className="text-3xl text-primary"
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
            className="inline-flex items-center gap-2 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white font-bold py-3.5 px-10 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 text-lg"
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
      <footer className="text-center pb-10 px-4">
        <div className="flex justify-center gap-2 mb-3">
          <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
          <Heart className="w-5 h-5 text-accent fill-accent animate-pulse" style={{ animationDelay: "0.3s" }} />
          <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" style={{ animationDelay: "0.6s" }} />
        </div>
        <p
          className="text-xl text-primary"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          With love from Sadhya's Family
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          We can't wait to celebrate with you! 🎀🎉🎈
        </p>
        <div className="mt-4 flex justify-center gap-1">
          {"🩷🤍🩷🤍🩷🤍🩷🤍🩷".split("").map((e, i) => (
            <span key={i} className="text-xs opacity-40">{e}</span>
          ))}
        </div>
      </footer>
    </div>
  );
};

const DetailCard = ({
  icon,
  title,
  value,
  subtitle,
  emoji,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle?: string;
  emoji?: string;
}) => (
  <div className="flex items-start gap-3 bg-card rounded-2xl p-4 border border-border shadow-sm hover:shadow-md transition-shadow">
    <div className="mt-0.5 bg-secondary rounded-full p-2.5">{icon}</div>
    <div className="flex-1">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{title}</p>
      <p className="text-foreground font-bold">{value}</p>
      {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
    </div>
    {emoji && <span className="text-xl mt-1">{emoji}</span>}
  </div>
);

const FloatingElements = () => {
  const items = [
    { emoji: "🎀", top: 8, left: 3 },
    { emoji: "🎂", top: 15, left: 88 },
    { emoji: "⭐", top: 25, left: 6 },
    { emoji: "💖", top: 35, left: 92 },
    { emoji: "🎈", top: 45, left: 4 },
    { emoji: "🎁", top: 55, left: 90 },
    { emoji: "💎", top: 65, left: 7 },
    { emoji: "🌸", top: 75, left: 85 },
    { emoji: "🧁", top: 20, left: 93 },
    { emoji: "🍭", top: 40, left: 2 },
    { emoji: "🎊", top: 60, left: 95 },
    { emoji: "🪅", top: 80, left: 5 },
    { emoji: "🍬", top: 88, left: 91 },
    { emoji: "🎵", top: 50, left: 96 },
    { emoji: "✨", top: 30, left: 1 },
    { emoji: "🦋", top: 70, left: 94 },
  ];

  return (
    <>
      {items.map((item, i) => (
        <span
          key={i}
          className="absolute text-2xl opacity-15 select-none pointer-events-none"
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            animation: `float ${3 + (i % 5)}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          {item.emoji}
        </span>
      ))}
      <style>{`
        @keyframes float {
          from { transform: translateY(0px) rotate(0deg); }
          to { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  );
};

const ConfettiBurst = () => {
  const confettiColors = [
    "hsl(330, 80%, 55%)",
    "hsl(340, 90%, 65%)",
    "hsl(300, 40%, 70%)",
    "hsl(50, 90%, 60%)",
    "hsl(180, 60%, 60%)",
    "hsl(280, 50%, 65%)",
  ];

  return (
    <>
      {confettiColors.flatMap((color, ci) =>
        [0, 1, 2].map((j) => (
          <div
            key={`${ci}-${j}`}
            className="absolute w-2 h-2 rounded-full opacity-20 pointer-events-none"
            style={{
              backgroundColor: color,
              top: `${5 + ci * 15 + j * 5}%`,
              left: `${10 + ci * 14 + j * 8}%`,
              animation: `confetti-fall ${4 + j}s ease-in-out infinite`,
              animationDelay: `${ci * 0.5 + j * 0.3}s`,
            }}
          />
        ))
      )}
      <style>{`
        @keyframes confetti-fall {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(15px) rotate(180deg); opacity: 0.35; }
        }
      `}</style>
    </>
  );
};

export default Index;
