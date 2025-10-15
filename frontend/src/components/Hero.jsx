import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../mock';

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block mb-4">
              <span className="text-teal-400 text-sm font-medium px-4 py-2 bg-teal-400/10 rounded-full border border-teal-400/20">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Hi, I'm <span className="text-teal-400">{personal.name}</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
              {personal.title}
            </h2>
            
            <p className="text-lg text-slate-400 mb-4">
              {personal.university}
            </p>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
              {personal.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button
                onClick={scrollToContact}
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg"
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg"
              >
                View Projects
                <ArrowDown className="ml-2" size={20} />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-all duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-all duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-all duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-teal-400/20 shadow-2xl shadow-teal-500/20">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
