
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Play } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Projects() {
  const projects = [
    {
      title: "AI-Powered E-Commerce Platform",
      description: "Full-stack e-commerce platform with AI-driven product recommendations, real-time chat support, and advanced analytics dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      category: "Full Stack",
      technologies: ["Next.js", "Node.js", "MongoDB", "TensorFlow", "Redis", "Stripe"],
      features: ["AI Recommendations", "Real-time Chat", "Payment Integration", "Admin Dashboard"],
      status: "Live",
      links: {
        live: "#",
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Smart Health Monitoring App",
      description: "Mobile application that uses computer vision and ML to monitor health vitals through camera and provide personalized health insights.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
      category: "Mobile & AI",
      technologies: ["React Native", "Python", "OpenCV", "Firebase", "TensorFlow Lite"],
      features: ["Vital Monitoring", "Health Analytics", "Offline Support", "Data Sync"],
      status: "Development",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting platform built on Ethereum blockchain with smart contracts ensuring vote integrity and anonymity.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
      category: "Blockchain",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS", "MetaMask"],
      features: ["Smart Contracts", "Vote Verification", "Anonymous Voting", "Real-time Results"],
      status: "Live",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "Neural Style Transfer Web App",
      description: "Web application that applies artistic styles to images using deep learning neural networks with real-time processing.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=800&q=80",
      category: "AI/ML",
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "AWS", "Docker"],
      features: ["Style Transfer", "Batch Processing", "Cloud Storage", "API Integration"],
      status: "Live",
      links: {
        live: "#",
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Real-time Collaboration Tool",
      description: "Web-based collaboration platform with real-time document editing, video calls, and project management features.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      category: "Full Stack",
      technologies: ["React", "Socket.io", "Node.js", "PostgreSQL", "WebRTC", "Redux"],
      features: ["Real-time Editing", "Video Calls", "Task Management", "File Sharing"],
      status: "Beta",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "AR Product Visualizer",
      description: "Augmented reality mobile app that allows users to visualize furniture and products in their real environment before purchase.",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80",
      category: "AR/VR",
      technologies: ["Unity", "ARCore", "C#", "Blender", "Firebase", "Android"],
      features: ["3D Visualization", "Room Scanning", "Product Catalog", "Social Sharing"],
      status: "Development",
      links: {
        github: "#",
        demo: "#"
      }
    }
  ]

  const categories = ["All", "Full Stack", "AI/ML", "Mobile & AI", "Blockchain", "AR/VR"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant="secondary" 
                      className="bg-background/80 backdrop-blur-sm"
                    >
                      {project.category}
                    </Badge>
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
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                    )}
                    {project.links.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-primary/30 hover:border-primary/60 transition-all duration-300"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-primary/30 hover:border-primary/60 transition-all duration-300"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Demo
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
