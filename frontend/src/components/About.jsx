import React from 'react';
import { User, Code, Lightbulb, Heart } from 'lucide-react';
import { Card } from './ui/card';
import { portfolioData } from '../mock';

const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-teal-400">Me</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Get to know me better
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main About Card */}
          <Card className="bg-slate-900 border-slate-700 hover:border-teal-400/30 transition-all duration-300 mb-8">
            <div className="p-8 md:p-12">
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="text-teal-400" size={24} />
                  </div>
                  <p>
                    Hello! I'm <span className="text-white font-semibold">Neha Redekar</span>, a Computer Science Engineering student at <span className="text-white font-semibold">Pimpri Chinchwad University</span>.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Code className="text-teal-400" size={24} />
                  </div>
                  <p>
                    I'm a curious and passionate web developer with experience in <span className="text-teal-400 font-medium">C++, HTML, CSS</span>, and learning <span className="text-teal-400 font-medium">Django & AI</span>.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb className="text-teal-400" size={24} />
                  </div>
                  <p>
                    I love building creative, real-world projects and participating in <span className="text-white font-semibold">hackathons</span> to push my limits.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="text-teal-400" size={24} />
                  </div>
                  <p>
                    I enjoy solving problems, designing interfaces, and writing clean code. <span className="text-teal-400 font-semibold">Let's build something amazing together!</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Stats or Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-900 border-slate-700 hover:border-teal-400/30 transition-all duration-300 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-teal-400 mb-2">7+</div>
                <div className="text-slate-300">Programming Languages</div>
              </div>
            </Card>
            
            <Card className="bg-slate-900 border-slate-700 hover:border-teal-400/30 transition-all duration-300 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-teal-400 mb-2">4+</div>
                <div className="text-slate-300">Projects Completed</div>
              </div>
            </Card>
            
            <Card className="bg-slate-900 border-slate-700 hover:border-teal-400/30 transition-all duration-300 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-teal-400 mb-2">∞</div>
                <div className="text-slate-300">Passion to Learn</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
