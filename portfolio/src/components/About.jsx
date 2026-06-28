import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FaChartLine,
  FaBrain,
  FaMicrochip,
} from "react-icons/fa";

const services = [
  {
    title: "Data Analytics",
    icon: FaChartLine,
    color: "#22D3EE",
    desc: "Finding insights from complex data.",
  },
  {
    title: "Machine Learning",
    icon: FaBrain,
    color: "#A855F7",
    desc: "Building intelligent predictive models.",
  },
  {
    title: "Artificial Intelligence",
    icon: FaMicrochip,
    color: "#3B82F6",
    desc: "Creating smart digital solutions.",
  },
];

export default function About() {
  /* ================= Mouse Glow ================= */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const glowY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const glowLeft = useTransform(glowX, (v) => `${v}px`);
  const glowTop = useTransform(glowY, (v) => `${v}px`);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-[#02040a] py-32 text-white min-h-screen flex items-center justify-center select-none"
    >
      {/* ── Active Mouse Tracking Overlay Glow ── */}
      <motion.div
        style={{
          left: glowLeft,
          top: glowTop,
        }}
        className="absolute w-[350px] h-[350px] rounded-full bg-cyan-500/[0.07] blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
      />

      {/* Advanced Geometric Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── PERFECTLY VISIBLE BACKLIT NEON WATERMARK ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        
        {/* Outer Aura Expansion Light - ওয়াটারমার্কের ঠিক পেছনের ছড়ানো গ্লো */}
        <div className="absolute w-[90%] h-[45%] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16)_0%,rgba(168,85,247,0.08)_50%,transparent_75%)] blur-3xl animate-pulse duration-[4000ms]" />
        
        {/* Core High-Intensity Light Spot - অক্ষরের চারপাশে উজ্জ্বল ফোকাস লাইট */}
        <div className="absolute w-[600px] h-[220px] rounded-full bg-gradient-to-r from-cyan-500/[0.08] to-purple-500/[0.08] blur-[90px]" />

        <motion.h1
          animate={{
            opacity: [1, 0.85, 1],
            scale: [1, 1.005, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-[14vw] font-black tracking-[0.16em] uppercase font-sans text-center bg-gradient-to-b from-slate-200/[0.22] via-slate-400/[0.12] to-transparent bg-clip-text text-transparent whitespace-nowrap drop-shadow-[0_0_40px_rgba(34,211,238,0.22)]"
        >
          ABOUT
        </motion.h1>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        {/* ================= Header ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="uppercase tracking-[5px] text-cyan-400 text-[11px] font-mono font-bold bg-cyan-950/40 px-3 py-1 rounded border border-cyan-500/10 shadow-sm">
            System.Matrix_
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight text-white uppercase font-sans">
            Building Intelligence
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(6,182,212,0.15)]">
              Through Data
            </span>
          </h2>
        </motion.div>

        {/* ================= Dual Module Split Layout ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* ================= LEFT MODULE: CORE PHILOSOPHY ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="max-w-xl relative">
              <div className="w-20 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mb-8 shadow-[0_0_10px_#22d3ee]" />

              <h3 className="text-3xl font-extrabold leading-snug text-white font-sans tracking-tight">
                Designing Solutions
                <br />
                Powered by{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">
                  Data & AI
                </span>
              </h3>

              <p className="mt-6 text-gray-400 text-sm md:text-base leading-relaxed font-light">
                Passionate about building modern digital experiences using complex data architectures, modular machine learning patterns, and responsive artificial intelligence systems.
              </p>

              <blockquote className="mt-8 border-l-2 border-cyan-400 pl-5 text-slate-300 italic text-sm md:text-base leading-relaxed font-normal bg-gradient-to-r from-cyan-950/10 to-transparent py-2 rounded-r">
                "Simple ideas. Smart solutions. Meaningful impact."
              </blockquote>
            </div>
          </motion.div>

          {/* ================= RIGHT MODULE: SMART CAPABILITIES ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.04] bg-[#070b19]/60 backdrop-blur-xl p-5 transition-all duration-300 shadow-xl"
                >
                  {/* Dynamic Glowing Hover Border Framework */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                    style={{
                      border: `1px solid ${service.color}35`,
                      boxShadow: `inset 0 0 15px ${service.color}05`,
                    }}
                  />

                  {/* Micro Glass Shimmer Reflection */}
                  <div className="absolute -left-40 top-0 h-full w-20 rotate-12 bg-white/[0.02] blur-xl group-hover:left-[130%] transition-all duration-1000 pointer-events-none" />

                  {/* Laser Side-Border Strip */}
                  <div
                    className="absolute left-0 top-0 h-full w-[2px] transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                    style={{ background: service.color }}
                  />

                  <div className="relative flex items-center gap-5">
                    {/* Advanced Wave Floating Icon Container */}
                    <motion.div
                      animate={{
                        y: [0, -6, 0],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.4,
                      }}
                      className="w-14 h-14 rounded-xl flex items-center justify-center bg-slate-950/90 border flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}15, transparent)`,
                        borderColor: `${service.color}25`,
                        boxShadow: `0 0 20px ${service.color}10`,
                      }}
                    >
                      <Icon size={22} color={service.color} />
                    </motion.div>

                    {/* Service Meta Block */}
                    <div>
                      <h4 className="text-base font-bold text-white tracking-tight font-sans group-hover:text-cyan-300 transition-colors duration-200">
                        {service.title}
                      </h4>
                      <p className="text-gray-400 mt-1 text-xs md:text-sm leading-relaxed font-light">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}