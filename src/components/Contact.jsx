import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

function Contact() {

  return (

    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 py-24 relative overflow-hidden flex items-center justify-center"
    >

      {/* Glow */}

      <div className="absolute w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full top-20 left-20" />

      <div className="absolute w-96 h-96 bg-purple-500/10 blur-3xl rounded-full bottom-20 right-20" />

      <motion.div

        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 1 }}

        className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl p-12 max-w-3xl w-full text-center shadow-2xl shadow-cyan-500/20"
      >

        <h2 className="text-6xl font-bold mb-8">

          Contact <span className="text-cyan-400">Me</span>

        </h2>

        <p className="text-gray-400 text-xl mb-10">

          Let's build something amazing together 🚀

        </p>

        {/* Buttons */}

        <div className="flex justify-center gap-6 mb-10">

          <a
            href="#"
            className="text-4xl hover:text-cyan-400 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            className="text-4xl hover:text-cyan-400 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="#"
            className="text-4xl hover:text-cyan-400 transition duration-300"
          >
            <FaInstagram />
          </a>

        </div>

        {/* Resume Button */}

        <button className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 transition duration-300 text-black font-bold shadow-lg shadow-cyan-500/40">

          Download CV

        </button>

      </motion.div>

    </section>
  )
}

export default Contact