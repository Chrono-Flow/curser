"use client"
import React, { useState, useEffect } from 'react';
import {
  Code,
  Rocket,
  Smartphone,
  Sparkles,
  Zap,
  ChevronRight,
  Github,
  Twitter,
  ArrowRight,
  Menu,
  X,
  ExternalLink,
  Terminal,
  Layers,
  Globe,
  Users,
  Star,
  MousePointer,
  ArrowUpRight,
  Cpu,
  Braces
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('nextjs');
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // @ts-ignore
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-black blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-black blur-3xl"></div>
        <div
          className="absolute w-20 h-20 rounded-full bg-black blur-xl opacity-10 transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
      </div>

      {/* Grid pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.015]"
        style={{
          backgroundImage: 'linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-6'}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Terminal className="h-6 w-6 relative z-10" />
                <div className="absolute -inset-1 bg-black/5 rounded-full blur-sm -z-10 animate-pulse"></div>
              </div>
              <span className="text-xl font-medium tracking-tight">bolt</span>
            </div>

            <div className="hidden md:flex items-center space-x-10">
              <a href="#features" className="text-sm hover:text-gray-500 transition-colors relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#frameworks" className="text-sm hover:text-gray-500 transition-colors relative group">
                Frameworks
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#testimonials" className="text-sm hover:text-gray-500 transition-colors relative group">
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#pricing" className="text-sm hover:text-gray-500 transition-colors relative group">
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="px-5 py-2 bg-black text-white hover:bg-gray-800 rounded-md transition-colors text-sm relative overflow-hidden group">
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="focus:outline-none">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-md rounded-lg p-4 absolute left-4 right-4 z-50 shadow-lg border border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="hover:text-gray-500 transition-colors" onClick={toggleMobileMenu}>Features</a>
              <a href="#frameworks" className="hover:text-gray-500 transition-colors" onClick={toggleMobileMenu}>Frameworks</a>
              <a href="#testimonials" className="hover:text-gray-500 transition-colors" onClick={toggleMobileMenu}>Testimonials</a>
              <a href="#pricing" className="hover:text-gray-500 transition-colors" onClick={toggleMobileMenu}>Pricing</a>
              <a href="#" className="px-4 py-2 bg-black text-white hover:bg-gray-800 rounded-md transition-colors text-center">Get Started</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                Now in public beta
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                Build <span className="relative inline-block">
                  faster
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.5C47.6667 1.5 154.4 -1.9 199 5.5" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span> with <span className="relative inline-block">
                  simplicity
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.5C47.6667 1.5 154.4 -1.9 199 5.5" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-lg">
                The minimalist development platform for Next.js, React, and React Native. Code, preview, and deploy with elegant simplicity.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#" className="px-8 py-3 bg-black text-white hover:bg-gray-800 rounded-md transition-colors text-center font-medium flex items-center justify-center group relative overflow-hidden">
                  <span className="relative z-10">Start Coding</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#" className="px-8 py-3 bg-white border border-gray-200 hover:border-gray-400 rounded-md transition-colors text-center font-medium group">
                  View Examples
                  <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
                </a>
              </div>

              <div className="mt-12 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  <span className="font-medium text-black">2,500+</span> developers joined this week
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-100 to-white -z-10 rounded-xl"></div>
              <div className="bg-white p-4 rounded-xl shadow-[0_10px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 relative">
                <div className="absolute -top-3 -left-3 bg-black text-white text-xs px-2 py-1 rounded-md font-medium">
                  <div className="flex items-center">
                    <Terminal className="h-3 w-3 mr-1" />
                    <span>bolt.new</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <div className="flex space-x-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  </div>
                  <pre className="text-sm text-gray-800 overflow-x-auto font-mono">
                    <code className="language-jsx">{`import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Bolt
      </h1>
      <p className="mb-4">Start building amazing apps</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Count: {count}
      </button>
    </div>
  );
}

export default App;`}</code>
                  </pre>
                </div>
                <div className="absolute -bottom-3 -right-3 bg-black rounded-full p-3 shadow-lg">
                  <Terminal className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-black/5 blur-xl rounded-full"></div>
                  <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-100 relative">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs font-medium">Live Preview</span>
                    </div>
                  </div>
                </div>

                <div className="relative mt-4">
                  <div className="absolute inset-0 bg-black/5 blur-xl rounded-full"></div>
                  <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-100 relative">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-xs font-medium">AI Assistance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl -z-10 opacity-70"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gray-50 rounded-full blur-3xl -z-10 opacity-70"></div>
      </section>

      {/* Logos Section */}
      <section className="py-12 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-gray-400 uppercase tracking-wider mb-8">Trusted by developers from</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {['Google', 'Microsoft', 'Airbnb', 'Uber', 'Netflix', 'Spotify'].map((company, index) => (
              <div key={index} className="text-gray-400 font-medium text-lg tracking-tight">{company}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              Features
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Why Developers Choose Bolt</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience development with elegant simplicity and powerful functionality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket />,
                title: "Instant Setup",
                description: "Start coding in seconds with pre-configured environments for all your favorite frameworks."
              },
              {
                icon: <Sparkles />,
                title: "Live Preview",
                description: "See your changes in real-time with our lightning-fast preview environment."
              },
              {
                icon: <Smartphone />,
                title: "Mobile Development",
                description: "Build and test React Native apps directly in your browser with our mobile preview."
              },
              {
                icon: <Github />,
                title: "GitHub Integration",
                description: "Seamlessly connect with your GitHub repositories and collaborate with your team."
              },
              {
                icon: <Code />,
                title: "AI Code Assistance",
                description: "Get intelligent code suggestions and autocompletions powered by advanced AI."
              },
              {
                icon: <Globe />,
                title: "One-Click Deploy",
                description: "Deploy your applications to production with a single click, no configuration needed."
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 group-hover:translate-y-[-4px] relative">
                  <div className="mb-6 inline-block p-3 bg-gray-50 rounded-lg group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <div className="h-6 w-6 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl -z-10 opacity-70"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-50 rounded-full blur-3xl -z-10 opacity-70"></div>
      </section>

      {/* Frameworks Section */}
      <section id="frameworks" className="py-20 md:py-32 bg-gray-50 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white text-sm font-medium mb-4">
              <Braces className="h-4 w-4 mr-2" />
              Frameworks
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Supported Frameworks</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Build with your favorite technologies, all in one place
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex border-b border-gray-200 mb-8 overflow-x-auto hide-scrollbar">
              <button
                className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'nextjs' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-gray-800'}`}
                onClick={() => setActiveTab('nextjs')}
              >
                Next.js
              </button>
              <button
                className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'react' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-gray-800'}`}
                onClick={() => setActiveTab('react')}
              >
                React
              </button>
              <button
                className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'reactnative' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-gray-800'}`}
                onClick={() => setActiveTab('reactnative')}
              >
                React Native
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>

              {activeTab === 'nextjs' && (
                <div className="flex flex-col md:flex-row items-center relative z-10">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <h3 className="text-2xl font-bold mb-4">Next.js Development</h3>
                    <p className="text-gray-600 mb-6">
                      Build modern, SEO-friendly websites with server-side rendering, static site generation, and API routes.
                    </p>
                    <ul className="space-y-3">
                      {['Server Components', 'App Router', 'API Routes', 'Static Site Generation', 'Incremental Static Regeneration'].map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mr-3 text-black">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#" className="inline-flex items-center mt-6 text-black hover:text-gray-600 font-medium text-sm group">
                      Try Next.js template <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                  <div className="md:w-1/2">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-gray-100 to-white -z-10 rounded-xl opacity-50"></div>
                      <img
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                        alt="Next.js Development"
                        className="rounded-lg shadow-sm grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-[1.02]"
                      />
                      <div className="absolute -bottom-3 -right-3 bg-black text-white text-xs px-2 py-1 rounded-md font-medium">
                        <div className="flex items-center">
                          <span>Next.js</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'react' && (
                <div className="flex flex-col md:flex-row items-center relative z-10">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <h3 className="text-2xl font-bold mb-4">React Development</h3>
                    <p className="text-gray-600 mb-6">
                      Create interactive UIs with the most popular JavaScript library for building user interfaces.
                    </p>
                    <ul className="space-y-3">
                      {['Component-Based', 'Virtual DOM', 'React Hooks', 'Context API', 'Concurrent Mode'].map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mr-3 text-black">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#" className="inline-flex items-center mt-6 text-black hover:text-gray-600 font-medium text-sm group">
                      Try React template <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                  <div className="md:w-1/2">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-gray-100 to-white -z-10 rounded-xl opacity-50"></div>
                      <img
                        src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                        alt="React Development"
                        className="rounded-lg shadow-sm grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-[1.02]"
                      />
                      <div className="absolute -bottom-3 -right-3 bg-black text-white text-xs px-2 py-1 rounded-md font-medium">
                        <div className="flex items-center">
                          <span>React</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reactnative' && (
                <div className="flex flex-col md:flex-row items-center relative z-10">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <h3 className="text-2xl font-bold mb-4">React Native Development</h3>
                    <p className="text-gray-600 mb-6">
                      Build native mobile apps for iOS and Android using JavaScript and React.
                    </p>
                    <ul className="space-y-3">
                      {['Cross-Platform', 'Native Components', 'Hot Reloading', 'Expo Integration', 'Native APIs'].map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mr-3 text-black">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#" className="inline-flex items-center mt-6 text-black hover:text-gray-600 font-medium text-sm group">
                      Try React Native template <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                  <div className="md:w-1/2">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-gray-100 to-white -z-10 rounded-xl opacity-50"></div>
                      <img
                        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
                        alt="React Native Development"
                        className="rounded-lg shadow-sm grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-[1.02]"
                      />
                      <div className="absolute -bottom-3 -right-3 bg-black text-white text-xs px-2 py-1 rounded-md font-medium">
                        <div className="flex items-center">
                          <span>React Native</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-white rounded-full blur-3xl -z-10 opacity-70"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl -z-10 opacity-70"></div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm font-medium mb-4">
              <Users className="h-4 w-4 mr-2" />
              Testimonials
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Loved by Developers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what developers are saying about their experience with Bolt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Frontend Developer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
                quote: "Bolt has completely transformed my development workflow. The instant setup and live preview features save me hours every day."
              },
              {
                name: "Michael Chen",
                role: "Full Stack Developer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
                quote: "The ability to switch between Next.js, React, and React Native projects in one platform is a game-changer. Bolt is now an essential part of my toolkit."
              },
              {
                name: "Emily Rodriguez",
                role: "Mobile Developer",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
                quote: "As a React Native developer, I love how Bolt makes mobile development so much easier. The preview feature is incredibly fast and accurate."
              }
            ].map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 group-hover:translate-y-[-4px] relative">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-black/5 blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex mt-4 text-gray-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl -z-10 opacity-70"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gray-50 rounded-full blur-3xl -z-10 opacity-70"></div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-black rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 1%, transparent 5%), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 1%, transparent 5%)',
                  backgroundSize: '60px 60px'
                }}>
              </div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Ready to supercharge your development?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
                Join thousands of developers who are building faster and smarter with Bolt.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#" className="px-8 py-3 bg-white text-black hover:bg-gray-100 rounded-md transition-colors text-center font-medium group relative overflow-hidden">
                  <span className="relative z-10">Get Started for Free</span>
                  <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#" className="px-8 py-3 bg-transparent border border-white text-white hover:bg-white/10 rounded-md transition-colors text-center font-medium">
                  Schedule a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 bg-gray-50 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white text-sm font-medium mb-4">
              <Zap className="h-4 w-4 mr-2" />
              Pricing
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that's right for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Free",
                description: "Perfect for hobbyists",
                price: "$0",
                features: ['3 projects', 'Community support', 'Basic templates', '1GB storage', 'Public repositories only'],
                cta: "Get Started",
                popular: false
              },
              {
                name: "Pro",
                description: "For professional developers",
                price: "$19",
                features: ['Unlimited projects', 'Priority support', 'All templates', '10GB storage', 'Private repositories', 'Custom domains', 'Team collaboration'],
                cta: "Get Started",
                popular: true
              },
              {
                name: "Enterprise",
                description: "For teams and organizations",
                price: "$99",
                features: ['Everything in Pro', 'Dedicated support', 'Custom integrations', 'Unlimited storage', 'Advanced security', 'Usage analytics', 'SLA guarantees'],
                cta: "Contact Sales",
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`group relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}>
                <div className={`bg-white rounded-xl ${plan.popular ? 'border-2 border-black' : 'border border-gray-100'} overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:translate-y-[-4px]`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-black text-xs font-bold px-3 py-1 text-white">
                      POPULAR
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-500 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mr-3 text-black shrink-0 mt-0.5">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#" className={`block w-full py-2 ${plan.popular ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'} rounded-md transition-colors text-center font-medium`}>
                      {plan.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-white rounded-full blur-3xl -z-10 opacity-70"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl -z-10 opacity-70"></div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Terminal className="h-5 w-5" />
                <span className="text-lg font-medium">bolt</span>
              </div>
              <p className="text-gray-500 mb-4">
                The ultimate development platform for Next.js, React, and React Native.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-black transition-colors p-2 bg-gray-50 rounded-full">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-black transition-colors p-2 bg-gray-50 rounded-full">
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Product</h4>
              <ul className="space-y-2">
                {['Features', 'Pricing', 'Templates', 'Customers', 'Enterprise', 'Security'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-500 hover:text-black transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2">
                {['Documentation', 'Guides', 'API Reference', 'Blog', 'Community', 'Support'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-500 hover:text-black transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2">
                {['About', 'Careers', 'Press', 'Partners', 'Legal', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-500 hover:text-black transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0 text-sm">
              &copy; {new Date().getFullYear()} Bolt. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-black transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;