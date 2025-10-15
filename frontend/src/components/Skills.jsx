import React from 'react';
import { Code, Code2, FileCode, Coffee, Layout, Atom } from 'lucide-react';
import { Card } from './ui/card';
import { portfolioData } from '../mock';

const Skills = () => {
  const { skills } = portfolioData;

  const getIcon = (iconName) => {
    const icons = {
      'code': Code,
      'code-2': Code2,
      'file-code': FileCode,
      'coffee': Coffee,
      'layout': Layout,
      'javascript': Code2,
      'atom': Atom
    };
    return icons[iconName] || Code;
  };

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-teal-400">Skills</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Technologies and programming languages I work with
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = getIcon(skill.icon);
            return (
              <Card
                key={index}
                className="bg-slate-800 border-slate-700 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 hover:-translate-y-1 p-6 flex flex-col items-center justify-center group"
              >
                <div className="w-16 h-16 mb-4 rounded-lg bg-slate-700 flex items-center justify-center group-hover:bg-teal-500/10 transition-colors duration-300">
                  <IconComponent className="text-teal-400" size={32} />
                </div>
                <h3 className="text-white font-semibold text-center text-lg">
                  {skill.name}
                </h3>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
