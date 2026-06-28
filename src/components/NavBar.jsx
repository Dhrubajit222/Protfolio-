function Navbar() {

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    })
  }

  return (

    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-white tracking-widest">
          DHRUBAJIT
        </h1>

        <ul className="flex gap-8 text-gray-300 font-medium">

          <li
            onClick={() => scrollToSection("home")}
            className="hover:text-cyan-400 transition duration-300 cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("about")}
            className="hover:text-cyan-400 transition duration-300 cursor-pointer"
          >
            About
          </li>

          <li
            onClick={() => scrollToSection("skills")}
            className="hover:text-cyan-400 transition duration-300 cursor-pointer"
          >
            Skills
          </li>

          <li
            onClick={() => scrollToSection("projects")}
            className="hover:text-cyan-400 transition duration-300 cursor-pointer"
          >
            Projects
          </li>

          <li
            onClick={() => scrollToSection("contact")}
            className="hover:text-cyan-400 transition duration-300 cursor-pointer"
          >
            Contact
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar