import { useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react";
import { motion } from "framer-motion"

interface SectionProps {
    id: string;
    title?: string;
    children: React.ReactNode;
}

const Section = ({ id, children }: SectionProps) => {
    const controls = useAnimation();
    // using view ref
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, isInView]);

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
    }
    return (
        <motion.section
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variants}
            id={id}
            transition={{ duration: 0.5 }}
            className="h-screen w-full mx-auto"
        >
            {children}
        </motion.section>
    )
}

export default Section;