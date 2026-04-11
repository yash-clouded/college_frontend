import { motion } from "motion/react";
import { BarChart3, LineChart, PieChart, TrendingUp } from "lucide-react";

export default function AnalysisPage() {
  return (
    <div className="relative min-h-screen px-4 sm:px-6 overflow-hidden pt-24 pb-16">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, oklch(0.72 0.16 175) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, oklch(0.67 0.19 40) 0%, transparent 70%)",
            filter: "blur(55px)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/40 px-3 py-1.5 text-xs text-muted-foreground mb-4">
            <TrendingUp size={14} className="text-neon-teal" aria-hidden />
            Insights
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
            Consultation Analysis
          </h1>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
            Coming Soon: Comprehensive data insights on your college selection trends, 
            market demand for different branches, and personalized session performance metrics.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: BarChart3, title: "Market Trends", desc: "Real-time analysis of popular colleges and branches.", color: "text-neon-teal" },
            { icon: LineChart, title: "Performance", desc: "Track your booking growth and student satisfaction.", color: "text-neon-orange" },
            { icon: PieChart, title: "Branch Demand", desc: "Breakdown of demand across Engineering & Medical streams.", color: "text-blue-500" },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 + (i * 0.1) }}
              className="glass p-6 rounded-3xl border border-border/50 flex flex-col items-center text-center group hover:bg-white/5 transition-all"
            >
              <div className={`p-4 rounded-2xl bg-white/5 mb-4 group-hover:scale-110 transition-transform ${card.color}`}>
                <card.icon size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 p-8 rounded-3xl border border-dashed border-border/60 flex flex-col items-center justify-center text-center opacity-60"
        >
          <div className="h-12 w-12 rounded-full border-2 border-border animate-pulse mb-4" />
          <p className="text-sm font-medium tracking-widest uppercase">Building your dashboard analytics...</p>
        </motion.div>
      </div>
    </div>
  );
}
