
import { Variants } from "framer-motion";

export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.95,
        rotateX: -10
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 15,
            mass: 0.8
        }
    },
    hover: {
        scale: 1.05,
        y: -8,
        boxShadow: "0 20px 40px -5px rgba(var(--accent-rgb), 0.2)",
        transition: { type: "spring", stiffness: 300 }
    }
};

export const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -45, opacity: 0 },
    visible: {
        scale: 1,
        rotate: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 12,
            delay: 0.2
        }
    },
    hover: {
        scale: 1.2,
        rotate: 15,
        filter: "drop-shadow(0 0 8px rgba(var(--accent-rgb), 0.6))",
        transition: { type: "spring", stiffness: 300 }
    }
};

export const textVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            ease: "easeOut",
            duration: 0.4,
            delay: 0.1
        }
    }
};
