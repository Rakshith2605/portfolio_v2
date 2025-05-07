import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ProductCardProps {
  title: string
  description: string
  link: string
  tags: string[]
  video?: string
  logo?: string
  image?: string
}

export default function ProductCard({ title, description, link, tags, video, logo, image }: ProductCardProps) {
  const [playVideo, setPlayVideo] = useState(false)
  // Extract YouTube video ID
  const videoId = video ? video.split("/").pop() : null
  return (
    <Card className="group flex flex-col h-full hover:shadow-lg transition-all duration-300">
      <CardHeader className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <Link href={link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
            <ExternalLink className="h-5 w-5" />
          </Link>
        </div>
        {/* Media Preview - always same aspect ratio and height */}
        <div className="w-full aspect-video rounded-lg overflow-hidden mb-3 border bg-muted flex items-center justify-center relative">
          {videoId ? (
            playVideo ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&showinfo=0&rel=0&controls=1&autoplay=1`}
                title={title + " video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <button
                className="absolute inset-0 w-full h-full flex items-center justify-center group"
                onClick={() => setPlayVideo(true)}
                aria-label={`Play ${title} video`}
                style={{ background: "none", border: "none", padding: 0 }}
              >
                <Image
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt={title + " thumbnail"}
                  fill
                  className="object-cover w-full h-full"
                  style={{ zIndex: 1 }}
                />
                <span className="z-10">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.6)"/>
                    <polygon points="26,20 48,32 26,44" fill="#fff"/>
                  </svg>
                </span>
              </button>
            )
          ) : image ? (
            <Image src={image} alt={title + " image"} width={320} height={180} className="object-contain w-full h-full" />
          ) : logo ? (
            <Image src={logo} alt={title + " logo"} width={64} height={64} className="object-contain h-16 w-16" />
          ) : null}
        </div>
        <CardDescription className="text-muted-foreground min-h-[56px]">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 