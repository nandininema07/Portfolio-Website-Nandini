import { useParams, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/sections/Footer'
import { HackathonDetail } from '@/components/sections/HackathonDetail'

export default function HackathonPage() {
  const { id } = useParams<{ id: string }>()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id]) // Re-run when id changes to handle different hackathon pages

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
      },
      detailedDescription: "Our AI-Powered Healthcare Assistant revolutionizes patient care by providing instant, accurate medical consultations. Using cutting-edge natural language processing and machine learning algorithms, the system can understand patient symptoms, ask relevant follow-up questions, and provide preliminary diagnoses with treatment recommendations. The platform integrates with existing healthcare systems and maintains strict HIPAA compliance.",
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
      teamMembers: ["John Doe (AI/ML)", "Jane Smith (Backend)", "Alex Johnson (Frontend)", "Sarah Wilson (UI/UX)"],
      timeline: [
        { time: "Hour 0-6", activity: "Problem analysis, team formation, and initial research" },
        { time: "Hour 6-18", activity: "Backend development and AI model integration" },
        { time: "Hour 18-30", activity: "Frontend development and UI/UX design" },
        { time: "Hour 30-42", activity: "Testing, bug fixes, and performance optimization" },
        { time: "Hour 42-48", activity: "Final testing, presentation preparation, and demo" }
      ]
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
      },
      detailedDescription: "EcoTrack transforms environmental consciousness into engaging action through advanced tracking and gamification. Users can monitor their daily activities, transportation choices, energy consumption, and waste generation while competing with friends and earning rewards for sustainable behaviors.",
      challenges: [
        "Accurate carbon footprint calculations across diverse activities",
        "Creating engaging gamification without greenwashing",
        "Real-time data collection from multiple sources",
        "Building intuitive data visualization for complex metrics"
      ],
      solutions: [
        "Integrated multiple carbon calculation APIs and databases",
        "Designed reward system based on actual environmental impact",
        "Implemented IoT device integration for automatic tracking",
        "Created interactive charts with personalized insights"
      ],
      impact: "Beta testing showed users reduced their carbon footprint by an average of 23% within the first month. The platform now has partnerships with 5 environmental organizations.",
      teamMembers: ["Mike Chen (Full Stack)", "Lisa Wang (Data Science)", "Tom Brown (Mobile)", "Emma Davis (Design)"],
      timeline: [
        { time: "Hour 0-8", activity: "Market research and feature planning" },
        { time: "Hour 8-20", activity: "Core platform development and database setup" },
        { time: "Hour 20-28", activity: "Gamification features and user interface" },
        { time: "Hour 28-34", activity: "Data visualization and testing" },
        { time: "Hour 34-36", activity: "Final polish and presentation" }
      ]
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
      },
      detailedDescription: "StudyBuddy is an AI-powered study companion designed to make learning more efficient and personalized. By leveraging advanced natural language processing and machine learning techniques, StudyBuddy can generate custom quizzes, provide detailed explanations, and adapt to the user's learning style in real-time.",
      challenges: [
        "Creating a truly personalized learning experience",
        "Ensuring the accuracy and relevance of AI-generated content",
        "Balancing AI assistance with active learning",
        "Developing a user-friendly interface for mobile devices"
      ],
      solutions: [
        "Implemented a dynamic learning algorithm that adapts to user performance",
        "Integrated multiple educational APIs for content validation",
        "Designed a spaced repetition system to reinforce learning",
        "Optimized the app for offline use and low-bandwidth environments"
      ],
      impact: "StudyBuddy has been used by over 5,000 students and has shown a 30% increase in test scores. The project was featured in the MLH Top 50 Global and received positive feedback from educators.",
      teamMembers: ["Solo Project - Alex Johnson"],
      timeline: [
        { time: "Hour 0-2", activity: "Concept development and research" },
        { time: "Hour 2-6", activity: "Backend development and AI model integration" },
        { time: "Hour 6-10", activity: "Frontend development and UI/UX design" },
        { time: "Hour 10-12", activity: "Testing, bug fixes, and presentation preparation" }
      ]
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
      },
      detailedDescription: "The Mars Weather Predictor is a machine learning model that forecasts weather patterns on Mars using historical data from NASA's rovers and satellites. By analyzing temperature, pressure, wind speed, and atmospheric composition, the model provides accurate predictions for future Martian weather conditions.",
      challenges: [
        "Handling incomplete and noisy data from NASA's APIs",
        "Developing a model that generalizes well to new Martian regions",
        "Visualizing complex weather data in an intuitive way",
        "Optimizing the model for real-time predictions"
      ],
      solutions: [
        "Implemented data cleaning and imputation techniques",
        "Used ensemble learning to improve model robustness",
        "Created interactive D3.js visualizations",
        "Deployed the model on a Flask server for real-time predictions"
      ],
      impact: "The Mars Weather Predictor was recognized by NASA for its innovative use of open data and its potential to support future Martian missions. The project was featured on the Space Apps website and the team received an invitation to tour a NASA facility.",
      teamMembers: ["Emily White (Data Science)", "David Green (Backend)", "Sophia Lee (Frontend)", "Ryan Clark (Visualization)"],
      timeline: [
        { time: "Hour 0-6", activity: "Data collection and preprocessing" },
        { time: "Hour 6-18", activity: "Model development and training" },
        { time: "Hour 18-30", activity: "Visualization and dashboard creation" },
        { time: "Hour 30-42", activity: "Deployment and testing" },
        { time: "Hour 42-48", activity: "Presentation preparation and final touches" }
      ]
    }
  ]

  const hackathonIndex = parseInt(id || '0', 10)
  const hackathon = hackathons[hackathonIndex]

  if (!hackathon) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className="min-h-screen bg-background" style={{ scrollBehavior: 'auto' }}>
      <Navigation />
      <HackathonDetail 
        hackathon={hackathon} 
        onBack={() => window.history.back()} 
      />
      <Footer />
    </div>
  )
}
