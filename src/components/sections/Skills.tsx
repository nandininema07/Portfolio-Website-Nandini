
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Redux"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "FastAPI", "MongoDB", "PostgreSQL", "Redis"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "AI/ML",
      skills: ["TensorFlow", "PyTorch", "OpenAI API", "Langchain", "Hugging Face", "Computer Vision"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Tools & Cloud",
      skills: ["AWS", "Docker", "Kubernetes", "Git", "Figma", "Firebase", "Vercel"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Mobile",
      skills: ["React Native", "Flutter", "Expo", "Firebase", "SQLite"],
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      title: "Design",
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Prototyping", "User Research"],
      gradient: "from-pink-500 to-rose-600"
    }
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-primary/5">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and intelligent applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
            >
              <div className={`text-center mb-6`}>
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.gradient} text-white font-semibold mb-4`}>
                  {category.title}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="bg-background/50 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
