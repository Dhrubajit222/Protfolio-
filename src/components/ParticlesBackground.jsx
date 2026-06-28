import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"

function ParticlesBackground() {

  const particlesInit = async (engine) => {
    await loadSlim(engine)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-10"

      options={{
        background: {
          color: {
            value: "#000000",
          },
        },

        fpsLimit: 120,

        particles: {
          color: {
            value: "#00ffff",
          },

          links: {
            color: "#00ffff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },

          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },

            random: false,
            speed: 1,
            straight: false,
          },

          number: {
            density: {
              enable: true,
            },
            value: 70,
          },

          opacity: {
            value: 0.5,
          },

          shape: {
            type: "circle",
          },

          size: {
            value: { min: 1, max: 3 },
          },
          links: {
            enable: true
          },
        },

        detectRetina: true,
      }}
    />
  )
}

export default ParticlesBackground