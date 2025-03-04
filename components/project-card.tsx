"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  date: string
  description: string
  tags: string[]
  image: string
}

export default function ProjectCard({ title, date, description, tags, image }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden transition-all hover:shadow-lg border-none dark:bg-gray-800">
        <div className="aspect-video relative group">
          <img
            src={image.startsWith("/placeholder") ? "/images/project-default.jpg" : image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full">
              <a href="#" className="text-white flex items-center gap-1 w-fit ml-auto">
                <span className="text-sm font-medium">View Project</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-2">{date}</p>
          <p className="text-sm mb-4 text-foreground">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="dark:bg-gray-700 dark:text-gray-200">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

