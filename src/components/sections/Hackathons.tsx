
import { motion } from 'framer-motion'
import { Trophy, Users, Clock, Code, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

export function Hackathons() {
  const navigate = useNavigate()

  const hackathons = [
    {
      name: "Global AI Challenge 2024",
      position: "1st Place Winner",
      team: "Team Innovators",
      duration: "48 hours",
      date: "March 2024",
      project: "AI-Powered Healthcare Assistant",
      description: "Developed an intelligent healthcare chatbot that can diagnose symptoms and recommend treatments using advanced NLP models.",
      technologies: ["Python", "TensorFlow", "OpenAI API", "React", "Node.js"],
      achievements: ["$50,000 prize money", "Mentorship from industry experts", "Featured in tech magazines"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      name: "HackTech 2023",
      position: "2nd Place",
      team: "Code Crusaders",
      duration: "36 hours",
      date: "November 2023",
      project: "EcoTrack - Carbon Footprint Tracker",
      description: "Built a comprehensive platform to track and reduce personal carbon footprint with gamification elements.",
      technologies: ["Next.js", "MongoDB", "Python", "Chart.js", "Firebase"],
      achievements: ["$25,000 prize", "Best UI/UX Award", "Partnership offer from sustainability startup"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      name: "MLH Local Hack Day",
      position: "1st Place",
      team: "Solo Project",
      duration: "12 hours",
      date: "September 2023",
      project: "StudyBuddy - AI Study Companion",
      description: "Created an AI-powered study assistant that generates personalized quizzes and study plans.",
      technologies: ["React Native", "FastAPI", "SQLite", "Hugging Face"],
      achievements: ["Best Solo Project", "Most Innovative Use of AI", "MLH Top 50 Global"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      name: "NASA Space Apps Challenge",
      position: "3rd Place",
      team: "Space Explorers",
      duration: "48 hours",
      date: "October 2022",
      project: "Mars Weather Predictor",
      description: "Developed a machine learning model to predict Mars weather patterns using NASA's open data.",
      technologies: ["Python", "Scikit-learn", "D3.js", "Flask", "NASA APIs"],
      achievements: ["NASA recognition", "Featured on Space Apps website", "Invitation to NASA facility tour"],
      links: {
        demo: "#",
        github: "#"
      }
    }
  ]

  const stats = [
    { number: "15+", label: "Hackathons Participated" },
    { number: "8", label: "Awards Won" },
    { number: "120+", label: "Hours Coded" },
    { number: "50+", label: "Developers Collaborated" }
  ]

  const handleViewDetails = (index: number) => {
    navigate(`/hackathon/${index}`)
  }

  return (
    <section id="hackathons" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-background"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hackathon <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experiences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Competing in high-intensity coding competitions and building innovative solutions under pressure
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 md:p-6 glass rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hackathon Projects */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
                    onClick={() => handleViewDetails(index)}>
                <CardContent className="p-4 md:p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Trophy className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold">{hackathon.name}</h3>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                          <span>{hackathon.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center gap-2 px-2 md:px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-xs md:text-sm font-medium">
                        {hackathon.position}
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="mb-4">
                    <h4 className="text-base md:text-lg font-semibold text-primary mb-2">{hackathon.project}</h4>
                    <p className="text-muted-foreground text-xs md:text-sm mb-4 line-clamp-3">{hackathon.description}</p>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-xs md:text-sm">
                      <Users className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                      <span className="truncate">{hackathon.team}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                      {hackathon.duration}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                      <span className="text-xs md:text-sm font-semibold">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {hackathon.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-background/50 rounded-md text-xs border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {hackathon.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{hackathon.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Button
                    className="w-full bg-gradient-to-r from-primary/80 to-accent/80 hover:from-primary hover:to-accent transition-all duration-300 group-hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleViewDetails(index)
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
