"use client"; // Required for Next.js App Router when using hooks/animations

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const styles = {
    footerContainer: {
      backgroundColor: "#132b4a",
      padding: "5px 20px",
      color: "#ffffff",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "20px",
      boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.2)",
    },
    footerLeft: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: "0",
    },
    logo: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#ffffff",
      marginBottom: "5px",
      lineHeight: "1",
    },
    copyright: {
      fontSize: "14px",
      color: "#b0b0b0",
    },
    footerRight: {
      display: "flex",
      gap: "25px",
      flexWrap: "wrap",
      justifyContent: "flex-end",
    },
    link: {
      color: "#ffffff",
      textDecoration: "none",
      fontSize: "16px",
      transition: "color 0.3s ease",
      whiteSpace: "nowrap",
      cursor: "pointer",
    },
  };

  const [hoveredLink, setHoveredLink] = React.useState(null);

  return (
    <AnimatePresence>
      <motion.footer
        style={styles.footerContainer}
        initial={{ opacity: 0, y: 50 }} // Start hidden + slide up
        animate={{ opacity: 1, y: 0 }} // Fade in + slide up
        exit={{ opacity: 0, y: 50 }} // Outro animation
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div style={styles.footerLeft}>
          <div className="font-bold">
            <Image
              src="/Logo.jpg"
              alt="Nihal Finserv"
              width={150}
              height={32}
              className="h-18 w-auto"
            />
          </div>
          <motion.div
            style={styles.copyright}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Copyright © All Rights Reserved
          </motion.div>
        </div>

        <div style={styles.footerRight}>
          <motion.a
            href="#"
            style={{
              ...styles.link,
              color:
                hoveredLink === "contact" ? "#FFD700" : styles.link.color,
            }}
            onMouseEnter={() => setHoveredLink("contact")}
            onMouseLeave={() => setHoveredLink(null)}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Contact Us
          </motion.a>
          <motion.a
            href="#"
            style={{
              ...styles.link,
              color:
                hoveredLink === "privacy" ? "#FFD700" : styles.link.color,
            }}
            onMouseEnter={() => setHoveredLink("privacy")}
            onMouseLeave={() => setHoveredLink(null)}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Privacy Policy
          </motion.a>
        </div>
      </motion.footer>
    </AnimatePresence>
  );
};

export default Footer;
