import type { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

type HighlightUnderlineProps = {
    children: ReactNode;
    colorFrom: string;
    colorTo: string;
    delay?: number;
};

const HighlightUnderline: FC<HighlightUnderlineProps> = ({ children, colorFrom, colorTo, delay = 0 }) => (
    <span className="relative inline-block group cursor-default">
        <span className="relative z-10 font-semibold">{children}</span>
        <motion.span
            className="absolute bottom-0 left-0 h-[2px]"
            style={{ background: `linear-gradient(to right, ${colorFrom}, ${colorTo})` }}
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.7, delay }}
            viewport={{ once: true }}
        />
    </span>
);
export default HighlightUnderline;