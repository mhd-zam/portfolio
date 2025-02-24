import React from 'react'

function ProjectSection() {
    return (
        <div>
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

        </div>
    )
}

export default ProjectSection