"use client"
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  url: string;
  tags: string[];
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Building Agent-based GUIs: The Future of Human-Computer Interaction",
    description: "Exploring the paradigm shift in software interaction through Agent-based Graphical User Interfaces (AGUIs) and how they're revolutionizing user experience.",
    date: "May 14, 2024",
    url: "https://dev.to/rakshith2605/building-agent-based-guis-the-future-of-human-computer-interaction-18kp",
    tags: ["AI", "Python", "Programming", "User Experience"],
    image: "/images/ai-gui.png",
  },
  {
    title: "Revolutionizing Database Interaction with NLMDB: Where Natural Language Meets Data",
    description: "How NLMDB lets you query databases using plain English, powered by the Model Context Protocol (MCP) and Python. Learn how it democratizes data access, enables instant visualizations, and integrates with your data workflows.",
    date: "May 15, 2024",
    url: "https://dev.to/rakshith2605/revolutionizing-database-interaction-with-nlmdb-where-natural-language-meets-data-425m",
    tags: ["AI", "Python", "Database", "Natural Language", "Open Source"],
    image: "/images/blog-nlmdb.png",
  },
];

export default function BlogsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("blogs");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="min-h-screen bg-background">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} activeSection={activeSection} />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-10 text-foreground">Blog Posts</h1>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Link href={post.url} key={index} target="_blank" rel="noopener noreferrer">
              <Card
                className="h-full hover:shadow-2xl transition-shadow duration-300 border-0 rounded-2xl overflow-hidden group bg-muted text-foreground"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="line-clamp-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 