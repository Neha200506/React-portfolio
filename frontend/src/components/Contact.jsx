import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, User, MessageSquare } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { portfolioData } from '../mock';

const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    
    // Show success message
    setFormStatus('Opening your email client...');
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormStatus('');
    }, 2000);
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

        {/* About Me Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card className="bg-slate-800 border-slate-700 hover:border-teal-400/30 transition-all duration-300">
            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-6 text-center">
                About <span className="text-teal-400">Me</span>
              </h3>
              <div className="space-y-4 text-slate-300 text-lg leading-relaxed max-w-4xl mx-auto">
                <p>
                  Hello! I'm Neha Redekar, a Computer Science Engineering student at Pimpri Chinchwad University.
                </p>
                <p>
                  I'm a curious and passionate web developer with experience in C++, HTML, CSS, and learning Django & AI.
                </p>
                <p>
                  I love building creative, real-world projects and participating in hackathons to push my limits.
                </p>
                <p>
                  I enjoy solving problems, designing interfaces, and writing clean code. Let's build something amazing together!
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form Card */}
            <Card className="bg-slate-800 border-slate-700 hover:border-teal-400/30 transition-all duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="text-slate-500" size={20} />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="text-slate-500" size={20} />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <MessageSquare className="text-slate-500" size={20} />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all resize-none"
                        placeholder="Your message here..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 text-lg"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>

                  {/* Status Message */}
                  {formStatus && (
                    <p className="text-center text-teal-400 text-sm">{formStatus}</p>
                  )}
                </form>
              </div>
            </Card>

            {/* Contact Info Card */}
            <Card className="bg-slate-800 border-slate-700 hover:border-teal-400/30 transition-all duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                {/* Email */}
                <div className="mb-8">
                  <div className="flex items-start gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-teal-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Email Address</p>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-slate-200 hover:text-teal-400 transition-colors font-medium"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                  <div className="space-y-3">
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-slate-600 group-hover:bg-teal-500/20 flex items-center justify-center transition-colors">
                        <Github size={20} className="group-hover:text-teal-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-400">GitHub</p>
                        <p className="font-medium">View My Repositories</p>
                      </div>
                    </a>
                    
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-slate-600 group-hover:bg-teal-500/20 flex items-center justify-center transition-colors">
                        <Linkedin size={20} className="group-hover:text-teal-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-400">LinkedIn</p>
                        <p className="font-medium">Connect Professionally</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="p-4 bg-teal-500/10 border border-teal-400/20 rounded-lg">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <span className="text-teal-400 font-semibold">Open to opportunities!</span> I'm always interested in hearing about new projects, collaborations, and learning experiences.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
