import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Play } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Projects() {
  const projects = [
    {
      title: "AgentFlow - Agentic AI Marketplace",
      description: "Agentic AI Platform for Streamlined Agent Development",
      image: "/D2K 3.jpeg",
      category: ["Full Stack", "AI/ML"],
      technologies: ["Next.js", "React Flow","SQLAlchemy","HuggingFace","FastAPI", "Python", "Axios"],
      features: ["AI Agent Marketplace", "Real-time Chat", "No-code Agent Development", "Agent Dashboard"],
      status: "Live",
      links: {
        demo: "https://www.youtube.com/watch?v=9vzwt6VrFLQ"
      }
    },
    {
      title: "DDoS Shield",
      description: "DDoS Detection and Mitigation System in Real-time using Machine Learning",
      image: "/DDoS1.jpg",
      category: ["Cyber Security","AI/ML"],
      technologies: ["Python", "TensorFlow Lite", "CICFlowMeter"],
      features: ["DDoS Detection", "Real-time Mitigation", "Machine Learning", "CICFlowMeter"],
      status: "Development",
      links: {
        github: "https://github.com/nandininema07/DDoS-Detection-and-Analysis-using-ML",
        demo: "https://youtu.be/Pbu9E7b5f_M"
      }
    },
    {
      title: "Fambot - AI Powered Home Assistance Robot",
      description: "Fambot is a home assistance robot that uses AI to help you with your daily tasks.",
      image: "/Frontend Arena 3.jpeg",
      category: ["Website Development"],
      technologies: ["Next.js","TypeScript", "Spline", "Three.js", "Framer Motion", "Tailwind CSS"],
      features: ["AI Powered Home Assistance", "Real-time Results"],
      status: "Live",
      links: {
        live: "https://react-masters-fambot.vercel.app/",
        github: "https://github.com/nandininema07/React-Masters"
      }
    },
    {
      title: "Arogyam - Machine Learning Ayurveda Recommendation System",
      description: "Arogyam is an AI-powered Ayurveda recommendation system that can recommend Ayurvedic remedies for various diseases.",
      image: "/Devquest 2.jpeg",
      category: ["AI/ML", "Full Stack"],
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "AWS", "Docker"],
      features: ["Ayurveda Recommendation System", "Real-time Results", "Connects Doctors with Patients", "API Integration"],
      status: "Live",
      links: {
        github: "https://github.com/nandininema07/Innovatrix-DevQuest ",
        demo: "https://youtu.be/-NLv9LkT9CI"
      }
    },
    {
      title: "ChillSlots - Game and Arcade Booking Website",
      description: "ChillSlots is a comprehensive digital platform that simplifies and streamlines the process of booking gaming and sports activities.",
      image: "/Chillslots.jpg",
      category: ["Website Development"],
      technologies: ["HTML", "CSS", "JavaScript", "MongoDB"],
      features: ["Real-time Avalability", "Booking System", "Payment Integration", "User Authentication"],
      status: "Live",
      links: {
        demo: "https://youtu.be/En9ncngWQ-0",
        github: "https://github.com/nandininema07/CHILLSLOTS"
      }
    },
    {
      title: "SeismoTrack - Seismic Tracking System for Celestial Bodies",
      description: "SeismoTrack is a machine learning pipeline that analyzes seismic data from multiple celestial bodies to detect, track, filter and transmit seismic events.",
      image: "/NASA 1.png",
      category: ["AI/ML", "Data Science"],
      technologies: ["Scikit-learn", "SciPy", "Flask", "NASA APIs", "D3.js", "Python"],
      features: ["Seismic Event Detection", "Real-time Tracking", "Data Filtering", "Data Transmission"],
      status: "Live",
      links: {
        github: "https://github.com/AAGAM17/sesimotrack",
        demo: "https://youtu.be/ZMeOc4oTTZ0"
      }
    }
  ]

  const categories = ["All", "Full Stack", "AI/ML", "Website Development", "Cyber Security", "Data Science"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => 
        Array.isArray(project.category) 
          ? project.category.includes(selectedCategory)
          : project.category === selectedCategory
      )

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-primary/5">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions and creative implementations across various domains
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-primary to-accent text-white hover:scale-105"
                  : "border-primary/30 hover:border-primary/60 hover:scale-105"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              <Card className="h-full glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                    {Array.isArray(project.category) ? (
                      project.category.map((cat, index) => (
                        <Badge 
                          key={index}
                          variant="secondary" 
                          className="bg-background/80 backdrop-blur-sm text-xs"
                        >
                          {cat}
                        </Badge>
                      ))
                    ) : (
                      <Badge 
                        variant="secondary" 
                        className="bg-background/80 backdrop-blur-sm"
                      >
                        {project.category}
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant="secondary" 
                      className={`${
                        project.status === 'Live' 
                          ? 'bg-green-500/80' 
                          : project.status === 'Beta'
                          ? 'bg-yellow-500/80'
                          : 'bg-blue-500/80'
                      } text-white backdrop-blur-sm`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature) => (
                        <div key={feature} className="text-xs text-muted-foreground flex items-center gap-1">
                          <div className="w-1 h-1 rounded-full bg-primary"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-background/50 rounded-md text-xs border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    {project.links.live && (
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-primary/80 to-accent/80 hover:from-primary hover:to-accent transition-all duration-300"
                        asChild
                      >
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </a>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-primary/30 hover:border-primary/60 transition-all duration-300"
                        asChild
                      >
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-primary/30 hover:border-primary/60 transition-all duration-300"
                        asChild
                      >
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <Play className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
