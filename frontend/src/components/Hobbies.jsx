import React from 'react';
import { BookOpen, Music } from 'lucide-react';
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

        <div className="max-w-5xl mx-auto">
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-700/50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-teal-400 uppercase tracking-wider">
                      Hobby
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-teal-400 uppercase tracking-wider">
                      Relevant Skills & Interests
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {hobbies.map((hobby) => {
                    const IconComponent = getIcon(hobby.icon);
                    return (
                      <tr 
                        key={hobby.id} 
                        className="hover:bg-slate-700/30 transition-colors duration-200"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                              <IconComponent className="text-teal-400" size={24} />
                            </div>
                            <span className="text-white font-medium text-lg">
                              {hobby.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-slate-300">
                          {hobby.skills}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {hobbies.map((hobby) => {
              const IconComponent = getIcon(hobby.icon);
              return (
                <div
                  key={hobby.id}
                  className="bg-slate-900 border border-slate-700 rounded-lg p-6 hover:border-teal-400/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-teal-400" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {hobby.name}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-slate-400 font-medium">Relevant Skills & Interests:</p>
                    <p className="text-slate-300">
                      {hobby.skills}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
