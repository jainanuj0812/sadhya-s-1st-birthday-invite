import sadhyaImg from "@/assets/sadhya.jpg";
import backdropImg from "@/assets/image.png";
import { MapPin, Calendar, Clock, Phone, Heart, Star, Sparkles, Gift, PartyPopper, Cake, Music, Download } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import { 
  BarbieHeart, 
  BarbieCrown, 
  BarbieDress, 
  BarbieShoe, 
  BarbieBag, 
  BarbieMirror, 
  BarbieBow, 
  BarbieFlower,
  BarbieCastle,
  BarbieMagicWand
} from "@/components/BarbieElements";
import { BarbieIllustration } from "@/components/BarbieIllustration";
import { SparkleEffect } from "@/components/SparkleEffect";
import { downloadInvitation } from "@/utils/pdfGenerator";

const WHATSAPP_NUMBER = "919XXXXXXXXX"; // Replace with your WhatsApp number
const RSVP_MESSAGE = encodeURIComponent(
  "Hi! We'd love to attend Sadhya's 1st Birthday Party! 🎂🎀\n\nName: \nNumber of Guests: "
);

const Index = () => {
  return (
    <div id="invitation-container" className="min-h-screen bg-background relative overflow-hidden">
      {/* Backdrop Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 animate-pulse"
        style={{
          backgroundImage: `url(${backdropImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animationDuration: '4s',
        }}
      />
      
      {/* Overlay for better readability with Barbie gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-primary/5 to-background/85" />
      
      {/* Magical sparkle overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <SparkleEffect className="w-full h-full opacity-30" />
      </div>
      
      {/* Content container */}
      <div className="relative z-10">
        {/* Floating decorations */}
        <FloatingElements />
        <ConfettiBurst />

      {/* Top Banner Ribbon */}
      <div className="w-full bg-gradient-to-r from-primary via-accent to-primary py-2 text-center relative">
        <p className="text-primary-foreground text-xs font-bold tracking-[0.4em] uppercase">
          🎉 You're Invited 🎉
        </p>
        {/* Barbie decorative elements on banner */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <BarbieBow className="w-6 h-6" />
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <BarbieBow className="w-6 h-6" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center pt-10 pb-4 px-4">
        {/* Decorative bunting with Barbie elements */}
        <div className="absolute top-0 left-0 right-0 flex justify-center gap-2 text-3xl opacity-40 select-none">
          <BarbieCrown className="w-8 h-8 opacity-60" />
          <BarbieBow className="w-6 h-6 opacity-60" />
          <BarbieHeart className="w-6 h-6 opacity-60" />
          <BarbieBow className="w-6 h-6 opacity-60" />
          <BarbieCrown className="w-8 h-8 opacity-60" />
        </div>

        <div className="flex items-center gap-3 mb-3">
          <PartyPopper className="w-6 h-6 text-primary" />
          <p className="text-muted-foreground font-semibold tracking-[0.3em] uppercase text-xs">Come Celebrate</p>
          <PartyPopper className="w-6 h-6 text-primary scale-x-[-1]" />
        </div>
        <h1
          className="text-6xl md:text-8xl text-primary mb-1 drop-shadow-sm relative"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Sadhya's
          {/* Small Barbie elements around name */}
          <BarbieCrown className="absolute -top-4 -right-2 w-8 h-8 opacity-80" />
          <BarbieHeart className="absolute -bottom-2 -left-2 w-6 h-6 opacity-60" />
        </h1>
        <div className="flex items-center gap-3 mt-10">
          <span className="text-3xl">🎂</span>
          <p
            className="text-3xl md:text-4xl text-accent font-bold"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            1st Birthday Party!
          </p>
          <span className="text-3xl">🎂</span>
        </div>

        {/* Sparkle row with Barbie elements */}
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
        
        {/* Additional Barbie decorative row */}
        <div className="flex items-center gap-3 mt-2 opacity-70">
          <BarbieBag className="w-5 h-5" />
          <BarbieShoe className="w-5 h-5" />
          <BarbieCastle className="w-6 h-6" />
          <BarbieMagicWand className="w-5 h-5" />
          <BarbieDress className="w-5 h-5" />
          <BarbieShoe className="w-5 h-5" />
          <BarbieBag className="w-5 h-5" />
        </div>
      </section>

      {/* Photo Section */}
      <section className="flex justify-center py-8 px-4">
        <div className="relative">
          {/* Sparkle effect overlay */}
          <SparkleEffect className="w-56 h-56 md:w-72 md:h-72" />
          
          {/* Outer glow */}
          <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 blur-xl" />
          {/* Decorative ring */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-50 blur-sm" />
          <div className="absolute -inset-3 rounded-full border-[3px] border-dashed border-primary/30 animate-spin-slow" />
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-[5px] border-primary shadow-2xl">
            <img
              src={sadhyaImg}
              alt="Birthday girl Sadhya"
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Crown decoration */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl drop-shadow-lg">
            <BarbieCrown className="w-12 h-12 drop-shadow-lg" color="#FFD700" />
          </div>
          {/* Barbie-themed side decorations */}
          <div className="absolute top-1/4 -left-8 animate-bounce">
            <BarbieBag className="w-8 h-8" />
          </div>
          <div className="absolute top-1/3 -right-8 animate-bounce" style={{ animationDelay: "0.5s" }}>
            <BarbieDress className="w-8 h-8" />
          </div>
          <div className="absolute bottom-1/4 -left-6 animate-bounce" style={{ animationDelay: "1s" }}>
            <BarbieShoe className="w-6 h-6" />
          </div>
          <div className="absolute bottom-1/3 -right-6 animate-bounce" style={{ animationDelay: "0.3s" }}>
            <BarbieMirror className="w-6 h-6" />
          </div>
          {/* Additional floating Barbie elements */}
          <div className="absolute top-10 left-10 opacity-60 animate-pulse">
            <BarbieFlower className="w-5 h-5" />
          </div>
          <div className="absolute top-10 right-10 opacity-60 animate-pulse" style={{ animationDelay: "1s" }}>
            <BarbieHeart className="w-5 h-5" />
          </div>
          <div className="absolute bottom-10 left-10 opacity-60 animate-pulse" style={{ animationDelay: "0.5s" }}>
            <BarbieBow className="w-4 h-4" />
          </div>
          <div className="absolute bottom-10 right-10 opacity-60 animate-pulse" style={{ animationDelay: "1.5s" }}>
            <BarbieFlower className="w-4 h-4" />
          </div>
          {/* Turning ONE badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-bold px-6 py-1.5 rounded-full shadow-lg whitespace-nowrap">
            ✨ Turning ONE! ✨
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-3 py-4">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
        <BarbieBow className="w-5 h-5" />
        <BarbieHeart className="w-5 h-5" />
        <BarbieCrown className="w-5 h-5" />
        <BarbieHeart className="w-5 h-5" />
        <BarbieBow className="w-5 h-5" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
      </div>

      {/* Countdown Timer */}
      <div data-exclude-pdf="true">
        <CountdownTimer />
      </div>
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
          value="6:00 PM Onwards"
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
      <section data-exclude-pdf="true" className="max-w-md mx-auto px-6 pb-6">
        <div className="rounded-2xl overflow-hidden border-2 border-border shadow-md bg-card">
          <div className="bg-gradient-to-r from-secondary to-secondary/50 p-3 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Location Map</span>
          </div>
          <div className="w-full h-48 bg-muted overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.8865885885885!2d73.98765412406236!3d18.601234999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c360c0abb6eb%3A0x54569d8f4b0f8d55!2sSeasons%2024%20Banquets%2C%20Road%2C%20Wagholi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1648536754123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Seasons 24 Banquets Location"
            />
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-2 py-2">
        <BarbieHeart className="w-4 h-4 opacity-50" />
        <BarbieBow className="w-4 h-4 opacity-50" />
        <BarbieHeart className="w-4 h-4 opacity-50" />
        <BarbieBow className="w-4 h-4 opacity-50" />
        <BarbieHeart className="w-4 h-4 opacity-50" />
      </div>

      {/* PDF Download Section */}
      <section className="max-w-md mx-auto px-6 pb-4">
        <div 
          data-exclude-pdf="true"
          className="bg-gradient-to-br from-secondary/50 to-primary/10 rounded-2xl p-6 border border-primary/20 shadow-lg text-center space-y-3"
        >
          <div className="flex justify-center gap-2">
            <BarbieBag className="w-6 h-6" />
            <BarbieMirror className="w-6 h-6" />
            <BarbieBag className="w-6 h-6" />
          </div>
          <h3
            className="text-2xl text-primary"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            Save the Date!
          </h3>
          <p className="text-muted-foreground text-sm">
            Download this beautiful invitation to share with family & friends 💕
          </p>
          <button
            onClick={downloadInvitation}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold py-3 px-6 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 text-sm"
          >
            <Download className="w-4 h-4" />
            Download Invitation PDF
          </button>
        </div>
      </section>

      {/* RSVP Section */}
      <section data-exclude-pdf="true" className="max-w-md mx-auto px-6 pb-10">
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
            Or call: <a href="tel:+918962239907" className="text-primary font-semibold underline">+91 89622 39907</a>
          </p>
        </div>
      </section>

      {/* Humble Invitation Message for PDF */}
      <section className="max-w-md mx-auto px-6 pb-6 pdf-only">
        <div className="bg-gradient-to-br from-card to-secondary/30 rounded-3xl p-6 border-2 border-primary/20 shadow-lg text-center space-y-4">
          <div className="flex justify-center gap-1">
            <BarbieHeart className="w-5 h-5 opacity-60" />
            <BarbieCrown className="w-6 h-6 opacity-80" />
            <BarbieHeart className="w-5 h-5 opacity-60" />
          </div>
          <h3
            className="text-2xl text-primary"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            You're Invited
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            We would be truly honored and delighted to have you join us in celebrating this precious milestone in little Sadhya's life. Your presence would make our joy complete as we create beautiful memories together.
          </p>
          <div className="flex justify-center gap-2 pt-2">
            <BarbieFlower className="w-4 h-4 opacity-50" />
            <BarbieBow className="w-4 h-4 opacity-50" />
            <BarbieFlower className="w-4 h-4 opacity-50" />
          </div>
          <p className="text-sm text-primary font-medium italic">
            With warm regards & love ✨
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center pb-10 px-4">
        <div className="flex justify-center gap-2 mb-3">
          <BarbieHeart className="w-4 h-4 animate-pulse" />
          <BarbieHeart className="w-5 h-5 animate-pulse" style={{ animationDelay: "0.3s" }} />
          <BarbieHeart className="w-4 h-4 animate-pulse" style={{ animationDelay: "0.6s" }} />
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
          <BarbieBow className="w-3 h-3 opacity-40" />
          <BarbieHeart className="w-3 h-3 opacity-40" />
          <BarbieBow className="w-3 h-3 opacity-40" />
          <BarbieHeart className="w-3 h-3 opacity-40" />
          <BarbieBow className="w-3 h-3 opacity-40" />
          <BarbieHeart className="w-3 h-3 opacity-40" />
          <BarbieBow className="w-3 h-3 opacity-40" />
          <BarbieHeart className="w-3 h-3 opacity-40" />
          <BarbieBow className="w-3 h-3 opacity-40" />
        </div>
      </footer>
      </div>
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

  const barbieElements = [
    { component: <BarbieCrown className="w-6 h-6 opacity-20" />, top: 12, left: 10 },
    { component: <BarbieBow className="w-5 h-5 opacity-15" />, top: 28, left: 85 },
    { component: <BarbieHeart className="w-5 h-5 opacity-20" />, top: 42, left: 8 },
    { component: <BarbieDress className="w-6 h-6 opacity-15" />, top: 58, left: 88 },
    { component: <BarbieShoe className="w-4 h-4 opacity-20" />, top: 72, left: 12 },
    { component: <BarbieBag className="w-5 h-5 opacity-15" />, top: 85, left: 80 },
    { component: <BarbieMirror className="w-5 h-5 opacity-20" />, top: 18, left: 82 },
    { component: <BarbieFlower className="w-6 h-6 opacity-15" />, top: 48, left: 15 },
    { component: <BarbieCastle className="w-7 h-7 opacity-10" />, top: 32, left: 5 },
    { component: <BarbieMagicWand className="w-5 h-5 opacity-15" />, top: 65, left: 92 },
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
      {barbieElements.map((item, i) => (
        <div
          key={`barbie-${i}`}
          className="absolute select-none pointer-events-none"
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            animation: `float ${4 + (i % 3)}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          {item.component}
        </div>
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
