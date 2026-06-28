import { motion } from "framer-motion"

function Loader() {

  return (

    <motion.div

      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}

      transition={{
        duration: 2,
        delay: 1.5,
      }}

      className="fixed inset-0 bg-black z-[10000] flex items-center justify-center pointer-events-none"
    >

      <motion.h1

        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}

        transition={{
          duration: 1,
        }}

        className="text-6xl font-extrabold text-cyan-400 tracking-widest"
      >

        DHRUBAJIT

      </motion.h1>

    </motion.div>
  )
}

export default Loader