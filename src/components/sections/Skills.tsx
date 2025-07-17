import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiThreedotjs, SiRedux,
  SiNodedotjs, SiExpress, SiPython, SiFastapi, SiMongodb, SiPostgresql, SiRedis,
  SiTensorflow, SiPytorch, SiOpenai, SiHuggingface, SiOpencv,
  SiAmazon, SiDocker, SiKubernetes, SiGit, SiFigma, SiFirebase, SiVercel,
  SiFlutter, SiExpo, SiSqlite,
  SiAdobexd, SiAdobephotoshop, SiAdobeillustrator,
  SiCplusplus, SiJavascript, SiHtml5, SiCss3, SiMysql,
  SiBootstrap, SiGithub, SiGoogle
} from 'react-icons/si'
import { FaBrain, FaJava, FaEthereum, FaCube } from 'react-icons/fa'
import { BiNetworkChart } from 'react-icons/bi'
import { TbSoup } from 'react-icons/tb'
import { VscGraph, VscCode } from 'react-icons/vsc'

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000", darkColor: "#FFFFFF" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
        { name: "Spline", icon: FaCube, color: "#000000", darkColor: "#FFFFFF" },
        { name: "Three.js", icon: SiThreedotjs, color: "#000000", darkColor: "#FFFFFF" },
        { name: "Redux", icon: SiRedux, color: "#764ABC" },
        { name: "React Flow", icon: BiNetworkChart, color: "#FF6B6B" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" }
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000", darkColor: "#FFFFFF" },
        { name: "FastAPI", icon: SiFastapi, color: "#009688" },
        { name: "Flask", icon: SiPython, color: "#000000", darkColor: "#FFFFFF" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
        { name: "SQL Database", icon: SiMysql, color: "#4479A1" },
      ],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "AI/ML",
      skills: [
        { name: "Hugging Face", icon: SiHuggingface, color: "#FF6B6B" },
        { name: "BeautifulSoup", icon: TbSoup, color: "#FF6B35" },
        // { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
        // { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
        { name: "OpenAI API", icon: SiOpenai, color: "#412991" },
        { name: "Langchain", icon: FaBrain, color: "#FF6B35" },
        { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
        { name: "Google GenAI", icon: SiGoogle, color: "#4285F4" }, // Google's GenAI
        { name: "Gemini", icon: SiGoogle, color: "#34A853" }, // Gemini by Google
        { name: "Vertex AI", icon: SiGoogle, color: "#EA4335" }, // Vertex AI by Google
        { name: "PaLM", icon: SiGoogle, color: "#FBBC05" }, // PaLM by Google
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Tools & Cloud",
      skills: [
        { name: "Web3", icon: FaEthereum, color: "#627EEA" },
        { name: "AWS", icon: SiAmazon, color: "#FF9900" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Vercel", icon: SiVercel, color: "#000000", darkColor: "#FFFFFF" },
        { name: "GitHub", icon: SiGithub, color: "#181717", darkColor: "#FFFFFF" },
      ],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C/C++", icon: SiCplusplus, color: "#00599C" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Java", icon: FaJava, color: "#ED8B00" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "SQL", icon: SiMysql, color: "#4479A1" }
      ],
      gradient: "from-purple-500 to-blue-600"
    },
    {
      title: "Design",
      skills: [
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "Adobe XD", icon: SiAdobexd, color: "#FF61F6" },
        { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
        { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
        { name: "Prototyping", icon: SiFigma, color: "#F24E1E" },
        { name: "User Research", icon: FaBrain, color: "#FF6B35" }
      ],
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${category.gradient} text-white font-semibold text-sm whitespace-nowrap`}>
                  {category.title}
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent"></div>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.03 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/40 hover:bg-primary/10 border border-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer group backdrop-blur-sm"
                    >
                      <div 
                        className="flex-shrink-0 w-5 h-5 flex items-center justify-center"
                        style={{ 
                          color: skill.darkColor ? `hsl(var(--foreground))` : skill.color 
                        }}
                      >
                        <IconComponent size={16} />
                      </div>
                      <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
