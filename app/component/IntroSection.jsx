import React from 'react'
import { Github, Mail, Linkedin, ExternalLink, Menu, X } from 'lucide-react';


function IntroSection({scrollToSection}) {
    return (
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
    )
}

export default IntroSection