import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import "./Tool.css"

export type ToolType = {
  name: string
  description: string
  image: string
}

export default function Tool({
  id,
  tool,
  columns,
}: {
  id: number
  tool: ToolType
  columns: number
}) {
  const iconRef = React.useRef<HTMLImageElement | null>(null)
  const [hover, setHover] = React.useState(false)

  return (
    <motion.li
      className="tool"
      initial={{ y: 64, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { delay: (id % columns) * 0.05 },
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AnimatePresence>
        {hover && (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, y: 20 }}
            className="tool-tooltip"
          >
            {tool.name}
          </motion.div>
        )}
      </AnimatePresence>
      <img
        ref={iconRef}
        src={`images/tools/${tool.name.toLowerCase()}.png`}
        alt={tool.name}
      />
    </motion.li>
  )
}
