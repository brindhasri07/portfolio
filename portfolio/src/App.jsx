function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
  ];

  return (
  <div className="bg-slate-900 text-white min-h-screen relative overflow-visible scroll-smooth">
   className="bg-slate-950 text-white min-h-screen relative overflow-hidden scroll-smooth"
   {/* Super Animated Background */}
<div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">

  <div className="blob blob1"></div>
  <div className="blob blob2"></div>
  <div className="blob blob3"></div>
  <div className="grid-overlay"></div>

</div>

    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full floating"></div>

    <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full floating"></div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/60 backdrop-blur-lg border-b border-slate-700">
  <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

    <h1 className="font-bold text-xl text-blue-500">
      Brindha Sri
    </h1>

    <div className="space-x-6">
      <a href="#about" className="hover:text-blue-500 transition">About</a>
      <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
      <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
      <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
    </div>

  </div>
</nav>

      {/* Hero */}
      {/* Hero */}
<section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-10 gap-10">

  {/* Left Side */}
  <div className="lg:w-1/2">

    <h1 className="text-6xl md:text-7xl font-bold">
      BRINDHA
      <span className="block text-blue-500">
        SRI S
      </span>
    </h1>

    <p className="mt-6 text-xl text-gray-300">
      Frontend Developer specializing in React.js and Tailwind CSS.
      Passionate about building modern and responsive web applications.
    </p>

    <div className="mt-8 flex gap-4">
      <a
        href="https://github.com/brindhasri07"
        target="_blank"
        rel="noreferrer"
        className="bg-blue-600 px-6 py-3 rounded-lg"
      >
        GitHub
      </a>

      <a
        href="https://drive.google.com/file/d/1Ch9dz4iq8uFXJNnR1Qz-sNbWL7Erk6qC/view"
        target="_blank"
        rel="noreferrer"
        className="bg-green-600 px-6 py-3 rounded-lg"
      >
        Resume
      </a>
    </div>

  </div>

  {/* Right Side Card */}
  <div className="lg:w-1/2 flex justify-center">

    <div className="bg-slate-800/80 backdrop-blur-lg border border-slate-700 rounded-3xl p-8 shadow-2xl w-full max-w-md floating-3d">

      <div className="border-l-4 border-blue-500 pl-4 mb-8">
        <h2 className="text-3xl font-bold">
          BCA Student
        </h2>

        <p className="text-gray-400 mt-2">
          Jamal Mohamed College
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-slate-900 p-5 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-blue-500">3+</h3>
          <p>Projects</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-blue-500">4+</h3>
          <p>Certifications</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-xl text-center">
  <h3 className="text-3xl font-bold text-blue-500">8+</h3>
  <p>Skills</p>
</div>

<div className="bg-slate-900 p-5 rounded-xl text-center">
  <h3 className="text-3xl font-bold text-blue-500">2027</h3>
  <p>Graduate</p>
</div>

      </div>

    </div>

  </div>
  </section>

      {/* About */}
      {/* About */}
<section id="about" className="max-w-6xl mx-auto p-8">

  <h2 className="text-4xl font-bold mb-4">
    About Me
  </h2>

  <p className="text-gray-300 text-lg leading-relaxed">
    I am Brindha Sri S, a BCA student and aspiring Frontend Developer
    with a strong interest in creating modern, responsive and
    user-friendly web applications.

    My expertise includes HTML, CSS, JavaScript, React.js and
    Tailwind CSS. I enjoy transforming ideas into real-world
    applications and continuously improving my development skills
    through projects and internships.
  </p>

</section>

{/* Projects */}
<section id="projects" className="max-w-6xl mx-auto p-8">

  <h2 className="text-4xl font-bold mb-6">
    Projects
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {/* Project 1 */}
    <div className="glass-3d p-6 rounded-2xl">
      <h3 className="text-xl font-bold">
        Flight Aviation Academy
      </h3>

      <p className="text-gray-400 mt-3">
        Responsive aviation academy website developed using React.js and Tailwind CSS.
      </p>

      <a
        href="https://github.com/brindhasri07/FLIGHT-AVIATION-ACADEMY"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-4 text-blue-500"
      >
        View Project →
      </a>
    </div>

    {/* Project 2 */}
    <div className="glass-3d p-6 rounded-2xl">
      <h3 className="text-xl font-bold">
        House Booking UI
      </h3>

      <p className="text-gray-400 mt-3">
        Modern house booking interface designed using Figma and responsive web technologies.
      </p>

      <a
        href="https://github.com/brindhasri07/HOUSE-BOOKING-USING-FIGMA"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-4 text-blue-500"
      >
        View Project →
      </a>
    </div>

    {/* Project 3 */}
    <div className="glass-3d p-6 rounded-2xl">
      <h3 className="text-xl font-bold">
        Local Business Finder
      </h3>

      <p className="text-gray-400 mt-3">
        React application for discovering local businesses and services.
      </p>

      <a
        href="https://github.com/brindhasri07/Local-business"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-4 text-blue-500"
      >
        View Project →
      </a>
    </div>

  </div>

</section>

      {/* Skills */}
<section id="skills" className="max-w-6xl mx-auto p-8">

  <h2 className="text-4xl font-bold mb-6">
    Skills
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

    {skills.map((skill) => (
      <div
        key={skill}
        className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 text-center shadow-xl
        transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:rotate-1"
      >
        <p className="text-lg font-semibold text-white">
          {skill}
        </p>
      </div>
    ))}

  </div>

</section>

      {/* Certificates */}
<section className="max-w-6xl mx-auto p-8">

  <h2 className="text-4xl font-bold mb-6">
    Certificates
  </h2>

  <div className="bg-slate-800 p-6 rounded-2xl">

    <h3 className="text-2xl font-bold">
      ReactJS Developer Internship
    </h3>

    <p className="text-gray-300 mt-2">
      Skywin Academy, Trichy
    </p>

    <p className="text-gray-400 mt-4">
      Successfully completed internship training and project development in ReactJS and Frontend Development.
    </p>

    <a
      href="https://drive.google.com/file/d/1j-NwH1trjCYw22k9Xd9ZwMQlG8UxXLXi/view"
      target="_blank"
      rel="noreferrer"
      className="inline-block mt-6 bg-blue-600 px-5 py-2 rounded-lg"
    >
      View Certificate
    </a>

  </div>

</section>

      {/* Contact */}
<section id="contact" className="max-w-6xl mx-auto p-8">

  <h2 className="text-4xl font-bold mb-6">
    Contact
  </h2>

  <div className="bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition duration-300">

    <p className="text-gray-300 text-lg">
      📧 brindhasri072@gmail.com
    </p>

    <p className="text-gray-300 text-lg mt-2">
      📞 +91 7339212508
    </p>

    <p className="text-gray-300 text-lg mt-2">
      📍 Tamil Nadu, India
    </p>

  </div>

</section>

{/* Footer */}
<footer className="relative z-10 bg-slate-950 text-white py-16 px-6 lg:px-20">
  <div className="grid md:grid-cols-3 gap-10">

    <div>
      <h2 className="text-3xl font-bold mb-4">
        BRINDHA <span className="text-blue-500">SRI S</span>
      </h2>

      <p className="text-gray-400">
        Computer Application Student & ReactJS Developer
        specializing in building modern web applications.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-semibold mb-4">
        Quick Links
      </h3>

      <ul className="space-y-3 text-gray-400">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-2xl font-semibold mb-4">
        Contact Information
      </h3>

      <div className="space-y-3 text-gray-400">
        <p>📍 Tamil Nadu, India</p>
        <p>📧 brindhasri072@gmail.com</p>
        <p>📞 +91 7339212508</p>
      </div>
    </div>

  </div>

  <hr className="border-gray-800 my-10" />

  <div className="flex flex-col md:flex-row justify-between items-center">
    <p className="text-gray-500">
      © 2026 Brindha Sri S. All rights reserved.
    </p>

    <div className="flex gap-4 mt-4 md:mt-0">
      <a
        href="https://github.com/brindhasri07"
        target="_blank"
        rel="noreferrer"
        className="bg-slate-800 px-4 py-2 rounded-lg"
      >
        GitHub
      </a>

      <a
        href="mailto:brindhasri072@gmail.com"
        className="bg-slate-800 px-4 py-2 rounded-lg"
      >
        Email
      </a>
    </div>
  </div>
</footer>

</div>
);
}

export default App;