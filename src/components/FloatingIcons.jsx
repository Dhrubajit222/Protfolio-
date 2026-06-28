import { motion } from "framer-motion"

import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa"

function FloatingIcons() {

  const icons = [
    { icon: <FaReact />, x: "10%", y: "20%" },
    { icon: <FaPython />, x: "80%", y: "30%" },
    { icon: <FaHtml5 />, x: "20%", y: "70%" },
    { icon: <FaCss3Alt />, x: "75%", y: "75%" },
    { icon: <FaJs />, x: "50%", y: "15%" },
  ]

  return (

    <div className="fixed inset-0 pointer-events-none z-0">

      {icons.map((item, index) => (

        <motion.div
          key={index}

          animate={{
            y: [0, -20, 0],
          }}

          transition={{
            duration: 4 + index,
            repeat: Infinity,
          }}

          className="absolute text-cyan-400/20 text-6xl"

          style={{
            left: item.x,
            top: item.y,
          }}
        >

          {item.icon}

        </motion.div>

      ))}

    </div>
  )
}

export default FloatingIcons