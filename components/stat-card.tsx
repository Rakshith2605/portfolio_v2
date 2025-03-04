"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface StatCardProps {
  label: string
  value: string
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="border-none shadow-md bg-gradient-to-br from-background to-muted">
        <CardContent className="p-6 text-center">
          <h3 className="text-3xl font-bold text-primary mb-1">{value}</h3>
          <p className="text-sm text-muted-foreground">{label}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

