import React from 'react';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../mock';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-teal-400">Education</span> Background
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-700/50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-teal-400 uppercase tracking-wider">
                      Degree
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-teal-400 uppercase tracking-wider">
                      Institution
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-teal-400 uppercase tracking-wider">
                      Percentage/CGPA
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {education.map((edu, index) => (
                    <tr 
                      key={edu.id} 
                      className="hover:bg-slate-700/30 transition-colors duration-200"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="text-teal-400" size={20} />
                          </div>
                          <span className="text-white font-medium">{edu.degree}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-300">
                        {edu.institution}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-500/10 text-teal-400 border border-teal-400/30">
                          {edu.percentage}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-teal-400/50 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-teal-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-slate-300 text-sm">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Percentage/CGPA:</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 border border-teal-400/30">
                    {edu.percentage}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
