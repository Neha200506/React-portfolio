export const portfolioData = {
  personal: {
    name: "Neha Redekar",
    title: "BTech CSE Student",
    university: "Pimpri Chinchwad University",
    summary: "Hello! I'm Neha Redekar, a Computer Science Engineering student at Pimpri Chinchwad University. I'm a curious and passionate web developer with experience in C++, HTML, CSS, and learning Django & AI. I love building creative, real-world projects and participating in hackathons to push my limits. I enjoy solving problems, designing interfaces, and writing clean code. Let's build something amazing together!",
    email: "neharedekar20@gmail.com",
    github: "https://github.com/Neha200506",
    linkedin: "https://www.linkedin.com/in/neha-redekar-a7812128a/",
    profileImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%231e293b' width='400' height='400'/%3E%3Ctext fill='%23ffffff' font-size='120' font-weight='bold' x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial'%3ENR%3C/svg%3E"
  },
  skills: [
    { name: "C", icon: "code" },
    { name: "C++", icon: "code-2" },
    { name: "Python", icon: "file-code" },
    { name: "Java", icon: "coffee" },
    { name: "HTML & CSS", icon: "layout" },
    { name: "JavaScript", icon: "javascript" },
    { name: "React JS", icon: "atom" }
  ],
  projects: [
    {
      id: 1,
      name: "Assignment Monitoring System",
      description: "A Django web app that manages assignments, sends real-time email notifications, and stores data in MySQL.",
      technologies: ["Django", "MySQL", "SMTP", "Bootstrap"],
      repoLink: "https://github.com/Neha200506",
      liveDemo: null
    },
    {
      id: 2,
      name: "Gesture-Controlled IoT Car",
      description: "Control a robot car via hand gestures using OpenCV and WiFi, integrating ESP8266 for real-time communication.",
      technologies: ["Python", "OpenCV", "MediaPipe", "ESP8266"],
      repoLink: "https://github.com/Neha200506",
      liveDemo: null
    },
    {
      id: 3,
      name: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience built with React.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      repoLink: "https://github.com/Neha200506",
      liveDemo: null
    },
    {
      id: 4,
      name: "Task Management Dashboard",
      description: "A full-stack task management application with user authentication, real-time updates, and collaborative features.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      repoLink: "https://github.com/Neha200506",
      liveDemo: null
    }
  ],
  education: [
    {
      id: 1,
      level: "BTech in Computer Science Engineering",
      institution: "Pimpri Chinchwad University",
      status: "Pursuing",
      period: "2022 - Present"
    },
    {
      id: 2,
      level: "12th Standard",
      institution: "Pratibha Junior College",
      status: "Completed",
      period: "2020 - 2022"
    },
    {
      id: 3,
      level: "10th Standard",
      institution: "Vidya Niketan School",
      status: "Completed",
      period: "2019 - 2020"
    }
  ],
  hobbies: [
    {
      id: 1,
      name: "Reading Books",
      description: "Enhances knowledge, creativity, and critical thinking skills",
      icon: "book-open"
    },
    {
      id: 2,
      name: "Classical Dance",
      description: "Develops discipline, grace, and artistic expression",
      icon: "music"
    }
  ]
};
