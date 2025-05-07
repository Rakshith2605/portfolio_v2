import { motion } from "framer-motion"
import ProductCard from "./product-card"

const products = [
  {
    title: "GenBI.co",
    description: "AI-powered business intelligence platform that transforms data into actionable insights using natural language processing.",
    link: "https://genbi.co",
    tags: ["AI", "Business Intelligence", "NLP", "Data Analytics"],
    video: "https://youtu.be/0F-Hx1s4-O8"
  },
  {
    title: "PromptBud.com",
    description: "Advanced prompt engineering platform for optimizing and managing AI model interactions.",
    link: "https://promptbud.com",
    tags: ["AI", "Prompt Engineering", "LLM", "Productivity"],
    video: "https://youtu.be/7o6WcZ58DH4"
  },
  {
    title: "NLMDB",
    description: "Python package for efficient natural language model database management and fine-tuning.",
    link: "https://pypi.org/project/nlmdb",
    tags: ["Python", "NLP", "Database", "Machine Learning"],
    image: "/images/nlmdb.png"
  }
]

export default function ProductsSection() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <ProductCard {...product} />
        </motion.div>
      ))}
    </div>
  )
} 