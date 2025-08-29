"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    title: "Nikhil Bharadwaj",
    text: "Nihal Finserv Team are a true professional and extremely focused towards positive customer experience. Their service is very fast and he was very flexible in accommodating our requirements. He has supported us like a family member and has been very helpful throughout the process. I would strongly recommend there service to my friends and family.",
    name: "Nikhil Bharadwaj",
    position: "CEO | Frutoo szeeque",
  },
  {
    title: "Sandeep Parepally",
    text: "I was struggling to get a personal loan for the past 6 months, but Nihal and team made it happen! The entire Nihal Finserv team was awesome—always kept me informed about what to expect, which calls I’d get, and how to respond. Team was always available for any doubts and picked up my calls every time. Extremely happy with the support and service. Highly recommended!",
    name: "Sandeep Parepally", // Added the name property
    position: "Sandeep Parepally",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const headerVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.05,
    y: -5,
    boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
  loop: {
    rotate: [0, 1, -1, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Styles object (converted to a cleaner format)
const styles = {
  wrapper: {
    backgroundColor: "#f3f3f3",
    padding: "80px 20px",
    fontFamily: "'Segoe UI', sans-serif",
  },
  header: {
    fontSize: "42px",
    fontWeight: "700",
    textAlign: "left",
    marginBottom: "40px",
    maxWidth: "1200px",
    margin: "0 auto 40px",
    color: "#000",
  },
  testimonialsContainer: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "8px",
    flex: "1 1 45%",
    minWidth: "300px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    position: "relative",
  },
  quoteIcon: {
    fontSize: "32px",
    color: "#e74c3c",
    marginBottom: "10px",
  },
  title: {
    fontWeight: "600",
    fontSize: "18px",
    marginBottom: "15px",
    color: "black",
  },
  text: {
    fontSize: "16px",
    color: "black",
    marginBottom: "30px",
    lineHeight: "1.6",
  },
  author: {
    fontWeight: "600",
    fontSize: "16px",
    color: "#000",
  },
  role: {
    fontSize: "14px",
    color: "#e74c3c",
  },
};

export default function Testimonials() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <div style={styles.wrapper}>
      <motion.div
        ref={ref}
        style={styles.header}
        variants={headerVariants}
        initial="hidden"
        animate={controls}
      >
        <span>Testimonials</span>
      </motion.div>
      <motion.div
        style={styles.testimonialsContainer}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            style={styles.card}
            variants={cardVariants}
            whileHover="hover"
            animate="loop"
          >
            <div style={styles.quoteIcon}>❝</div>
            <div style={styles.title}>{item.title}</div>
            <div style={styles.text}>{item.text}</div>
            <div style={styles.author}>{item.name}</div>
            <div style={styles.role}>{item.position}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}