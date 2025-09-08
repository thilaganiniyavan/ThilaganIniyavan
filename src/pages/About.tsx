import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const skills = [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "Django",
    "ReactJS",
    "NodeJS",
    "Flutter",
    "Firebase",
    "MongoDB",
    "SQL",
    "Git",
    "Linux",
    "Data Structures & Algorithms (DSA)",
    "Object-Oriented Programming (OOP)",
    "UI/UX Prototyping (Figma)"
];

  const socialLinks = [
    { icon: Github, href: "https://github.com/thilaganiniyavan", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/thilaganiniyavan", label: "LinkedIn" },
    { icon: Mail, href: "mailto:thilagan@gmail.com", label: "Email" },
  ];

  return (
    <div className="min-h-screen hero-gradient">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="relative inline-block mb-8">
              <img
                src={profilePhoto}
                alt="Thilagan Iniyavan"
                className="w-48 h-48 rounded-full mx-auto object-cover shadow-2xl ring-4 ring-white/20 animate-float"
              />
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Thilagan Iniyavan</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            Computer Science major passionate about creating web and mobile applications. I enjoy blending technology and creativity to build solutions that make an impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/projects">
                <Button className="btn-primary text-lg px-8 py-4">
                  View My Work
                </Button>
              </Link>
              <Link to="/resume">
              <Button variant="outline" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white">
                Download Resume
              </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="p-3 rounded-full bg-surface hover:bg-card-hover transition-all duration-300 hover:scale-110 shadow-md"
                  aria-label={link.label}
                >
                  <link.icon size={24} className="text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold mb-6 text-foreground">About Me</h2>
              <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                <p>
                  I’m a Computer Science and Engineering student with a strong interest in web and app development. I’ve worked on projects such as real-time chat platforms, blog applications, and large-scale event management systems, gaining hands-on experience with technologies like Firebase, Next.js, Django, React, and Flutter.
                </p>
                <p>
                  My internships and collaborative work have helped me build practical skills in both software engineering and creative problem-solving.
                </p>
                <p>
                  Outside of technical work, I’ve contributed to student organizations and events in roles that allowed me to collaborate with diverse teams and enhance my leadership, communication, and organizational abilities. I enjoy combining technology and creativity to build impactful solutions and am always curious to learn, experiment, and grow as a developer.
                </p>
              </div>
              
              <div className="flex items-center space-x-6 mt-8 text-text-muted">
                <div className="flex items-center">
                  <MapPin className="mr-2" size={18} />
                  Coimbatore, India
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2" size={18} />
                  Available for work
                </div>
              </div>
            </div>

            <Card className="p-8 card-hover animate-scale-in">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="text-sm px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-card-border">
                <h4 className="font-semibold mb-4 text-foreground">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-sm text-text-muted">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">4+</div>
                    <div className="text-sm text-text-muted">Months Experience</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;