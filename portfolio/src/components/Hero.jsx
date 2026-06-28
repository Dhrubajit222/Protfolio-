import { motion } from "framer-motion";
import heroImage from "../assets/hero/dhrubajit.png";



function Hero() {
  return (
    <section
      id="home"
      className="hero-grid min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-md mb-6">

            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

            <span className="text-sm text-cyan-300">
              Available For Projects
            </span>

          </div>

          {/* Small Label */}
          <p className="uppercase tracking-[8px] text-cyan-400 mb-4">
            Full Stack Developer
          </p>

          {/* Heading */}
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">

            DHRUBAJIT

            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
              MAHURI
            </span>

          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10">

            Passionate Full Stack Developer focused on
            creating modern web applications, intelligent
            systems, and beautiful digital experiences using
            React, Django, Python, and Machine Learning.

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold hover:scale-105 transition-all duration-300">

              View Projects

            </button>

            <button className="px-8 py-4 rounded-full border border-white/20 backdrop-blur-md hover:border-cyan-400 transition-all duration-300">

              Download Resume

            </button>

          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-6">

            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-purple-400">
                5+
              </h3>
              <p className="text-gray-400 text-sm">
                Technologies
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >

          

          {/* Glow */}
          <div className="absolute w-[350px] h-[350px] bg-purple-500/30 blur-3xl rounded-full" />

          <div className="relative">

      <div className="absolute inset-0 bg-cyan-400/20 blur-[120px] rounded-full"></div>

      <img
          src={heroImage}
          alt="Dhrubajit"
          className="
          relative
          w-[500px]
          md:w-[650px]
          object-contain
          drop-shadow-[0_0_120px_rgba(34,211,238,0.6)]
          hover:scale-105
          transition-all
          duration-700
        "
        />

      </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;