"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceSection = () => {
  const styles = {
    sectionContainer: {
      backgroundColor: "#132b4a",
      padding: "60px 20px",
      color: "#ffffff",
      fontFamily: "Arial, sans-serif",
      maxWidth: "1200px",
      margin: "50px auto",
      borderRadius: "15px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
      overflow: "hidden",
      position: "relative",
    },
    columnsWrapper: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      gap: "40px",
    },
    column: {
      flex: "1",
      maxWidth: "280px",
    },
    columnHeading: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#ffffff",
      whiteSpace: "nowrap",
    },
    serviceList: {
      listStyle: "none",
      padding: "0",
      margin: "0",
    },
    serviceListItem: {
      fontSize: "16px",
      marginBottom: "10px",
      color: "#b0b0b0",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
    },
  };

  const ServiceColumn = ({ title, items, delay }) => {
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
      <motion.div
        style={styles.column}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: [50, 0, -10, 0], // Combines entrance and floating animation
        }}
        transition={{
          opacity: { duration: 0.7, ease: "easeOut", delay },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
        }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Glowing Heading */}
        <motion.h3
          style={styles.columnHeading}
          animate={{
            textShadow: [
              "0 0 0px #fff",
              "0 0 8px #4fc3f7",
              "0 0 0px #fff",
            ],
            color: ["#ffffff", "#aeefff", "#ffffff"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {title}
        </motion.h3>

        <ul style={styles.serviceList}>
          {items.map((item, index) => (
            <motion.li
              key={index}
              style={{
                ...styles.serviceListItem,
                color:
                  hoveredItem === index
                    ? "#ffffff"
                    : styles.serviceListItem.color,
              }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: delay + index * 0.1,
              }}
              whileHover={{ scale: 1.1, color: "#ffffff" }}
            >
              {/* Shimmer Effect */}
              <motion.span
                style={{ display: "inline-block", position: "relative" }}
                animate={{
                  backgroundPosition: ["0% 50%", "200% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {item}
              </motion.span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    );
  };

  const serviceCategories = [
    {
      title: "SME",
      items: ["Manufacturer", "Distributor", "Vendor", "Service Provider", "Retailer"],
    },
    {
      title: "Structured Products",
      items: [
        "Loan Against Securities",
        "Structured Investments",
        "Debt Syndication",
        "Letter of Credit",
        "Lease Rental Discounting",
        "Loan Against Property",
      ],
    },
    {
      title: "Equipment Financing & Leasing",
      items: [
        "Capital Goods",
        "IT Hardware",
        "Office Infrastructure",
        "Cars",
        "Construction Equipment",
        "Energy Saving Equipment",
        "Healthcare Equipment",
        "Logistics Machinery",
        "Solar Equipment",
      ],
    },
    {
      title: "Construction Finance",
      items: [
        "Funding Solutions for Your Construction Projects",
        "Securing Land and Sourcing Raw Materials",
        "Paying Contractors and Workers",
        "Acquiring Permits and Licenses",
      ],
    },
  ];

  // Restart animations when section re-enters
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      style={styles.sectionContainer}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8 }}
    >
      <div style={styles.columnsWrapper}>
        {serviceCategories.map((category, index) => (
          <ServiceColumn
            key={index}
            title={category.title}
            items={category.items}
            delay={index * 0.3}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceSection;
