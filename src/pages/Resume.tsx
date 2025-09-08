import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye, ExternalLink } from "lucide-react";
import resumeUrl from "@/pages/Resume.pdf"

const Resume = () => {


  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 hero-gradient">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <FileText size={32} className="text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="text-gradient">Resume</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Download my latest resume 
          </p>
        </div>

        {/* Resume Actions */}
        <div className="mb-12 animate-scale-in">
          <Card className="p-8 bg-surface border-card-border card-hover text-center">
            <div className="mb-6">
              <div className="w-24 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg">
                <FileText size={48} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Thilagan Iniyavan - Resume
              </h3>
            </div>

            <div className="flex justify-center">
              <Button 
                className="btn-primary text-lg px-12 py-4"
                asChild
              >
                <a href={resumeUrl} download="ThilaganIniyavan.pdf">
                  <Download className="mr-3" size={24} />
                  Download Resume
                </a>
              </Button>
            </div>
          </Card>
        </div>

        {/* Resume Information */}
        <div className="mb-12 animate-fade-in">
          <Card className="p-8 bg-surface border-card-border card-hover text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText size={40} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Professional Resume
            </h3>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              Download my comprehensive resume with detailed experience, skills, and achievements in PDF format.
            </p>
            <div className="text-sm text-text-muted bg-surface-secondary rounded-lg p-4 max-w-sm mx-auto">
              <strong className="text-primary">File Format:</strong> PDF<br />
              <strong className="text-primary">Size:</strong> Optimized for ATS<br />
              <strong className="text-primary">Updated:</strong> September 2025
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default Resume;