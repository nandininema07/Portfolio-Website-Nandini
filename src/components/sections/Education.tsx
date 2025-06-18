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
      grade: "CGPA: 9.42/10",
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

  const certifications = [
    { 
      name: "IBM Generative AI Engineer", 
      logo: "/ibm-logo.jpg",
      level: "Professional",
      images: ["/IBM1.jpg", "/IBM2.png"],
      credentialUrl: "https://www.credly.com/badges/1863f5b8-7bec-40c5-9c1b-b0365cd71a47/public_url" 
    },
    { 
      name: "Udemy Full Stack Web Developer", 
      logo: "/udemy.jpg",
      level: "Professional",
      images: ["/Full-Stack Web Developer Certificate- Nandini Nema.jpg"],
      credentialUrl: "https://www.udemy.com/certificate/UC-b1350f4f-ba0c-46c2-b3f3-102fc7a2b8a6/" 
    },
    { 
      name: "Udemy UI/UX Mastery", 
      logo: "/udemy.jpg",
      level: "Professional",
      images: ["Udemy UIUX Course Certificate- Nandini Nema.jpg"],
      credentialUrl: "https://www.udemy.com/certificate/UC-260bdf3f-1eec-4919-b346-ed83929fbd3e/"
    }
  ]

  const openCertificate = (index: number) => {
    setSelectedCert(index)
    setCurrentImageIndex(0)
  }

  const closeCertificate = () => {
    setSelectedCert(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedCert !== null) {
      const cert = certifications[selectedCert]
      setCurrentImageIndex((prev) => (prev + 1) % cert.images.length)
    }
  }

  const prevImage = () => {
    if (selectedCert !== null) {
      const cert = certifications[selectedCert]
      setCurrentImageIndex((prev) => (prev - 1 + cert.images.length) % cert.images.length)
    }
  }

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

        {/* Certifications with creative layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 border border-primary/20"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Professional <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Certifications</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={cert.logo} 
                    alt={`${cert.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors duration-300">
                  {cert.name}
                </h4>
                <div className="flex flex-col items-center gap-3">
                  <span className="inline-block px-2 py-1 bg-primary/20 rounded-full text-xs text-primary">
                    {cert.level}
                  </span>
                  <button
                    onClick={() => openCertificate(index)}
                    className="px-4 py-2 text-xs font-medium text-purple-600 hover:text-purple-700 border border-purple-300 hover:border-purple-400 rounded-lg transition-all duration-300 hover:bg-purple-50 group-hover:scale-105"
                  >
                    View Certificate
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      {selectedCert !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeCertificate}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-primary/20">
              <h3 className="text-2xl font-bold text-primary">
                {certifications[selectedCert].name}
              </h3>
              <button
                onClick={closeCertificate}
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image Carousel */}
            <div className="relative p-6 pb-8">
              <div className="relative bg-muted rounded-lg overflow-hidden p-4" style={{ maxHeight: '50vh' }}>
                <img
                  src={certifications[selectedCert].images[currentImageIndex]}
                  alt={`${certifications[selectedCert].name} certificate ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                  style={{ maxHeight: 'calc(50vh - 2rem)' }}
                />
                
                {/* Navigation Arrows */}
                {certifications[selectedCert].images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* View Credential Button - Now below the image */}
              {certifications[selectedCert].credentialUrl && (
                <div className="mt-4 text-center">
                  <a
                    href={certifications[selectedCert].credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    <span>View Credential</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}

              {/* Image Indicators */}
              {certifications[selectedCert].images.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {certifications[selectedCert].images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-primary scale-125' 
                          : 'bg-primary/30 hover:bg-primary/50'
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Image Counter */}
              <div className="text-center mt-2 text-sm text-muted-foreground">
                {currentImageIndex + 1} of {certifications[selectedCert].images.length}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
