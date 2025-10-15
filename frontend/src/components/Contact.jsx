import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { portfolioData } from '../mock';

const Contact = () => {
  const { personal } = portfolioData;

  const handleMessageClick = () => {
    window.location.href = `mailto:${personal.email}?subject=Hello Neha!&body=Hi Neha,%0D%0A%0D%0AI would like to connect with you.`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-teal-400">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-slate-800 border-slate-700">
            <div className="p-8">
              {/* About Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">About Me</h3>
                <p className="text-slate-300 leading-relaxed">
                  {personal.summary}
                </p>
              </div>

              {/* Message Button */}
              <div className="mb-8">
                <Button
                  onClick={handleMessageClick}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6 text-lg"
                >
                  <Send className="mr-2" size={20} />
                  Send Me a Message
                </Button>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-teal-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-slate-200 hover:text-teal-400 transition-colors"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 hover:text-white transition-all duration-200 flex-1 justify-center"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 hover:text-white transition-all duration-200 flex-1 justify-center"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
