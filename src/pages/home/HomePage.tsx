import HeroSection from "../../sections/HeroSection";
import HowItWorksSection from "../../sections/HowItWorksSection";
import WhySection from "../../sections/WhySection";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, oklch(0.67 0.19 40) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute top-1/3 -right-48 w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, oklch(0.78 0.15 175) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -bottom-24 left-1/3 w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, oklch(0.72 0.16 230) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.6 0.01 265) 1px, transparent 1px), linear-gradient(90deg, oklch(0.6 0.01 265) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <HowItWorksSection />
        <WhySection />
      </div>
    </div>
  );
}