import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar({ darkMode, toggleDarkMode, activeSection }: {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
}) {
  const pathname = usePathname();
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Products", href: "/#products" },
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Education", href: "/#education" },
    { label: "Blogs", href: "/blogs" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-bold text-xl text-foreground">
          <span className="text-primary">R</span>akshith <span className="text-primary">D</span>harmappa
        </div>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => {
            const isActive =
              (item.label === "Home" && pathname === "/") ||
              (item.label === "Blogs" && pathname === "/blogs") ||
              (activeSection.toLowerCase() === item.label.toLowerCase() && item.label !== "Home" && item.label !== "Blogs");
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary nav-link relative",
                  isActive ? "text-primary" : "text-foreground",
                )}
              >
                {item.label}
                {isActive && item.label !== "Blogs" && item.label !== "Home" && (
                  <motion.div layoutId="activeSection" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
            );
          })}
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
  );
} 