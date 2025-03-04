"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"
import { motion } from "framer-motion"

interface EducationCardProps {
  degree: string
  institution: string
  period: string
  gpa: string
  courses: string[]
}

export default function EducationCard({ degree, institution, period, gpa, courses }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="hover:shadow-md transition-all border-none shadow-md bg-gradient-to-br from-background to-muted">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">{degree}</h3>
                <Badge variant="outline" className="mt-1 md:mt-0 w-fit">
                  {period}
                </Badge>
              </div>
              <p className="text-muted-foreground mb-2">{institution}</p>
              <div className="flex items-center gap-1 mb-4">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">GPA: {gpa}</span>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-foreground">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Badge key={index} variant="secondary" className="text-xs dark:bg-gray-700 dark:text-gray-200">
                        {course}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

