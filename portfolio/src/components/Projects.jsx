import { motion } from "framer-motion"

const projects = [

  {
    title: "Medical Appointment System",
    description:
      "A full-stack medical booking platform using React, Firebase and Django.",
  },

  {
    title: "Machine Learning Project",
    description:
      "Predictive machine learning model using Python and Scikit-learn.",
  },

  {
    title: "Portfolio Website",
    description:
      "Modern animated portfolio using React, Tailwind and Framer Motion.",
  },

]

function Projects() {

  return (

    <section id="projects" className="min-h-screen bg-black text-white px-6 py-24 relative overflow-hidden">

      {/* Glow Effects */}

      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}

        className="text-center mb-20"
      >

        <h2 className="text-6xl font-bold mb-6">

          My <span className="text-cyan-400">Projects</span>

        </h2>

        <p className="text-gray-400 text-xl">

          Some of my featured works and creations

        </p>

      </motion.div>

      {/* Project Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {projects.map((project, index) => (

          <motion.div
            key={index}

            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}

            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: 5,
            }}

            className="group relative backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-cyan-500/40 transition duration-500"
          >

            {/* Animated Top Border */}

            <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 animate-pulse" />

            {/* Content */}

            <div className="p-8">

              <h3 className="text-3xl font-bold mb-4 text-cyan-300">

                {project.title}

              </h3>

              <p className="text-gray-400 mb-8 leading-relaxed">

                {project.description}

              </p>

              {/* Buttons */}

              <div className="flex gap-4">

                <button className="px-5 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 transition duration-300 text-black font-bold">

                  Live Demo

                </button>

                <button className="px-5 py-3 rounded-full border border-cyan-400 hover:bg-cyan-500/20 transition duration-300">

                  GitHub

                </button>

              </div>

            </div>

            {/* Hover Glow */}

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-cyan-500/5 pointer-events-none" />

          </motion.div>

        ))}

      </div>

    </section>
  )
}

export default Projects