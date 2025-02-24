'use client'
import { useRef, useEffect, useState } from 'react';
import { Github, Mail, Linkedin, ExternalLink, Menu, X } from 'lucide-react';
import DeveloperSkills from './component/DeveloperSkills';
import IntroSection from './component/IntroSection';
import ContactSection from './component/ContactSection';


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
        <div className="flex justify-between items-center px-6 py-4  ">
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
            className="md:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
          {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" /> */}
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
            <IntroSection scrollToSection={scrollToSection} />
          </div>

          <div id="skills" className='item' >
            <DeveloperSkills />
          </div>

          <div className="item">
            <ContactSection />
          </div>

        </div>
      </div>

    </div>
  );
}