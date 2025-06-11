
import { motion } from 'framer-motion'
import { Building, Calendar, MapPin, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Indian Institute of Technology, Bombay",
      duration: "January 2025 - Present",
      location: "Mumbai, Maharashtra, India",
      type: "Internship",
      description: "Leading development of scalable web applications and AI-powered features for enterprise clients.",
      achievements: [
        "Built backend logic for organizations of national importance",
        "Leveraged modern front-end technologies to create responsive, user-friendly interfaces",
        "Collaborated with a team of 5 developers on multiple high-impact projects", 
        "Architected microservices infrastructure serving 1M+ users"
      ],
      technologies: ["React", "Node.js", "Django", "Python", "Flask", "Firebase"]
    },
    {
      title: "Frontend Developer Intern",
      company: "Plasmid Innovations",
      duration: "August 2024 - October 2024",
      location: "Mumbai, Maharashtra, India",
      type: "Internship",
      description: "Developed and maintained full-stack applications using modern web technologies.",
      achievements: [
        "Built responsive web applications serving 100K+ users",
        "Created responsive web applications for development of startups",
        "Actively involved in the development phase in a startup environment",
        "Collaborated with design team to improve UX metrics by 35%"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"]
    }
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey building innovative solutions and leading technical initiatives
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-accent opacity-30"></div>
              )}
              
              <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] ml-16">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Timeline dot */}
                    <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-background"></div>
                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <Building className="w-8 h-8 text-primary" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                          <p className="text-xl text-primary font-semibold">{exp.company}</p>
                        </div>
                        <div className="text-right">
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-sm font-medium">
                            {exp.type}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6">{exp.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.2 + achIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-2 text-sm"
                            >
                              <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.05 }}
                              viewport={{ once: true }}
                              className="px-3 py-1 bg-background/50 rounded-full text-xs border border-primary/20 hover:border-primary/40 transition-colors duration-300"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
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
