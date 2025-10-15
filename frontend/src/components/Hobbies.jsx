import React from 'react';
import { BookOpen, Music } from 'lucide-react';
import { Card } from './ui/card';
import { portfolioData } from '../mock';

const Hobbies = () => {
  const { hobbies } = portfolioData;

  const getIcon = (iconName) => {
    const icons = {
      'book-open': BookOpen,
      'music': Music
    };
    return icons[iconName] || BookOpen;
  };

  return (
    <section id="hobbies" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hobbies & <span className="text-teal-400">Interests</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            What I enjoy doing in my free time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {hobbies.map((hobby) => {
            const IconComponent = getIcon(hobby.icon);
            return (
              <Card
                key={hobby.id}
                className="bg-slate-900 border-slate-700 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 hover:-translate-y-1 group"
              >
                <div className="p-8">
                  <div className="w-16 h-16 mb-4 rounded-lg bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors duration-300">
                    <IconComponent className="text-teal-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {hobby.name}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
