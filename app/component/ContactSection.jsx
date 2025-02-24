import { Github, Mail } from 'lucide-react'
import React from 'react'

function ContactSection() {
    return (
        <section id="contact" className="snap-start w-screen h-screen flex items-center  justify-center min-w-full px-8 md:px-20 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
            <div className="max-w-4xl text-center relative">
                <div className="mb-6 flex items-center justify-center gap-4 flex-wrap">
                    <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500" />
                    <span className="text-gray-400 uppercase tracking-wider text-sm">Get in Touch</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-wrap">Let's Create Something Amazing</h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto text-wrap">
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
    )
}

export default ContactSection