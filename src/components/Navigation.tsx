import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { ThemeToggle } from './ThemeToggle'
import { Link, useLocation } from 'react-router-dom'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const location = useLocation()

  const navItems = [
    { id: 'hero', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/#about' },
    { id: 'skills', label: 'Skills', path: '/#skills' },
    { id: 'education', label: 'Education', path: '/#education' },
    { id: 'experience', label: 'Experience', path: '/#experience' },
    { id: 'hackathons', label: 'Hackathons', path: '/#hackathons' },
    { id: 'projects', label: 'Projects', path: '/#projects' },
    { id: 'contact', label: 'Contact', path: '/#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') return
      
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const handleNavigation = (path: string) => {
    if (path === '/') {
      window.location.href = '/'
    } else if (location.pathname === '/') {
      const element = document.getElementById(path.substring(2))
      if (element) {
        const offset = 80
        const elementPosition = element.offsetTop - offset
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    } else {
      window.location.href = path
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/20 backdrop-blur-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            Nandini Nema
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(item.path)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30'
                    : 'hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavigation(item.path)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30'
                    : 'hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
