"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone, Download, ChevronRight, Moon, Sun, ArrowUp } from "lucide-react"
import ProjectCard from "@/components/project-card"
import SkillsSection from "@/components/skills-section"
import ExperienceCard from "@/components/experience-card"
import EducationCard from "@/components/education-card"
import StatCard from "@/components/stat-card"
import TypewriterEffect from "@/components/typewriter-effect"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from 'next/image'
import ProductsSection from "@/components/products-section"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 500)

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "products", "experience", "projects", "education"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Stats data
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Data Processed", value: "1.5M+" },
    { label: "Happy Clients", value: "100+" },
  ]

  return (
    <div className={cn("min-h-screen bg-background transition-colors duration-300", darkMode ? "dark" : "")}>
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl text-foreground">
            <span className="text-primary">R</span>akshith <span className="text-primary">D</span>harmappa
          </div>
          <nav className="hidden md:flex gap-6">
            {["about", "products","skills", "experience", "projects", "education"].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary nav-link",
                  activeSection === section ? "text-primary" : "text-foreground",
                )}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <motion.div layoutId="activeSection" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="text-foreground hover:text-primary"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button asChild size="sm">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section id="home" className="py-12 md:py-20 flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            className="flex-1 space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Generative AI Engineer & <span className="text-primary">Data Analyst</span>
            </h1>
            <div className="h-12 text-xl text-muted-foreground max-w-[600px]">
              <TypewriterEffect
                texts={[
                  "Transforming complex data challenges into GenAI breakthroughs",
                  "Expert in LLM fine-tuning and RAG architectures",
                  "Building production-ready AI systems that drive impact",
                ]}
              />
            </div>
            <div className="flex gap-4 pt-4">
              <Button asChild className="group">
                <Link href="#projects">
                  View Projects
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="group text-foreground">
                <a href="https://drive.google.com/file/d/1zAeJ6SL7ENrCHVynYZrB5bM4Bi4_iTEs/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" /> Resume
                </a>
              </Button>

            </div>
          </motion.div>
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-primary">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/356DC024-BC7D-44C8-ADA9-ED05C252FD59-BPgc1zvDnJGQtCO0hITHq3eLDld02S.jpeg"
                alt="Rakshith Dharmappa"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <StatCard key={index} label={stat.label} value={stat.value} />
          ))}
        </motion.div>

        {/* About Section */}
        <section id="about" className="py-12 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center text-foreground">
              About Me
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-foreground">
                I am a graduate from Northeastern University who loves transforming complex data challenges into GenAI
                breakthroughs. Expert in LLM fine-tuning, RAG architectures, and prompt engineering with a powerful
                foundation in HPC and data pipelines.
              </p>
              <p className="text-lg text-foreground">
                Consistently delivering production-ready AI systems that drive real business impact, I combine technical
                expertise with business acumen to create solutions that matter.
              </p>
              <div className="flex gap-4 pt-4">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <a href="https://linkedin.com/in/rakshithd26/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <a href="https://github.com/Rakshith2605" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <a href="mailto:dharmappa.r@northeastern.edu">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-background to-muted">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Professional Highlights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">
                        Developed RAG-driven chatbots reducing troubleshooting tickets by 40%
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">
                        Enhanced HPC reliability by analyzing 2.5M SLURM jobs using PySpark
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">
                        Implemented Docker containers with Azure Kubernetes Service
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">
                        Managed data processing for major clients including Apple, M-Benz, and Google
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">
                        Led pre-processing for voice recognition ML models, boosting accuracy by 18%
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-12 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center text-foreground">
              Products
            </h2>
          </motion.div>
          <ProductsSection />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center text-foreground">
              Technical Skills
            </h2>
          </motion.div>
          <SkillsSection />
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center text-foreground">
              Professional Experience
            </h2>
          </motion.div>
          <div className="space-y-6">
            <ExperienceCard
              title="Graduate Research Assistant"
              company="Northeastern University"
              location="Boston, MA, USA"
              period="February 2024 - April 2025"
              responsibilities={[
                "I landed an absolute gem of an opportunity with Northeastern University's Research Computing team—a crew of downright tech sorcerers! We were the masterminds behind the HPC cluster and cloud storage, basically running an in-house AWS for NU. Picture this: a high-octane squad keeping the university's research engine roaring with cutting-edge computing power. My mission? Crafting custom containers and software from scratch—building the tools that made science happen. But that's not all—I was the go-to troubleshooter, swooping in to solve the wildest tech puzzles for scientists and researchers. Working alongside brilliant minds every day? It was like living in a sci-fi blockbuster, and I loved every second of it!"
              ]}
            />

            <ExperienceCard
              title="Software Engineer II"
              company="Value Labs solutions"
              location="Hyderabad, Telangana, India"
              period="May 2023 - August 2023"
              responsibilities={[
                "Then came the plot twist! My team couldn't get enough of my hustle and passion, and within just one year—a rare feat in our org—they handed me the keys to the Senior Software Engineer kingdom. I leveled up to tackle data integration and migration, weaving together systems like a tech wizard. I kept a sharp eye on DevOps, making sure the pipeline hummed, while jumping in to squash bugs flagged by the testing crew. Debugging? Data flows? DevOps monitoring? I was the Swiss Army knife they didn't know they needed!"
              ]}
            />

            <ExperienceCard
              title="Software Engineer I"
              company="Value Labs solutions"
              location="Hyderabad, TG, India"
              period="February 2022 - April 2023"
              responsibilities={[
                "I kicked off my career with an electrifying team of engineers who set the stage for something epic. As an SDET, I dove headfirst into automation testing, crafting a rock-solid test framework for an ERP system that could handle anything we threw at it. I owned the testing game and nailed pre-prod stage deployments like a pro—think of me as the gatekeeper ensuring everything ran smoothly before the spotlight hit."
              ]}
            />

            <ExperienceCard
              title="Co-Founder"
              company="4-Tech AI&ML Solutions"
              location="Bengaluru, KA, India"
              period="May 2018 - April 2023"
              responsibilities={[
                "What started as a humble college side hustle for some extra pocket money quickly snowballed into something extraordinary.Fueled by an obsession with top-notch quality, this small gig caught the eye of industry titans. Before long, we were rubbing shoulders with the likes of Google, Mercedes-Benz, Apple, and TellUS Appen—pretty wild for a crew of campus dreamers! We dove headfirst into some seriously cool projects: teaching Siri and Google Assistant to master Indic languages, turbocharging Google Maps search to pinpoint accuracy, fine-tuning audio-to-text models that hear every whisper, and even sharpening the ADAS systems powering Benz's cutting-edge rides. From tinkering for fun to shaping the tech that runs the world, it's been one heck of a ride"
              ]}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center text-foreground">
              Featured Projects
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
            title="GenBI- Agentic AI for Business Intelligence"
            date="February 2025 - March 2025"
            description="Developed Streamlit app with custom agentic AI for intuitive data analysis and visualization. Deployed OpenAI GPT-driven agents for classifying queries, manipulating data, and generating visualizations."
            tags={["GenAI", "OpenAI", "Streamlit", "Python", "Plotly"]}
            image="/images/proj1.png"
            projectUrl="https://genbiv2-ek9oymz9ryloykrm2zqree.streamlit.app/"
          />

        
            <ProjectCard
              title="RAG Chat Bot for Research Computing Documentation"
              date="August 2024 - October 2024"
              description="Developed a conversational AI chatbot leveraging Retrieval-Augmented Generation (RAG) for accessing research documents. Combined Azure, Airflow, and MLflow for data collection, automated pipeline operations, and model version control."
              tags={["RAG", "Azure", "Airflow", "MLflow", "NLP"]}
              image="/images/project2.jpeg"
              projectUrl="https://github.com/Santosh2904/AskRC.git"
            />
        
            <ProjectCard
              title="Resume Analyzer and Customized Job searching Ai"
              date="January 2025 - January 2025"
              description="Resume Analyzer is an interactive Streamlit application designed to help job seekers analyze their resumes and find relevant job opportunities on LinkedIn. By uploading a PDF resume, the app extracts key information, identifies relevant keywords, and uses them to search for job postings based on experience level and posting date. The results are presented in a visually appealing, interactive table with clickable links to job postings."
              tags={["GenAi", "Data extraction", "Feature extraction", "NLP", "Streamlit", "Python"]}
              image="/images/RA.png"
              projectUrl="https://resumeanalyserai-5macukroinbruyjur8nexx.streamlit.app/"
            />
        
            <ProjectCard
              title="Real-TimePlateNumberDetection"
              date="November 2024 - November 2024"
              description="Detect license plates from video streams or images, Segment individual characters from the detected plate. Recognize the characters using a trained SVM model, Output the complete license plate number"
              tags={["OpenCV", "Deep Learning", "Pytorch", "Scikit Learn"]}
              image="/images/numberplate.jpg"
              projectUrl="https://github.com/Rakshith2605/Real-TimePlateNumberDetection"
            />
        
            <ProjectCard
              title="CNN based Road Sign Recognition"
              date="January 2024 - January 2024"
              description="Developed a CNN-based AI system for accurate road sign recognition using Python and TensorFlow. Employed data augmentation techniques to improve model generalization and simulate real-world conditions."
              tags={["CNN", "TensorFlow", "Computer Vision", "Transfer Learning"]}
              image="/images/trafficsign.jpeg"
              projectUrl="https://github.com/Rakshith2605/CNN-based-Road-Sign-Recognition.git"
            />
        
            <ProjectCard
              title="Weather Forecasting Model Using LSTMs"
              date="December 2025 - December 2025"
              description="This project develops an LSTM-based model using NOAA data to predict weather parameters like temperature and wind speed, emphasizing deep learning's effectiveness in forecasting through data preprocessing, model tuning, and evaluation using MSE and MAE metrics."
              tags={["Azure ML", "Databricks", "ETL", "Power BI", "Predictive Analytics"]}
              image="/images/weather.jpg"
              projectUrl="https://example.com/weather-analysis"
            />
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" asChild className="group text-foreground">
              <Link href="#" className="gap-2">
                View All Projects <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center text-foreground">
              Education & Certifications
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 mb-8 items-stretch">
            <EducationCard
              degree="MS in Data Analytics Engineering"
              institution="Northeastern University, Boston"
              period="2023 - 2025"
              gpa="3.7"
              courses={[
                "Deep Learning and Neural Networks",
                "MLops",
                "GenAI",
                "Data mining",
                "Database Management",
                "NLP",
              ]}
              logo="/images/NU.png"
              cardClassName="h-full flex flex-col justify-center"
            />

            <EducationCard
              degree="B.Tech in Electrical and Electronics Engineering"
              institution="REVA University, Bengaluru"
              period="2018 - 2022"
              gpa="3.69"
              courses={[
                "Microcontrollers",
                "Power Generation and Transmission",
                "Power systems",
                "Analog and Digital electronics",
              ]}
              logo="/images/RU.png"
              cardClassName="h-full flex flex-col justify-center"
            />
          </div>

          <h3 className="text-2xl font-bold mb-4 text-foreground">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }} className="h-full">
              <Card className="bg-muted/50 hover:shadow-md transition-all h-full min-h-[120px] flex flex-col justify-center">
                <CardContent className="p-4 h-full flex flex-col justify-center">
                  <div className="text-center">
                    <Badge className="mb-2">IBM</Badge>
                    <h4 className="font-semibold text-foreground">ETL and Data Pipelines with Airflow and Kafka</h4>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }} className="h-full">
              <Card className="bg-muted/50 hover:shadow-md transition-all h-full min-h-[120px] flex flex-col justify-center">
                <CardContent className="p-4 h-full flex flex-col justify-center">
                  <div className="text-center">
                    <Badge className="mb-2">Coursera</Badge>
                    <h4 className="font-semibold text-foreground">Machine Learning for Data Science</h4>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }} className="h-full">
              <Card className="bg-muted/50 hover:shadow-md transition-all h-full min-h-[120px] flex flex-col justify-center">
                <CardContent className="p-4 h-full flex flex-col justify-center">
                  <div className="text-center">
                    <Badge className="mb-2">Microsoft</Badge>
                    <h4 className="font-semibold text-foreground">Microsoft Azure for Data Engineering</h4>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }} className="h-full">
              <Card className="bg-muted/50 hover:shadow-md transition-all h-full min-h-[120px] flex flex-col justify-center">
                <CardContent className="p-4 h-full flex flex-col justify-center">
                  <div className="text-center">
                    <Badge className="mb-2">Duke University</Badge>
                    <h4 className="font-semibold text-foreground">MLOps Tools: MLflow and Hugging Face</h4>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center text-foreground">
              Get In Touch
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-background to-muted border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-foreground">+1 (857) 398-3843</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <a
                        href="mailto:dharmappa.r@northeastern.edu"
                        className="hover:text-primary transition-colors text-foreground"
                      >
                        dharmappa.r@northeastern.edu
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Linkedin className="h-5 w-5 text-primary" />
                      </div>
                      <a
                        href="https://linkedin.com/in/rakshithd26/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors text-foreground"
                      >
                        linkedin.com/in/rakshithd26/
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Github className="h-5 w-5 text-primary" />
                      </div>
                      <a
                        href="https://github.com/Rakshith2605"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors text-foreground"
                      >
                        github.com/rakshith2605
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <form
                    action="https://formspree.io/f/mqaerrar"
                    method="POST"
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          className="w-full p-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="w-full p-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-foreground">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        className="w-full p-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full p-2 rounded-md border border-input bg-background resize-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                        placeholder="Your message here..."
                      />
                    </div>
                    <Button type="submit" className="w-full group">
                      Send Message
                      <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08L10.388 10.75H3.75A.75.75 0 013 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="text-sm text-muted-foreground">© 2025 Rakshith Dharmappa. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild className="hover:text-primary transition-colors">
              <a href="https://linkedin.com/in/rakshithd26/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary transition-colors">
              <a href="https://github.com/Rakshith2605" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary transition-colors">
              <a href="mailto:dharmappa.r@northeastern.edu">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-primary-foreground shadow-lg z-50"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
