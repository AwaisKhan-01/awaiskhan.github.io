import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import gpuProject from "@/assets/gpu-project.jpg";
import parallelProject from "@/assets/parallel-project.jpg";
import fanNationProject from "@/assets/fannation-project.jpg";
import farmConnectProject from "@/assets/farmconnect-project.jpg";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    "Python", "TensorFlow", "PyTorch", "CUDA", "OpenMP", "MPI",
    "React", "Next.js", "Node.js", "Docker", "C/C++", "JavaScript",
    "MySQL", "MongoDB", "Spring Boot", "Git", "OpenCL", "NumPy"
  ];

  const projects = [
    {
      title: "Neural Network Acceleration on GPUs",
      description: "Accelerated MNIST inference by 70% using custom CUDA kernels and tensor cores",
      tech: ["CUDA", "Python", "TensorFlow", "GPU Optimization"],
      image: gpuProject,
      github: "https://github.com/your-username/neural-network-cuda",
      highlights: ["70% performance improvement", "45% GPU occupancy boost", "30% cache miss reduction"]
    },
    {
      title: "Bubble-Sort IST Parallelizer",
      description: "High-performance parallel sorting with 2.1× speedup for 3.6M nodes",
      tech: ["C++", "MPI", "OpenMP", "OpenCL"],
      image: parallelProject,
      github: "https://github.com/your-username/parallel-bubble-sort",
      highlights: ["2.1× speedup achieved", "40% delay reduction", "Scalable memory management"]
    },
    {
      title: "Fan Nation",
      description: "Full-stack sports platform serving 500+ fans with real-time features",
      tech: ["Next.js", "Node.js", "MySQL", "React"],
      image: fanNationProject,
      github: "https://github.com/your-username/fan-nation",
      highlights: ["500+ active users", "40% faster response times", "30% engagement increase"]
    },
    {
      title: "FarmConnect",
      description: "Web platform connecting 500+ farmers and buyers for direct transactions",
      tech: ["Spring Boot", "Next.js", "MySQL", "REST APIs"],
      image: farmConnectProject,
      github: "https://github.com/your-username/farm-connect",
      highlights: ["500+ users connected", "40% load time reduction", "30% engagement boost"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-cyberpunk glitch" data-text="Awais Khan">Awais Khan</div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-smooth hover-glow">About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-smooth hover-glow">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-smooth hover-glow">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-smooth hover-glow">Contact</button>
              <ThemeToggle />
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-background/70 dark:bg-background/80"></div>
        </div>
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-60 animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent-secondary rounded-full opacity-80 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-accent-tertiary rounded-full opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 pulse-glow">
            <span className="text-cyberpunk glitch" data-text="Awais Khan">Awais Khan</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 float">
            AI & ML Enthusiast | Computer Vision | NLP | GPU Acceleration
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Passionate about transforming ideas into intelligent solutions through cutting-edge AI/ML technologies and parallel computing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cyberpunk" size="lg" onClick={() => scrollToSection('projects')} className="hover-cyberpunk">
              View My Work <ArrowRight className="ml-2" />
            </Button>
            <Button variant="neural" size="lg" onClick={() => scrollToSection('contact')} className="hover-neural">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyberpunk glitch" data-text="About Me">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="w-64 h-64 mx-auto bg-gradient-cyberpunk rounded-full flex items-center justify-center shadow-cyberpunk hover-cyberpunk">
                <div className="text-6xl animate-float">📸</div>
              </div>
              {/* Floating tech icons */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center animate-float">
                <span className="text-primary text-sm">AI</span>
              </div>
              <div className="absolute bottom-8 right-8 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                <span className="text-accent text-sm">ML</span>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Computer Science student at FAST National University with a passion for AI/ML and parallel computing. 
                I specialize in accelerating neural networks using CUDA, developing high-performance parallel algorithms, 
                and building scalable web applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me behind the camera as Head of Photography at Google Developers Group, 
                capturing moments and leading visual storytelling for tech events.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="px-4 py-2 hover-glow transition-smooth">🎓 FAST-NUCES Student</Badge>
                <Badge variant="secondary" className="px-4 py-2 hover-glow transition-smooth">📸 Photography Leader</Badge>
                <Badge variant="secondary" className="px-4 py-2 hover-glow transition-smooth">🤖 AI/ML Enthusiast</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden border-border hover:shadow-card-custom transition-smooth hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Button variant="project" className="w-full" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      View on GitHub <ArrowRight className="ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Technical Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 text-center hover:bg-gradient-card hover:shadow-card-custom transition-smooth hover:scale-105"
                >
                  <span className="font-medium text-card-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyberpunk glitch" data-text="Get In Touch">Get In Touch</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gradient">Let's Connect</h3>
              <p className="text-muted-foreground">
                I'm always interested in discussing AI/ML projects, parallel computing challenges, 
                or photography collaborations. Feel free to reach out!
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-card border border-border hover:shadow-card-custom transition-smooth hover-glow">
                  <div className="w-12 h-12 bg-gradient-neural rounded-full flex items-center justify-center shadow-neural">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:ssc.awaiskhan.2490@gmail.com" className="text-primary hover:text-primary-glow transition-smooth">
                      ssc.awaiskhan.2490@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-card border border-border hover:shadow-card-custom transition-smooth hover-glow">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a href="#" className="text-primary hover:text-primary-glow transition-smooth">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-card border border-border hover:shadow-card-custom transition-smooth hover-glow">
                  <div className="w-12 h-12 bg-gradient-cyberpunk rounded-full flex items-center justify-center shadow-cyberpunk">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a href="#" className="text-primary hover:text-primary-glow transition-smooth">
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="shadow-card-custom border-border bg-gradient-card hover:shadow-cyberpunk transition-smooth">
              <CardHeader>
                <CardTitle className="text-gradient">Send a Message</CardTitle>
                <CardDescription>Let's discuss your next AI/ML project!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input placeholder="Your Name" className="border-border bg-background/50 focus:shadow-glow transition-glow" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" className="border-border bg-background/50 focus:shadow-glow transition-glow" />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="border-border bg-background/50 resize-none focus:shadow-glow transition-glow"
                  />
                </div>
                <Button variant="cyberpunk" className="w-full hover-cyberpunk">
                  Send Message <ArrowRight className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Awais Khan. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;