import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
const projects = [
  {
    title: "Auraxio - Chat Application",
    description: "A real-time chat application similar to WhatsApp, supporting text and media sharing with dynamic group creation and management.\n\n",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/thilaganiniyavan/Auraxio",
    demo: "",
    image: "https://thecrazyprogrammer.com/wp-content/uploads/2020/08/How-a-Real-Time-Chat-Application-Works.png"
  },
  {
    title: "Engaged - Blog Application",
    description: "A blog platform enabling users to create posts and allowing global viewers to comment and interact on various topics.",
    tech: ["HTML", "CSS", "JavaScript", "Django", "MySQL"],
    github: "https://github.com/thilaganiniyavan/Engaged",
    demo: "",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=250&fit=crop"
  },
  {
    title: "Efficient Movie Management System",
    description: "A Python-based movie management system using advanced data structures (Trie, AVL Tree, Segment Tree, Graph) for efficient search, sorting, and analytics.",
    tech: ["Python", "Data Structures", "OOP"],
    github: "https://github.com/thilaganiniyavan/Movie-Management-Systems",
    demo: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz-ygathZ9A53nz_SWiAdMo7zjlKUoF8EguA&s"
  },
  {
    title: "Tirupani - Mobile Application",
    description: "Frontend of a mobile application built with Flutter, featuring responsive UI components and high-fidelity Figma prototypes for seamless user experience.",
    tech: ["Flutter", "Figma", "JavaScript", "HTML", "CSS"],
    github: "",
    demo: "",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop"
  }
];


  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 hero-gradient">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Code2 size={32} className="text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            A collection of my recent work showcasing different technologies and problem-solving approaches
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
  key={index} 
  className="card-hover bg-surface border-card-border overflow-hidden animate-scale-in flex flex-col"
  style={{ animationDelay: `${index * 0.1}s` }}
>
  <div className="relative">
    <img 
      src={project.image} 
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
  </div>
  
  <CardHeader>
    <CardTitle className="text-xl font-bold text-foreground">
      {project.title}
    </CardTitle>
    <CardDescription className="text-text-secondary">
      {project.description}
    </CardDescription>
  </CardHeader>

  <CardContent className="flex flex-col flex-grow">
    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech, techIndex) => (
        <Badge 
          key={techIndex}
          variant="secondary"
          className="text-xs bg-primary/10 text-primary"
        >
          {tech}
        </Badge>
      ))}
    </div>

    {/* Action Button fixed at bottom */}
    <div className="pt-4 mt-auto">
      <Button 
        variant="outline" 
        size="sm"
        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        asChild
      >
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <Github size={16} className="mr-2" />
          View Code
        </a>
      </Button>
    </div>
  </CardContent>
</Card>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;