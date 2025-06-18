import { motion } from 'framer-motion'
import { Heart, Code, Coffee } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative py-12 bg-gradient-to-t from-primary/5 to-background border-t border-primary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span> by </span>
            <a
              href="https://www.linkedin.com/in/nandininema/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors duration-300 font-medium hover:underline"
            >
              Nandini Nema
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground mb-2">
            © 2025 Nandini Nema. All rights reserved.
          </p>
          
          <p className="text-xs text-muted-foreground">
            Built with React, TypeScript, Tailwind CSS, and Spline
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
