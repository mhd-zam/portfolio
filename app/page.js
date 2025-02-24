'use client'
import { useRef, useEffect, useState } from 'react';
import { Github, Mail, Linkedin, ExternalLink, Menu, X } from 'lucide-react';
import DeveloperSkills from './component/DeveloperSkills';


export default function HorizontalScroll() {
  const scrollContainerRef = useRef(null);
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const scrollLeft = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  //   }
  // };


  const projects = [
    {
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency tracking platform with advanced analytics",
      technologies: ["React", "Node.js", "WebSocket", "D3.js"],
      link: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Content Studio",
      description: "Content generation platform powered by artificial intelligence",
      technologies: ["React", "Python", "OpenAI", "MongoDB"],
      link: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive social media management and analytics platform",
      technologies: ["React", "GraphQL", "Firebase", "Chart.js"],
      link: "#",
      color: "from-green-500 to-teal-500"
    }
  ];

  useEffect(() => {

    const scrollContainer = scrollContainerRef.current

    const handlewheel = (event) => {
      event.preventDefault()
      scrollContainer.scrollBy({
        left: event.deltaY * 0.5, // Use deltaY for vertical scroll amount
        behavior: 'smooth', // Smooth scrolling
      });
    }

    scrollContainer.addEventListener('wheel', handlewheel)

    return () => {

      scrollContainer.removeEventListener('wheel', handlewheel)

    };
  }, []);


  const scrollToSection = (sectionId) => {

    const section = document.getElementById(sectionId);
    if (section) {
      scrollContainerRef.current.scrollTo({
        left: section.offsetLeft,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  }


  return (
    <div className="h-screen  overflow-hidden bg-black text-white" >
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full">
        <div className="flex justify-between items-center px-6 py-4 backdrop-blur-lg bg-black/30">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Mohammed Zamil
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {['about', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative uppercase tracking-wider z-50 cursor-pointer text-sm font-medium transition-colors duration-300 ${activeSection === section ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
              >
                {section}
                {activeSection === section && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/95 pt-20">
            <div className="flex flex-col items-center gap-8">
              {['about', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-2xl uppercase tracking-wider"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>


      <div className="scroll-container" ref={scrollContainerRef}>
        <div className="scroll-content">
          <div className="item">
            {/* Hero Section */}
            <section id="about" className="snap-start w-screen h-screen flex items-center justify-center min-w-full px-8 md:px-20 relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
              <div className="max-w-4xl relative">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500" />
                  <span className="text-gray-400 uppercase tracking-wider text-sm">Full-stack developer</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Crafting Digital
                  <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Experiences
                  </span>
                </h1>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl">
                  Transforming ideas into seamless, interactive web experiences through modern technology and creative design.
                </p>
                <div className="flex gap-6">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Download Resume
                  </button>
                  <div className="flex gap-4 items-center">
                    <Github className="w-6 h-6 hover:text-blue-500 cursor-pointer transition-colors" />
                    <Linkedin className="w-6 h-6 hover:text-blue-500 cursor-pointer transition-colors" />
                    <Mail className="w-6 h-6 hover:text-blue-500 cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </section>

          </div>

          <div id="skills" className='item' >
            <DeveloperSkills />
          </div>

          {/* <div className="item">

            <section id="projects" className="snap-start w-screen h-screen flex items-center justify-center min-w-full px-8 md:px-20 relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.1),transparent_50%)]" />
              <div className="max-w-6xl relative">
                <div className="mb-12">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500" />
                    <span className="text-gray-400 uppercase tracking-wider text-sm">Featured Work</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold">Latest Projects</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-gray-400 mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View Project <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div> */}
          <div className="item">
            <section id="contact" className="snap-start w-screen h-screen flex items-center justify-center min-w-full px-8 md:px-20 relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
              <div className="max-w-4xl text-center relative">
                <div className="mb-6 flex items-center justify-center gap-4">
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500" />
                  <span className="text-gray-400 uppercase tracking-wider text-sm">Get in Touch</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Something Amazing</h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                  Whether you have a project in mind or just want to chat, I'm always open to discussing new opportunities and ideas.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Start a Conversation
                  </button>
                  <button className="px-8 py-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center border border-white/10">
                    <Github className="w-5 h-5 mr-2" />
                    View GitHub
                  </button>
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>

    </div>
  );
}