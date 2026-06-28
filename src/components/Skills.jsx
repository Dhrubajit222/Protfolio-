import { motion } from "framer-motion";
import {
  SiReact,
  SiPython,
  SiJavascript,
  SiDjango,
  SiGithub,
  SiMysql,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Python", icon: SiPython, color: "#4B8BBE" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Django", icon: SiDjango, color: "#0C4B33" },
  { name: "Git", icon: SiGit, color: "#F1502F" },
  { name: "GitHub", icon: SiGithub, color: "#E2E8F0" },
  { name: "SQL", icon: SiMysql, color: "#F97316" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
];

const itemVariant = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        bg-gradient-to-b
        from-black
        via-[#07111f]
        to-black
        text-white
        py-28
        px-6
        overflow-hidden
      "
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full" />

      {/* Giant Watermark */}

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          text-[220px]
          md:text-[280px]
          font-black
          text-white/[0.02]
          select-none
          pointer-events-none
        "
      >
        SKILLS
      </div>

      {/* AI Neural Network Lines */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[25%] left-[12%] w-80 h-[1px] bg-cyan-500/10 rotate-12" />

        <div className="absolute top-[38%] left-[45%] w-60 h-[1px] bg-cyan-500/10 -rotate-12" />

        <div className="absolute top-[58%] left-[20%] w-96 h-[1px] bg-cyan-500/10 rotate-6" />

        <div className="absolute top-[68%] left-[55%] w-48 h-[1px] bg-cyan-500/10 -rotate-45" />

        <div className="absolute top-[48%] left-[10%] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]" />

        <div className="absolute top-[32%] left-[72%] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]" />

        <div className="absolute top-[75%] left-[42%] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]" />

      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading Section */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[8px] text-cyan-400 mb-4">
            Skills & Experience
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">

            Crafting Modern

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Digital Experiences
            </span>

          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-8">
            Full Stack Developer focused on building scalable web
            applications, intelligent software solutions and modern
            user experiences using cutting-edge technologies.
          </p>

        </motion.div>

        {/* Skills Grid */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-8
            justify-items-center
          "
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                variants={itemVariant}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  y: -12,
                  scale: 1.08,
                }}
                className="
                  relative
                  w-full
                  max-w-[190px]
                  h-[180px]
                  rounded-3xl
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  flex
                  flex-col
                  justify-center
                  items-center
                  text-center
                  overflow-hidden
                  transition-all
                  duration-300
                  hover:border-cyan-400
                  hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
                "
              >
                {/* Top Glow Line */}

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-[2px]
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-400
                    to-transparent
                    opacity-60
                  "
                />

                {/* Icon */}

                <div
                  className="p-4 rounded-2xl mb-4"
                  style={{
                    background: `${skill.color}20`,
                    border: `1px solid ${skill.color}70`,
                    boxShadow: `0 0 20px ${skill.color}50`,
                  }}
                >
                  <Icon
                    size={38}
                    color={skill.color}
                  />
                </div>

                {/* Skill Name */}

                <h3 className="font-semibold text-gray-100 text-base">
                  {skill.name}
                </h3>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}