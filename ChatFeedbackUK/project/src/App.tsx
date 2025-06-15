import React, { useState, useEffect } from 'react';
import { CheckCircle, Shield, MessageCircle, ArrowRight, Star, Mail, Zap, Target, TrendingUp, Eye, Activity, User, Calendar, AlertTriangle, Bot, Cpu } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState({});
  const [typedText, setTypedText] = useState('');
  const [currentTestStep, setCurrentTestStep] = useState(0);
  
  const fullText = "Don't Just Launch a Chatbot. Launch a Reliable One.";
  
  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Live testing simulation
  useEffect(() => {
    const testSteps = [
      "Analyzing conversation flow...",
      "Testing edge cases...",
      "Checking brand consistency...",
      "Validating security...",
      "✓ Testing complete!"
    ];
    
    const timer = setInterval(() => {
      setCurrentTestStep(prev => (prev + 1) % testSteps.length);
    }, 2000);
    
    return () => clearInterval(timer);
  }, []);

  const testSteps = [
    "Analyzing conversation flow...",
    "Testing edge cases...",
    "Checking brand consistency...",
    "Validating security...",
    "✓ Testing complete!"
  ];

  // Calendly integration function
  const openCalendly = () => {
    // Replace 'your-calendly-username' with your actual Calendly username
    window.open('https://calendly.com/richard-chatfeedback/30min', '_blank', 'width=800,height=700');
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header with glassmorphism */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2 group">
              <div className="relative">
                <MessageCircle className="h-8 w-8 text-blue-600 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                chatfeedback.chat
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              {['Service', 'About', 'Founder', 'Contact'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
            <button 
              onClick={openCalendly}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Call
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Advanced Animations */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 overflow-hidden rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="inline-block animate-fade-in-up">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
            </div>
            
            <div 
              className="transform transition-all duration-1000 delay-500"
              style={{ 
                opacity: isVisible.hero ? 1 : 0,
                transform: isVisible.hero ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Your chatbot is often the very first "employee" a customer interacts with. We ensure that conversation builds trust, not frustration. Through specialist adversarial testing, we help e-commerce startups turn their AI into their most reliable asset.
              </p>
            </div>

            {/* Interactive Demo Box */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl mb-8 max-w-md mx-auto border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-500">Live Testing</span>
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-2 mb-2">
                  <Activity className="h-4 w-4 text-blue-600 animate-pulse" />
                  <span className="text-sm font-mono text-gray-700">
                    {testSteps[currentTestStep]}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentTestStep + 1) / testSteps.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openCalendly}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Single Service Section - Adversarial Testing */}
      <section id="service" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            id="service-header"
            data-animate
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible['service-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Our Adversarial Testing Service
            </h2>
            <p className={`text-lg text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible['service-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              We specialize exclusively in adversarial testing for chatbots - the most comprehensive way to ensure your AI performs reliably under real-world conditions
            </p>
          </div>
          
          {/* Main Service Card */}
          <div 
            id="main-service"
            data-animate
            className={`max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12 rounded-3xl shadow-xl border border-blue-100 transition-all duration-1000 ${
              isVisible['main-service'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-8">
              <div className="bg-red-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Adversarial Testing
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Unlike standard testing that follows predictable paths, adversarial testing deliberately tries to break your chatbot using creative, unexpected inputs that real users might attempt.
              </p>
            </div>

            {/* What We Test */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="h-6 w-6 text-orange-600 mr-3" />
                  What We Test For:
                </h4>
                <ul className="space-y-3">
                  {[
                    'Conversation-breaking edge cases',
                    'Prompt injection vulnerabilities',
                    'Brand voice inconsistencies',
                    'Security and data leakage',
                    'Error handling failures',
                    'Context confusion scenarios'
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className={`flex items-start transition-all duration-500 delay-${index * 100} ${
                        isVisible['main-service'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Bot className="h-6 w-6 text-blue-600 mr-3" />
                  Our Process:
                </h4>
                <ul className="space-y-3">
                  {[
                    'Deep analysis of your chatbot\'s capabilities',
                    'Custom adversarial scenario development',
                    'Systematic stress testing execution',
                    'Detailed vulnerability documentation',
                    'Actionable improvement recommendations',
                    'Post-fix validation testing'
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className={`flex items-start transition-all duration-500 delay-${(index + 6) * 100} ${
                        isVisible['main-service'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                    >
                      <Cpu className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Why Adversarial Testing is Essential
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Shield,
                    title: 'Eliminate Costly Errors',
                    description: 'Catch conversation-breaking bugs before they reach customers'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Improve User Trust',
                    description: 'Build confidence with consistent, reliable responses'
                  },
                  {
                    icon: MessageCircle,
                    title: 'Professional Brand Voice',
                    description: 'Maintain your brand\'s tone across all scenarios'
                  }
                ].map((benefit, index) => (
                  <div 
                    key={index}
                    className={`text-center transition-all duration-500 delay-${index * 200} ${
                      isVisible['main-service'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <benefit.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-2">{benefit.title}</h5>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <button 
                onClick={openCalendly}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Start Your Adversarial Testing
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '99.9%', label: 'Uptime Reliability', icon: Zap },
              { number: '40%', label: 'Avg. Satisfaction Increase', icon: TrendingUp },
              { number: '500+', label: 'Edge Cases Tested', icon: Target },
              { number: '24/7', label: 'Monitoring Support', icon: Eye }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group"
                id={`stat-${index}`}
                data-animate
              >
                <div className={`transition-all duration-1000 delay-${index * 100} ${
                  isVisible[`stat-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <stat.icon className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Interactive Elements */}
      <section id="about" className="py-20 bg-gray-50 rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              id="about-content"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible['about-content'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Adversarial Testing?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Traditional testing methods often miss the creative ways users can break your chatbot. Our specialized adversarial testing simulates real-world edge cases, ensuring your AI performs reliably under pressure.
              </p>
              <ul className="space-y-4">
                {[
                  'Comprehensive scenario testing across multiple conversation paths',
                  'Advanced prompt injection and security vulnerability assessment',
                  'Brand voice consistency analysis and optimization',
                  'Detailed reporting with actionable improvement recommendations'
                ].map((item, index) => (
                  <li 
                    key={index}
                    className={`flex items-start transition-all duration-500 delay-${index * 100} ${
                      isVisible['about-content'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                  >
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div
              id="testimonial"
              data-animate
              className={`bg-white p-8 rounded-3xl shadow-lg transition-all duration-1000 delay-300 ${
                isVisible['testimonial'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Trusted by E-commerce Leaders</h3>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-6 w-6 text-yellow-400 fill-current transition-all duration-300 delay-${i * 100} hover:scale-125`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">
                  "ChatFeedback.chat helped us identify critical issues in our customer service bot that we never would have found otherwise. Our customer satisfaction scores improved by 40%."
                </p>
                <p className="text-sm text-gray-500">— Sarah Chen, CTO at TechFlow Commerce</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            id="founder-header"
            data-animate
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible['founder-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              About the Founder
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div
              id="founder-content"
              data-animate
              className={`bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12 rounded-3xl shadow-lg transition-all duration-1000 ${
                isVisible['founder-content'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                    <User className="h-16 w-16 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Richard</h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Founded this company at the intersection of three key passions: the analytical rigour of Law, the user-centric focus of Design, and the technical foundation of IT. Currently pursuing a degree in Cybersecurity at University, he has always been fascinated by how modern systems work—and more importantly, how they break.
                    </p>
                    <p>
                      He believes that for AI to be truly useful, it must first be trustworthy. This simple idea is the mission of the company: to provide expert, human-led testing that ensures a client's AI chatbot is an asset, not a liability. Richard leads the company's testing strategy, bringing a unique, multi-disciplinary approach to building more reliable AI.
                    </p>
                  </div>
                  
                  <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                    {['Law', 'Design', 'IT', 'Cybersecurity'].map((skill, index) => (
                      <span 
                        key={skill}
                        className={`px-4 py-2 bg-white rounded-full text-sm font-medium text-blue-600 shadow-md transition-all duration-300 delay-${index * 100} hover:shadow-lg hover:scale-105 ${
                          isVisible['founder-content'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Make Your Chatbot Bulletproof?
          </h2>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in-up animation-delay-200">
            Don't let a poorly performing chatbot damage your brand. Get started with professional adversarial testing today.
          </p>
          <button 
            onClick={openCalendly}
            className="group bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-2xl animate-fade-in-up animation-delay-400"
          >
            <span className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </section>

      {/* Contact Section with Email Only */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            id="contact-header"
            data-animate
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible['contact-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Get in Touch
            </h2>
            <p className={`text-lg text-gray-600 transition-all duration-1000 delay-200 ${
              isVisible['contact-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Ready to transform your chatbot? Let's discuss your specific needs.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div 
              id="contact-email"
              data-animate
              className={`group text-center transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible['contact-email'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg">
                <Mail className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Email Us
              </h3>
              <a 
                href="mailto:hello@chatfeedback.chat"
                className="text-lg text-gray-600 group-hover:text-blue-600 transition-colors hover:underline"
              >
                hello@chatfeedback.chat
              </a>
              <p className="text-sm text-gray-500 mt-2">
                We typically respond within 24 hours
              </p>
            </div>
          </div>

          {/* Alternative: Schedule a Call CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Prefer to talk? Schedule a free consultation call:</p>
            <button 
              onClick={openCalendly}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer with Rounded Design */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden rounded-t-3xl mt-8">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 opacity-50 rounded-t-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4 group">
                <MessageCircle className="h-8 w-8 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  chatfeedback.chat
                </span>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Specializing in adversarial testing for chatbots. We help e-commerce startups build reliable, trustworthy AI customer service solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Service</h4>
              <ul className="space-y-2 text-gray-400">
                {['Adversarial Testing', 'Brand Voice Analysis', 'Security Assessment', 'Performance Optimization'].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Company</h4>
              <ul className="space-y-2 text-gray-400">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Founder', href: '#founder' },
                  { name: 'Contact', href: '#contact' },
                  { name: 'Privacy Policy', href: '#' },
                  { name: 'Terms of Service', href: '#' }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ChatFeedback.chat. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
}

export default App;