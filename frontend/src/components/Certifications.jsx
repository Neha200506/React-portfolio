import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { portfolioData } from '../mock';

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-teal-400">Certifications</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="bg-slate-900 border-slate-700 overflow-hidden hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                    <Award className="text-teal-400" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-teal-400 text-sm font-medium mb-3">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {cert.description}
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  className="border-teal-400/50 text-teal-400 hover:bg-teal-500/10 hover:border-teal-400 w-full"
                  onClick={() => window.open(cert.certificateLink, '_blank')}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Certificate
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
