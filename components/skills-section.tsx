"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Database, Code, BarChart, Cloud, GitBranch, Workflow, Server, Bot } from "lucide-react"
import { motion } from "framer-motion"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming & Scripting",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: ["Python", "SQL", "Bash", "Java"],
    },
    {
      title: "Data Engineering & Big Data",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ["Apache Spark", "Apache Kafka", "Hive"],
    },
    {
      title: "Databases & Data Warehousing",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Snowflake", "Databricks", "BigQuery"],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6 text-primary" />,
      skills: ["Azure", "Docker", "Kubernetes", "GCP", "CI/CD"],
    },
    {
      title: "ETL/Workflow Orchestration",
      icon: <Workflow className="h-6 w-6 text-primary" />,
      skills: ["Apache Airflow", "MLflow", "Talend", "Informatica"],
    },
    {
      title: "Analytics Tools",
      icon: <BarChart className="h-6 w-6 text-primary" />,
      skills: ["Pandas", "NumPy", "Jupyter", "Tableau", "PowerBI"],
    },
    {
      title: "Data Extraction",
      icon: <GitBranch className="h-6 w-6 text-primary" />,
      skills: ["BS4", "crawler4ai", "Selenium", "Scrapy"],
    },
    {
      title: "Machine Learning & AI",
      icon: <Bot className="h-6 w-6 text-primary" />,
      skills: ["TensorFlow", "RAG", "LLM Fine-tuning", "MLops", "Agentic AI modeling", "Prompt Engineering", "Deep Learning & Neural Networks"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {skillCategories.map((category, index) => (
        <motion.div key={index} variants={item}>
          <Card className="h-full border-none shadow-md hover:shadow-lg transition-all bg-gradient-to-br from-background to-muted">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-full">{category.icon}</div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}

