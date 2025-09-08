import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
const experiences = [
  {
    title: "Student Intern",
    company: "Teclever Solutions Pvt Ltd",
    location: "Bengaluru, India",
    period: "Nov 2024",
    type: "Internship",
    description: [
      "Gained hands-on experience with Salesforce admin and developer roles",
      "Built 5+ applications in Salesforce to understand real-world use cases",
      "Researched and analyzed 50+ borescopes to assist in purchase decisions"
    ],
    tech: ["Salesforce", "Apex", "SOQL", "Process Automation"]
  },
  {
    title: "Software Engineer Intern",
    company: "Sri Sathya Sai Seva Organization",
    location: "India",
    period: "Nov 2024 - Dec 2024",
    type: "Internship",
    description: [
      "Developed and deployed a Firebase-powered Next.js web app for event management",
      "Facilitated seamless operations for 750+ participants, 70+ judges, and 36 events",
      "Built district-wise dashboards with search, filters, leaderboards, and real-time grading"
    ],
    tech: ["Next.js", "Firebase", "React", "JavaScript", "TailwindCSS"]
  },
  {
    title: "Core Team & Multimedia",
    company: "GalaxyZSpace Pvt Ltd",
    location: "India",
    period: "Apr 2025 - Jul 2025",
    type: "Startup",
    description: [
      "Designed and developed multimedia content including graphics, videos, and interactive assets",
      "Collaborated with cross-functional teams to enhance visual storytelling and branding",
      "Ensured consistency across digital marketing and social media platforms"
    ],
    tech: ["Figma", "Adobe Creative Suite", "Canva", "UI/UX Design"]
  }
];


  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 hero-gradient">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Briefcase size={32} className="text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="text-gradient">Experience</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            A journey through my professional career and the skills I've developed along the way
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative pb-12 animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="timeline-dot"></div>

              {/* Content */}
              <div className="ml-16">
                <Card className="card-hover bg-surface border-card-border">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <div className="text-lg font-semibold text-primary mb-2">
                          {exp.company}
                        </div>
                      </div>
                      <Badge 
                        variant="secondary"
                        className="bg-accent/10 text-accent-foreground border-accent/20 w-fit"
                      >
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-4 text-text-secondary">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-text-secondary">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experience;