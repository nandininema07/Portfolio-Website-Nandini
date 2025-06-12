import { useParams, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/sections/Footer'
import { HackathonDetail } from '@/components/sections/HackathonDetail'
import { ThemeProvider } from '@/components/ThemeProvider'

export default function HackathonPage() {
  const { id } = useParams<{ id: string }>()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id]) // Re-run when id changes to handle different hackathon pages

  const hackathons = [
    {
      name: "Data 2 Knowledge 3.0",
      position: "1st Place Winner",
      team: "Team Gradient Flow",
      duration: "48 hours",
      date: "March 2025",
      project: "AgentFlow - Agentic AI Platform for Streamlined Agent Development",
      description: "Developed an agentic AI platform that can streamline the development of agents for various use cases.",
      technologies: ["Next.js", "React Flow","SQLAlchemy","HuggingFace","FastAPI", "Python", "Axios"],
      achievements: ["Rs.40,000 prize money", "Mentorship from industry experts", "Featured in tech magazines"],
      links: {
        demo: "https://www.youtube.com/watch?v=9vzwt6VrFLQ",
      },
      detailedDescription: "AgentFlow, is an AI Agent Marketplace that change the game for how AI agents collaborate and automate workflows. Instead of passive AI tools that wait to be told what to do, we introduced Active AI Agents—ones that work 24/7, proactively engaging users via calls, emails, and chatbot updates, and autonomously generating workflows from simple user prompts. It's AI that listens, learns, and acts—no hand-holding required!",
      challenges: [
        "Ensuring medical accuracy while avoiding misdiagnosis",
        "Integrating multiple AI models for comprehensive analysis",
        "Managing real-time data processing under time constraints",
        "Implementing secure patient data handling"
      ],
      solutions: [
        "Implemented ensemble learning with multiple medical AI models",
        "Created robust data validation and cross-referencing systems",
        "Optimized backend architecture for sub-second response times",
        "Developed end-to-end encryption for all patient interactions"
      ],
      impact: "Our solution has the potential to provide healthcare access to underserved communities and reduce wait times in emergency departments by 40%. Post-hackathon, we received interest from 3 major healthcare networks for pilot programs.",
      timeline: [
        { time: "Hour 0-8", activity: "Problem analysis, team formation, and initial research on AI agent development" },
        { time: "Hour 8-20", activity: "Backend development with FastAPI and SQLAlchemy integration" },
        { time: "Hour 20-32", activity: "AI model integration with HuggingFace and agent workflow development" },
        { time: "Hour 32-40", activity: "Frontend development with Next.js and React Flow implementation" },
        { time: "Hour 40-48", activity: "Testing, bug fixes, and final presentation preparation" }
      ],
      images: [
        "/D2K 1.jpeg",
        "/D2K 3.jpeg",
        "/D2K 2.jpeg"
      ],
      teamMembers: ["John Doe (Team Lead)", "Jane Smith (Backend)", "Mike Johnson (Frontend)", "Sarah Wilson (Design)"]
    },
    {
      name: "Frontend Arena",
      position: "2nd Place",
      team: "Team React Masters",
      duration: "24 hours",
      date: "March 2025",
      project: "Fambot - AI Powered Home Assistance Robot",
      description: "Built a comprehensive platform to transform homes with intelligent robotics and AI-powered assistance",
      technologies: ["Next.js", "TypeScript", "Spline", "Three.js", "Framer Motion", "Tailwind CSS"],
      achievements: ["Rs.3,000 prize", "Best UI/UX Award", "Mentorship from industry experts"],
      links: {
        website: "https://react-masters-fambot.vercel.app/",
        github: "https://github.com/nandininema07/React-Masters"
      },
      detailedDescription: "Fambot is a state-of-the-art AI-powered home assistance robot designed to cater to every member of the household. It combines smart home integration, interactive companionship, and emotional intelligence, making it not just a tool, but a true family member.",
      challenges: [
        "Creating an intuitive and user-friendly interface for both children and adults",
        "Ensuring the robot's emotional intelligence is natural and not robotic",
        "Developing a robust system for real-time data collection and analysis",
        "Building intuitive data visualization for complex metrics"
      ],
      solutions: [
        "Developed a user-friendly interface that is easy to use for both children and adults",
        "Implemented a robust system for real-time data collection and analysis",
        "Developed a robust system for real-time data collection and analysis",
        "Developed a robust system for real-time data collection and analysis"
      ],
      impact: "Beta testing showed users reduced their carbon footprint by an average of 23% within the first month. The platform now has partnerships with 5 environmental organizations.",
      teamMembers: ["Alex Brown (Team Lead)", "Emma Davis (Backend)", "Chris Wilson (Frontend)", "Lisa Chen (Design)"],
      timeline: [
        { time: "Hour 0-4", activity: "Market research and feature planning for home assistance robot" },
        { time: "Hour 4-12", activity: "3D model development with Spline and Three.js integration" },
        { time: "Hour 12-18", activity: "Frontend development with Next.js and Framer Motion animations" },
        { time: "Hour 18-22", activity: "UI/UX refinement and responsive design implementation" },
        { time: "Hour 22-24", activity: "Final testing and presentation preparation" }
      ],
      images: [
        "/Frontend Arena 1.jpeg",
        "/Frontend Arena 3.jpeg",
        "/Frontend Arena 2.jpeg"
      ],
    },
    {
      name: "Dev Quest Hackathon - IIT Jodhpur",
      position: "Finalist",
      team: "Team Innovizia",
      duration: "24 hours",
      date: "January 2025",
      project: "Arogyam - Machine Learning Ayurveda Recommendation System",
      description: "Created an AI-powered Ayurveda recommendation system that can recommend Ayurvedic remedies for various diseases.",
      technologies: ["React", "OpenCV", "Flask", "Node.js","Mongoose"],
      achievements: ["Most Innovative Use of AI", "Networking with developers across India"],
      links: {
        demo: "https://youtu.be/-NLv9LkT9CI",
        github: "https://github.com/nandininema07/Innovatrix-DevQuest"
      },
      detailedDescription: "Arogyam is an AI-powered wellness platform that analyzes facial features and nails to assess a user's Ayurvedic dosha (Vata, Pitta, or Kapha). Users upload or record a short video, and based on visual cues, the system offers personalized health and lifestyle recommendations. Verified by Ayurvedic experts and delivered via WhatsApp, Arogyam also helps practitioners track patient symptoms over time through interactive charts—making holistic health simple, smart, and accessible.",
      challenges: [
        "Ensuring medical accuracy while avoiding misdiagnosis",
        "Integrating multiple AI models for comprehensive analysis",
        "Managing real-time data processing under time constraints",
        "Implementing secure patient data handling"
      ],
      solutions: [
        "Developed a robust facial recognition system using OpenCV",
        "Integrated multiple Ayurvedic AI models for comprehensive analysis",
        "Created an interactive dashboard for symptom tracking and analysis",
        "Developed a secure patient data handling system"
      ],
      impact: "StudyBuddy has been used by over 5,000 students and has shown a 30% increase in test scores. The project was featured in the MLH Top 50 Global and received positive feedback from educators.",
      teamMembers: ["Solo Project - Alex Johnson"],
      timeline: [
        { time: "Hour 0-4", activity: "Research on Ayurvedic principles and dosha analysis" },
        { time: "Hour 4-10", activity: "OpenCV integration for facial and nail analysis" },
        { time: "Hour 10-16", activity: "Flask backend development and ML model integration" },
        { time: "Hour 16-20", activity: "React frontend development and WhatsApp integration" },
        { time: "Hour 20-24", activity: "Testing with Ayurvedic experts and final presentation" }
      ],
      images: [
        "/Devquest 1.jpeg",
        "/Devquest 2.jpeg",
        "/Devquest 3.jpeg"
      ],
    },
    {
      name: "NASA Space Apps Challenge",
      position: "Finalist",
      team: "Team Cosmic Hacktivists",
      duration: "24 hours",
      date: "October 2024",
      project: "SeismoTrack - Seismic Tracking System for Celestial Bodies",
      description: "Designed and implemented a machine learning pipeline for seismic event analysis, data filtering, and transmission optimization across multiple celestial bodies (3+) using NASA's publicly available seismic datasets.",
      technologies: ["Scikit-learn", "SciPy", "Flask", "NASA APIs", "D3.js", "Python"],
      achievements: ["NASA recognition", "Featured on Space Apps website", "Mentorship from industry experts"],
      links: {
        demo: "https://youtu.be/ZMeOc4oTTZ0",
        github: "https://github.com/AAGAM17/sesimotrack"
      },
      detailedDescription: "SeismoTrack is a machine learning pipeline that analyzes seismic data from multiple celestial bodies to detect and track seismic events. It uses advanced machine learning techniques to filter and analyze data, and provides real-time updates on seismic activity across the solar system.",
      challenges: [
        "Handling incomplete and noisy data from NASA's APIs",
        "Developing a model that generalizes well to new celestial bodies",
        "Visualizing complex seismic data in an intuitive way",
        "Optimizing the model for real-time predictions"
      ],
      solutions: [
        "Developed a robust machine learning pipeline for seismic event analysis",
        "Created interactive D3.js visualizations for real-time seismic data",
        "Optimized the model for real-time predictions",
        "Deployed the model on a Flask server for real-time predictions"
      ],
      impact: "The SeismoTrack was recognized by NASA for its innovative use of open data and its potential to support future Martian missions. The project was featured on the Space Apps website and the team received an invitation to tour a NASA facility.",
      teamMembers: ["Nandini Nema (Frontend)"],
      timeline: [
        { time: "Hour 0-6", activity: "NASA API integration and seismic data collection" },
        { time: "Hour 6-14", activity: "ML pipeline development with Scikit-learn and SciPy" },
        { time: "Hour 14-20", activity: "D3.js visualization development for seismic data" },
        { time: "Hour 20-24", activity: "Flask server deployment and final testing" }
      ],
      images: [
        "/NASA 1.png",
        "/NASA 2.jpg",
        "/NASA 3.png"
      ],
    },
    {
      name: "Pixel Paranoia 2024",
      position: "Top 10 Finalists",
      team: "Team Interface Innovators",
      duration: "12 hours",
      date: "October 2024",
      project: "TechLearn - Community Driven Tech Learning Platform",
      description: "Developed a community driven tech learning platform to foster development culture in young generations",
      technologies: ["Figma"],
      achievements: ["Top 10 Finalists"],
      links: {
        demo: "https://www.figma.com/proto/xL3SmRlFgEVgf3EF0r73Co/Interface-Innovators?page-id=0%3A1&node-id=40-333&p=f&viewport=52%2C292%2C0.04&t=HrfL5hN8QH2idD7d-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=40%3A177"
      },
      detailedDescription: "TechLearn is a community driven tech learning platform that fosters development culture in young generations. It provides a platform for students to learn about various technologies and tools, and to connect with other students who are interested in the same technologies.",
      challenges: [
        "Creating a platform that is easy to use and understand for young generations",
        "Ensuring the platform is secure and reliable",
        "Developing a platform that is scalable and can handle large amounts of data",
        "Creating a platform that is accessible to all students"
      ],
      solutions: [
        "Created a platform that is easy to use and understand for young generations",
        "Ensured the platform is secure and reliable",
        "Developed a platform that is scalable and can handle large amounts of data",
        "Created a platform that is accessible to all students"
      ],
      impact: "The TechLearn platform has been recognized by the industry experts and they believe that it has the potential to change the way we learn and teach.",
      teamMembers: ["Nandini Nema (Frontend)"],
      timeline: [
        { time: "Hour 0-3", activity: "User research and learning platform requirements analysis" },
        { time: "Hour 3-6", activity: "Wireframing and initial UI design in Figma" },
        { time: "Hour 6-9", activity: "Interactive prototype development" },
        { time: "Hour 9-12", activity: "Final UI polish and presentation preparation" }
      ],
      images: [
        "/pixel1.jpeg",
        "/pixel2.jpeg",
        "/pixel3.jpeg"
      ],
    },
    {
      name: "Smart India Hackathon 2023",
      position: "All India Top 6",
      team: "Team Rising Coders",
      duration: "3 months",
      date: "August 2023 - November 2023",
      project: "Robust Human Target Detection and Acquisition System for Surveillance",
      description: "Developed a robust human target detection and acquisition system for surveillance using computer vision and machine learning techniques for the Indian Ministry of Defence.",
      technologies: ["React Native", "OpenCV", "AWS", "Expo-CLI","Amazon Rekognition"],
      achievements: ["Top 6 All India"],
      links: {
        
      },
      detailedDescription: "The project is a robust human target detection and acquisition system for surveillance using computer vision and machine learning techniques for the Indian Ministry of Defence. It uses advanced computer vision techniques to detect and track human targets in real-time and provides real-time updates on the target's location and status.",
      challenges: [
        "Developing a model that generalizes well to new celestial bodies",
        "Visualizing complex seismic data in an intuitive way",
        "Optimizing the model for real-time predictions"
      ],
      solutions: [
        "Developed a robust machine learning pipeline for seismic event analysis",
        "Created interactive D3.js visualizations for real-time seismic data",
        "Optimized the model for real-time predictions",
        "Deployed the model on a Flask server for real-time predictions"
      ],
      impact: "The SeismoTrack was recognized by NASA for its innovative use of open data and its potential to support future Martian missions. The project was featured on the Space Apps website and the team received an invitation to tour a NASA facility.",
      teamMembers: ["Nandini Nema (Frontend)"],
      timeline: [
        { time: "Month 1", activity: "Requirements analysis and system architecture design" },
        { time: "Month 2", activity: "Computer vision model development with OpenCV and AWS Rekognition" },
        { time: "Month 3", activity: "React Native app development and real-time tracking implementation" },
        { time: "Final Week", activity: "System integration, testing, and final presentation" }
      ],
      images: [
        "/SIH2023 1.jpeg",
        "/SIH2023 2.jpeg",
        "/SIH2023 3.jpeg"
      ],
    },

  ]

  const hackathonIndex = parseInt(id || '0', 10)
  const hackathon = hackathons[hackathonIndex]

  if (!hackathon) {
    return <Navigate to="/404" replace />
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background" style={{ scrollBehavior: 'auto' }}>
        <Navigation />
        <HackathonDetail 
          hackathon={hackathon} 
          onBack={() => window.history.back()} 
        />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
