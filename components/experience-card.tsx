"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface ExperienceCardProps {
  title: string
  company: string
  location: string
  period: string
  responsibilities: string[]
}

export default function ExperienceCard({ title, company, location, period, responsibilities }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="hover:shadow-md transition-all border-none shadow-md bg-gradient-to-br from-background to-muted">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground">{title}</h3>
              <p className="text-muted-foreground">
                {company} | {location}
              </p>
            </div>
            <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
              {period}
            </Badge>
          </div>
          <ul className="space-y-2">
            {responsibilities.map((responsibility, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{responsibility}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

