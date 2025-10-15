import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { Card } from './ui/card';
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

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {education.map((edu) => (
              <Card
                key={edu.id}
                className="bg-slate-800 border-slate-700 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="text-teal-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {edu.level}
                        </h3>
                        <p className="text-slate-300 mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-2 text-slate-400">
                          <Calendar size={16} />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        edu.status === 'Pursuing'
                          ? 'bg-teal-500/10 text-teal-400 border border-teal-400/30'
                          : 'bg-slate-700 text-slate-300'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
