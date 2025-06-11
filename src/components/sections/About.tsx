
import { motion } from 'framer-motion'
import { Code, Palette, Brain, Rocket } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building end-to-end solutions with modern frameworks and technologies"
    },
    {
      icon: Brain,
      title: "Gen AI Development",
      description: "Creating intelligent applications powered by cutting-edge AI models"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Crafting beautiful, intuitive interfaces that users love"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Always exploring new technologies and pushing creative boundaries"
    }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who thrives at the intersection of technology and creativity. 
            With expertise in full-stack development, AI integration, and user experience design, 
            I create digital solutions that are both innovative and user-centric.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass hover:glow transition-all duration-300 hover:scale-105 border-primary/20 hover:border-primary/40">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 border border-primary/20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                Started as a curious developer fascinated by the endless possibilities of code. 
                Over the years, I've evolved into a versatile technologist who bridges the gap 
                between complex backend systems and intuitive user interfaces.
              </p>
              <p className="text-muted-foreground">
                My passion for AI and machine learning drives me to create intelligent applications 
                that not only solve problems but also enhance human experiences. Every project is 
                an opportunity to push boundaries and create something extraordinary.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "3+", label: "Years Experience" },
                { number: "10+", label: "Hackathons" },
                { number: "∞", label: "Lines of Code" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
