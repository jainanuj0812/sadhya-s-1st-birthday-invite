import { useState, useEffect } from "react";

const PARTY_DATE = new Date("2026-04-23T16:00:00");

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-md mx-auto px-6 py-6">
      <h2 className="text-center text-sm font-bold text-muted-foreground tracking-[0.3em] uppercase mb-4">
        🎉 Counting Down 🎉
      </h2>
      <div className="flex justify-center gap-3">
        <TimeBox value={timeLeft.days} label="Days" />
        <TimeBox value={timeLeft.hours} label="Hours" />
        <TimeBox value={timeLeft.minutes} label="Minutes" />
        <TimeBox value={timeLeft.seconds} label="Seconds" />
      </div>
    </section>
  );
};

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
      {String(value).padStart(2, "0")}
    </div>
    <span className="text-xs text-muted-foreground mt-1.5 font-semibold uppercase tracking-wider">
      {label}
    </span>
  </div>
);

function getTimeLeft() {
  const diff = Math.max(0, PARTY_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default CountdownTimer;
