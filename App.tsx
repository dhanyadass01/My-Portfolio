
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, EDUCATION, PROJECTS, SKILLS, LANGUAGES } from './constants';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-dark dark:text-slate-200 transition-colors duration-500">
      <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {PERSONAL_INFO.name}
          </span>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <i className={`fas ${isDarkMode ? 'fa-sun text-yellow-400' : 'fa-moon text-indigo-600'}`}></i>
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-dark dark:to-purple-950/20"></div>
          
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="mb-6 inline-block py-2 px-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-primary dark:text-indigo-300 text-xs font-bold uppercase tracking-widest animate-bounce">
              Welcome to my portfolio
            </div>
            <h1 className="text-5xl md:text-8xl font-heading font-black mb-6 tracking-tight">
              I'm <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">{PERSONAL_INFO.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              {PERSONAL_INFO.title} based in <span className="text-slate-900 dark:text-white font-medium">{PERSONAL_INFO.location}</span>.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white dark:bg-dark border-b border-slate-100 dark:border-slate-800">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/2 relative">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                    alt="Professional Portrait" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary rounded-3xl -z-0"></div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">About <span className="text-primary">Me</span></h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-loose mb-8">
                  {PERSONAL_INFO.summary}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <h3 className="text-3xl font-bold text-primary mb-1">2+</h3>
                    <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">AI Projects</p>
                  </div>
                  <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <h3 className="text-3xl font-bold text-accent mb-1">3+</h3>
                    <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Languages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-16 text-center">Academic <span className="text-primary">Journey</span></h2>
              <div className="space-y-12 relative before:absolute before:left-4 md:before:left-1/2 before:w-px before:h-full before:bg-slate-200 dark:before:bg-slate-800">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 -ml-4 rounded-full bg-primary border-4 border-white dark:border-dark z-10 shadow-lg"></div>
                    <div className="w-full md:w-1/2 px-12 pb-4">
                      <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all hover:-translate-y-1">
                        <span className="inline-block mb-4 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-primary text-xs font-bold rounded-lg">{edu.date}</span>
                        <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                        <p className="text-slate-500 mb-1">{edu.institution}</p>
                        <p className="text-sm text-slate-400 mb-4">{edu.location}</p>
                        {edu.extra && (
                          <div className="pt-4 border-t border-slate-50 dark:border-slate-800">
                             <p className="text-sm font-medium text-slate-600 dark:text-slate-300 italic">{edu.extra}% Score</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-white dark:bg-dark">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Technical <span className="text-primary">Expertise</span></h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg">
                    Constantly evolving my skillset in AI tools, UI/UX principles, and data analytics to build modern web solutions.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {LANGUAGES.map((lang, idx) => (
                      <div key={idx} className="px-6 py-3 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center gap-3">
                        <span className="font-bold text-sm">{lang.name}</span>
                        <span className="text-[10px] uppercase text-slate-400 font-black">{lang.proficiency}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  {SKILLS.map((skill, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between mb-2">
                        <span className="font-bold">{skill.name}</span>
                        <span className="text-slate-400 text-xs font-bold uppercase">{skill.level}</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-1000 group-hover:bg-accent"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Featured <span className="text-primary">Work</span></h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Showcasing some of my recent developments in AI-powered applications and web solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {PROJECTS.map((project, idx) => (
                <div key={idx} className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col">
                  <div className="h-64 relative overflow-hidden bg-slate-200">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=Project+Image';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex gap-4">
                        <a href={project.url} target="_blank" className="w-10 h-10 rounded-full bg-white text-dark flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2 py-1 bg-white/10 backdrop-blur-md text-white text-[9px] font-black uppercase rounded-lg border border-white/20 whitespace-nowrap">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[10px] text-primary font-bold uppercase tracking-wider">{project.duration}</span>
                        <h3 className="text-xl font-bold mt-1 leading-tight">{project.title}</h3>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {project.description.map((desc, dIdx) => (
                        <li key={dIdx} className="text-xs text-slate-500 dark:text-slate-400 flex gap-3 leading-relaxed">
                          <span className="text-primary mt-1 flex-shrink-0"><i className="fas fa-check-circle"></i></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                    <a href={project.url} target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:translate-x-2 transition-transform">
                      Visit Project <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white dark:bg-dark">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 dark:bg-primary/10 rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-primary/10 text-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 leading-tight">Let's build <span className="text-primary">something</span> amazing.</h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl">
                    I'm currently looking for new opportunities in AI Web Development and Data Analytics. Reach out if you'd like to collaborate!
                  </p>
                  
                  <div className="flex flex-col md:flex-row gap-8 justify-center w-full">
                    <div className="flex flex-col items-center p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex-1">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
                        <i className="fas fa-envelope text-xl"></i>
                      </div>
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Email Me</p>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-bold hover:text-primary transition-colors">{PERSONAL_INFO.email}</a>
                    </div>
                    
                    <div className="flex flex-col items-center p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex-1">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
                        <i className="fas fa-phone text-xl"></i>
                      </div>
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Call Me</p>
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="text-lg font-bold hover:text-primary transition-colors">{PERSONAL_INFO.phone}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-100 dark:border-slate-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xl text-slate-400">
            <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" className="hover:text-primary transition-colors"><i className="fab fa-linkedin"></i></a>
            <a href={`https://${PERSONAL_INFO.github}`} target="_blank" className="hover:text-primary transition-colors"><i className="fab fa-github"></i></a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-primary transition-colors"><i className="fas fa-envelope"></i></a>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-primary transition-colors"><i className="fas fa-phone"></i></a>
          </div>
          <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <i className="fas fa-chevron-up"></i>
          </button>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;
