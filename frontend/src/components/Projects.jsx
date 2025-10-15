import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { portfolioData } from '../mock';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-teal-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Showcasing my work in web development, IoT, and software engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-slate-900 border-slate-700 overflow-hidden hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
            >
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.name}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-400 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-teal-500/10 text-teal-400 border-teal-400/30 hover:bg-teal-500/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                    onClick={() => window.open(project.repoLink, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Repository
                  </Button>
                  {project.liveDemo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-teal-400/50 text-teal-400 hover:bg-teal-500/10"
                      onClick={() => window.open(project.liveDemo, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
