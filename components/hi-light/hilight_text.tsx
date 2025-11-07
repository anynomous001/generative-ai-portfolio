import { motion } from "framer-motion"
import React from "react"

interface HighlightBgProps {
    children: React.ReactNode;
    bgFrom: string;
    bgTo: string;
    delay?: number;
}

const HighlightBg: React.FC<HighlightBgProps> = ({ children, bgFrom, bgTo, delay = 0 }) => (
    <span className="relative inline-block group cursor-default px-1">
        <motion.span
            className="absolute inset-0 rounded-sm z-0"
            style={{ background: bgFrom }}
            initial={{ width: 0 }}
            whileInView={{ width: "100%", background: bgTo }}
            transition={{ duration: 0.8, delay, ease: "easeInOut" }}
            viewport={{ once: true }}
        />
        <span className="relative z-10 font-semibold">{children}</span>
    </span>
);


export default HighlightBg;