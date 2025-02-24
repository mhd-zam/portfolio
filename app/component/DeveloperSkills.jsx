import React from "react";

const SkillItem = ({ skill }) => (
  <div className="group relative cursor-pointer flex flex-col items-center gap-2 px-4 py-2 rounded-full  transition-all duration-500 ease-in-out">
    {/* Background Glow Effect */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 ease-in-out" />

    {/* Skill Icon */}
    <div className="relative flex items-center justify-center rounded-full transform group-hover:scale-110 transition-all duration-500 ease-out">
      <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />
      <img
        src={skill.imgUrl}
        alt={skill.name}
        className="h-20 object-contain relative z-10 transform group-hover:translate-y-[-4px] transition-all duration-500 ease-out"
      />
    </div>

    {/* Skill Name */}
    <span className="font-medium text-sm text-white transform group-hover:scale-110 group-hover:translate-y-[-2px] transition-all duration-500 ease-out">
      {skill.name}
    </span>

    {/* Skill Level */}
    <span
      className="text-xs text-gray-400 transform translate-y-[-8px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out"
    >
      {skill.level}
    </span>
  </div>
);

const DeveloperSkills = () => {
  const skills = [
    { name: "React.js", level: "Advanced", imgUrl: 'https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png' },
    { name: "Node.js", level: "Advanced", imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png' },
    { name: "TypeScript", level: "Advanced", imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' },
    { name: "MongoDB", level: "Intermediate", imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png' },
    { name: "Express.js", level: "Advanced", imgUrl: 'https://img.icons8.com/color/512/express-js.png' },
    { name: "Redux", level: "Advanced", imgUrl: 'https://cdn.worldvectorlogo.com/logos/redux.svg' },
    { name: "Docker", level: "Intermediate", imgUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png' },
    { name: "AWS", level: "Intermediate", imgUrl: 'https://massive.io/wp-content/uploads/2022/12/AWS-logo-web.png' },
    { name: "MySQL", level: "Intermediate", imgUrl: 'https://www.svgrepo.com/show/303251/mysql-logo.svg' },
    { name: "Tailwind CSS", level: "Advanced", imgUrl: 'https://cdn.creazilla.com/icons/3257079/file-type-tailwind-icon-lg.png' },
    { name: "Next.js", level: "Advanced", imgUrl: 'https://miro.medium.com/v2/resize:fit:576/1*yqQpg5pkNNY2NCdcmqVstw.png' },
    { name: "Git", level: "Advanced", imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png' },
    { name: "CI/CD", level: "Intermediate", imgUrl: 'https://miro.medium.com/v2/resize:fit:735/1*iw_QvTSAAOBtE2BHoGrN6g.jpeg' },
    { name: "Webpack", level: "Intermediate", imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg' },
    { name: "Socket.io", level: "Intermediate", imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg' },
    { name: "TanStack", level: "Intermediate", imgUrl: 'https://tanstack.com/_build/assets/logo-color-600w-Er4SOkq1.png' },
  ];

  return (
    <div >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="mx-auto max-w-7xl pt-24">
        <div className="mb-12 px-5">
          <div className="mb-6 flex items-center gap-4 flex-wrap">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500" />
            <span className="text-gray-400 uppercase tracking-wider text-sm text-wrap">
              Technical Skills
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-wrap">
            Technologies and tools I specialize in
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperSkills;