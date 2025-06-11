import { motion } from 'framer-motion'
import { ArrowLeft, Trophy, Users, Clock, Code, ExternalLink, Award, Calendar, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useEffect, useState } from 'react'

interface HackathonDetailProps {
  hackathon: {
    name: string
    position: string
    team: string
    duration: string
    date: string
    project: string
    description: string
    technologies: string[]
    achievements: string[]
    links: {
      demo?: string
      github?: string
      website?: string
    }
    detailedDescription: string
    challenges: string[]
    solutions: string[]
    impact: string
    teamMembers: string[]
    timeline: Array<{
      time: string
      activity: string
    }>
    images: string[]
  }
  onBack: () => void
}

export function HackathonDetail({ hackathon, onBack }: HackathonDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === hackathon.images.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [hackathon.images.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back button */}
          <Button
            variant="outline"
            onClick={onBack}
            className="mb-8 border-primary/30 hover:border-primary/60"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Hackathons
          </Button>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {hackathon.name}
              </span>
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-gradient-to-r from-primary/20 to-accent/20">
                {hackathon.position}
              </Badge>
              <Badge variant="outline">{hackathon.date}</Badge>
              <Badge variant="outline">{hackathon.duration}</Badge>
            </div>
          </div>

          {/* Image Carousel */}
          {hackathon.images && hackathon.images.length > 0 && (
            <Card className="glass border-primary/20 mb-8 overflow-hidden">
              <CardContent className="p-4">
                <div className="grid grid-cols-3 gap-4">
                  {hackathon.images.slice(0, 3).map((image, index) => (
                    <div
                      key={index}
                      className="aspect-video"
                    >
                      <img
                        src={image}
                        alt={`Hackathon image ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Project Overview */}
          <Card className="glass border-primary/20 mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-primary">{hackathon.project}</h2>
              <p className="text-lg text-muted-foreground mb-6">{hackathon.description}</p>
              <p className="text-foreground leading-relaxed">{hackathon.detailedDescription}</p>
              {/* Links */}
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            {hackathon.links.website && (
              <Button 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80"
                onClick={() => window.open(hackathon.links.website, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Website
              </Button>
            )}
            {hackathon.links.github && (
              <Button 
                variant="outline" 
                className="border-primary/30 hover:border-primary/60"
                onClick={() => window.open(hackathon.links.github, '_blank')}
              >
                <Code className="w-4 h-4 mr-2" />
                View Code
              </Button>
            )}
            {hackathon.links.demo && (
              <Button 
                variant="outline" 
                className="border-primary/30 hover:border-primary/60"
                onClick={() => window.open(hackathon.links.demo, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            )}
          </div>
            </CardContent>
          </Card>

          {/* Key Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="glass border-primary/20 text-center">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Team</h3>
                <p className="text-sm text-muted-foreground">{hackathon.team}</p>
              </CardContent>
            </Card>
            <Card className="glass border-primary/20 text-center">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Duration</h3>
                <p className="text-sm text-muted-foreground">{hackathon.duration}</p>
              </CardContent>
            </Card>
            <Card className="glass border-primary/20 text-center">
              <CardContent className="p-6">
                <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Achievement</h3>
                <p className="text-sm text-muted-foreground">{hackathon.position}</p>
              </CardContent>
            </Card>
          </div>

          {/* Technologies Used */}
          <Card className="glass border-primary/20 mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {hackathon.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full text-sm font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Challenges & Solutions */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="glass border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-red-400">Challenges Faced</h3>
                <ul className="space-y-3">
                  {hackathon.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-green-400">Solutions Implemented</h3>
                <ul className="space-y-3">
                  {hackathon.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{solution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <Card className="glass border-primary/20 mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Development Timeline</h3>
              <div className="space-y-4">
                {hackathon.timeline.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-primary">{item.time}</div>
                      <div className="text-sm text-muted-foreground">{item.activity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Impact & Achievements */}
          <Card className="glass border-primary/20 mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Impact & Achievements
              </h3>
              <p className="text-muted-foreground mb-6">{hackathon.impact}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {hackathon.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Trophy className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
