import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star, Trophy, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'

export function Education() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const education = [
    {
      degree: "Bachelor of Technology in Information Technology ; Honors in DevOps",
      institution: "SVKM's Dwarkadas J. Sanghvi College of Engineering",
      duration: "2023 - 2027",
      location: "Mumbai, Maharashtra, India",
      grade: "CGPA: 9.45/10",
      highlights: ["Data Structures & Algorithms", "Machine Learning", "Web Development", "Database Management", "Operating Systems", "System Design", "Software Engineering"],
      color: "from-blue-500 to-purple-600",
      description: "Specialized in cutting-edge technologies with focus on AI and full-stack development",
      logo: "/DJSCE_Logo.png"
    },
    {
      degree: "High School",
      institution: "St. John's Universal School",
      duration: "2011 - 2021",
      location: "Mumbai, Maharashtra, India",
      grade: "97.8%",
      highlights: ["Mathematics", "Computer Science", "Physics", "English"],
      color: "from-green-500 to-teal-600",
      description: "Foundation in STEM subjects with early programming experience",
      logo: "/Universal.jpeg"
    }
  ]


  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-primary/5 to-background"></div>
        <div className="absolute top-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Academic <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building knowledge foundations and continuous learning pathways
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full glass border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} opacity-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                      {edu.logo ? (
                        <img 
                          src={edu.logo} 
                          alt={`${edu.institution} logo`}
                          className="w-full h-full object-contain p-2"
                        />
                      ) : (
                        <GraduationCap className="w-8 h-8 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{edu.degree}</h3>
                      <p className="text-lg font-semibold text-primary mb-2">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mb-4">{edu.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-primary" />
                      <span>{edu.grade}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-primary" />
                      <span>Honors</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Key Subjects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 bg-background/50 rounded-full text-xs border border-primary/20 hover:border-primary/40 transition-colors duration-300"
                        >
                          {highlight}
                        </span>
                      ))}
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
