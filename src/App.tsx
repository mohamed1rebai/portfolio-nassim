import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Code, Share2, Monitor, Cloud, Server, Settings, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, ChevronDown } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Website Development",
      description: "Frontend & Backend development using modern technologies like Angular, Laravel, and TypeScript"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Business & Personal Websites",
      description: "Custom websites tailored to your brand and business needs"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Management",
      description: "Content planning, posting, and strategy to grow your online presence"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Deployment & Cloud Infrastructure",
      description: "Application deployment on cloud or on-premise infrastructure with CI/CD pipelines"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Infrastructure Management",
      description: "Design, setup, and maintenance of secure and scalable infrastructure"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Server Administration",
      description: "Linux server administration, monitoring, backups, and performance optimization, Application containerization using Docker and orchestration-ready setups for scalable deployments"
    }
  ];


  const skills = [
    {
      category: "Web Development",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Angular",
        "Laravel",
        "SpringBoot",
        "JAVA",
        "React",
        "Node & express JS",
        "Bootstrap",
        "Tailwind CSS",
        "REST APIs",
        "MySQL",
        "MongoDB",
      ]
    },
    {
      category: "Design & Digital",
      items: [
        "Responsive Design",
        "Landing Page Optimization",
        "Website Performance",
      ]
    },
    {
      category: "Social Media & Marketing",
      items: [
        "Social Media Management",
        "Content Planning",
        "Content Scheduling",
        "Brand Identity",
        "Community Management",
        "Engagement Strategies",
        "Basic Digital Marketing",
        "Analytics Interpretation (Insights)"
      ]
    },
    {
      category: "Business & Client Focus",
      items: [
        "Client Requirement Analysis",
        "Commercial Awareness",
        "Proposal & Presentation Skills",
        "Time Management"
      ]
    },
    {
      category: "Tools & Workflow",
      items: [
        "Git & GitHub",
        "Figma",
        "Canva",
        "CI/CD Basics",
        "Cloud Awareness",
        "Virtualization"
      ]
    }
  ];


  const projects = [
    {
      title: "Modern Business Website",
      category: "Business Website",
      description: "Fully responsive business website with modern design and CMS integration"
    },
    {
      title: "LaSelectionCBK E-commerce Store",
      category: "E-commerce Website",
      description: "Online e-commerce platform showcasing tiles, bathroom accessories, and home décor with product listings and seamless shopping experience.",
      url: "https://laselectioncbk.com"
    },
    {
      title: "Orelux Online Boutique",
      category: "Brand Store Website",
      description: "Fashion and accessories online store with intuitive navigation, product categories, checkout flow, and customer support features.",
      url: "https://orelux.store"
    },
    {
      title: "BoxTVNet IPTV Platform",
      category: "Media & Streaming Website",
      description: "Streaming platform providing IPTV subscriptions for live TV channels, movies and sports events with multiple subscription plans and device compatibility.",
      url: "https://boxtvnet.com"
    },

    {
      title: "Rochelle Care – Social Media Campaign",
      category: "Website & Social Media",
      description:
        "Complete digital presence for Rochelle Care including website development, Instagram content creation (posts & videos), and social media management to enhance brand visibility and engagement.",
      url: "https://rochelle.care/",
    }
    ,
    {
      title: "ESPREAT",
      category: "Web Application",
      description:
        "Innovative application helping university students discover nearby restaurants, browse menus, explore dishes, place orders, and receive personalized recommendations based on their profile and food allergies."
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0 font-bold text-xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                NF
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {['Home', 'About', 'Services', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle theme"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <div className="px-4 py-4 space-y-3">
                {['Home', 'About', 'Services', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <div className="animate-fade-in">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                  Nassim Fatnassi Hnifi
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                  Computer Science Engineer | Web Developer & Social Media Manager
                </h2>
                <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                  I help businesses grow online through modern websites and impactful social media presence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
                  >
                    My Work
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 hover:scale-105 transition-all"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
              <div className="mt-12">
                <ChevronDown className="w-8 h-8 mx-auto text-gray-400 animate-bounce" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 sm:p-12 shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  I'm a <span className="font-semibold text-blue-600 dark:text-blue-400">Computer Science Engineer</span> with strong experience in website creation and digital branding. I specialize in building modern, fast, and responsive websites that not only look great but also deliver results.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  My expertise extends to <span className="font-semibold text-blue-600 dark:text-blue-400">social media management</span>, where I help businesses develop content strategies and improve their online visibility. I understand what it takes to create engaging digital experiences that resonate with audiences.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  With a technical background in software engineering, I deliver <span className="font-semibold text-blue-600 dark:text-blue-400">secure, scalable, and high-quality</span> web solutions that help businesses establish and grow their digital presence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Core Services</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Skills & Expertise</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skillCategory, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{skillCategory.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 rounded-lg font-medium hover:scale-105 transition-transform"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Experience</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 sm:p-12 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Web Developer & Digital Solutions Engineer
                </h3>
                <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Designed and developed multiple websites for businesses and individuals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Improved online presence and digital visibility for various clients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Managed social media accounts with strategic content planning and scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Delivered high-quality, responsive web solutions using modern technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Collaborated with clients to understand their needs and exceed expectations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Portfolio & Projects</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all group">

                    <div className="h-48 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center">
                      <ExternalLink className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="p-6">
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {project.description}
                      </p>
                    </div>

                  </div>
                </a>
              ))}

            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Education</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  National Engineering Degree in Computer Science
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">ESPRIT</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Comprehensive education in software engineering, web technologies, and digital solutions
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  Bachelor's Degree in Mechatronics Engineering
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Strong foundation in engineering principles and problem-solving
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Get In Touch</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 sm:p-12 shadow-lg">
                <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12">
                  Ready to work together? Let's create something amazing!
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <a
                    href="mailto:fatnassihnifi.nassim@proton.me"
                    className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl hover:scale-105 transition-transform"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm break-all">fatnassihnifi.nassim@proton.me</p>
                    </div>
                  </a>
                  <a
                    href="tel:+21628021325"
                    className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl hover:scale-105 transition-transform"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                      <p className="text-gray-600 dark:text-gray-400">+216 28 021 325</p>
                    </div>
                  </a>
                  <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                      <p className="text-gray-600 dark:text-gray-400">Manouba, Tunis</p>
                    </div>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/nassim-fatnassi-hnifi-a1698a186/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl hover:scale-105 transition-transform"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">LinkedIn</p>
                      <p className="text-gray-600 dark:text-gray-400">Connect with me</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-600 dark:text-gray-400">
                  © {new Date().getFullYear()} Nassim Fatnassi Hnifi – Web Developer & Social Media Manager
                </p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/nassim-fatnassi-hnifi-a1698a186/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/nassimfatnassi1999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:fatnassihnifi.nassim@proton.me"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
