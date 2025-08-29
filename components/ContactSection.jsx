"use client";
import { motion } from "framer-motion";
import React from "react";

const offices = [
  {
    city: "Hyderabad",
    address: "E-63, 1st Floor, Above Shiva Homeo Care, Madhuranagar, Hyderabad, Telangana",
    phone: "+91 9951606993",
  },
  {
    city: "Chennai",
    address: "Chennai, Tamil Nadu",
  },
  {
    city: "Bangalore",
    address: "Bengaluru, Karnataka",
  },
];

// Animation Variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
};

const loopPulse = {
  animate: {
    scale: [1, 1.02, 1],
    boxShadow: [
      "0 0 0px rgba(0,0,0,0)",
      "0 0 20px rgba(0,123,255,0.4)",
      "0 0 0px rgba(0,0,0,0)",
    ],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const floatAnimation = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function ContactSection() {
  return (
    <div style={styles.container}>
      {/* Left Side Form */}
      <motion.div
        style={styles.left}
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 style={styles.title}>Collaborate with Nihal Finserv</h2>
        <motion.form
          style={styles.form}
          variants={loopPulse}
          animate="animate"
        >
          <label style={styles.label}>Name *</label>
          <input type="text" style={styles.input} />

          <div style={styles.flexRow}>
            <div style={styles.flexHalf}>
              <label style={styles.label}>Email *</label>
              <input type="email" style={styles.input} />
            </div>
            <div style={styles.flexHalf}>
              <label style={styles.label}>Phone Number *</label>
              <input type="text" style={styles.input} />
            </div>
          </div>

          <label style={styles.label}>Subject *</label>
          <select style={styles.input}>
            <option>--- Select Choice ---</option>
            <option>Secured Loans</option>
            <option>Unsecured Loans</option>
            <option>Term Loans</option>
            <option>Coorporate Loans</option>
            <option>Sme</option>
            <option>Structured Products</option>
            <option>Equipment Refinancing</option>
            <option>Ai Chat Bot</option>
          </select>

          <label style={styles.label}>Comment or Message</label>
          <textarea rows={4} style={styles.textarea} />

          <motion.button
            style={styles.button}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(0,123,255,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.div>

      {/* Right Side Offices */}
      <motion.div
        style={styles.right}
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 style={styles.titleRight}>
          <span style={{ color: "#fff" }}>Our </span>
          <span style={styles.gray}>Offices</span>
        </h2>
        <div style={styles.officeList}>
          {offices.map((office, index) => (
            <motion.div
              key={index}
              style={styles.office}
              variants={floatAnimation}
              animate="animate"
              transition={{ delay: index * 0.3 }}
            >
              <h3 style={styles.officeCity}>{office.city}</h3>
              <p style={styles.officeText}>{office.address}</p>
              <p style={styles.officeText}>{office.phone}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#132b4a",
    color: "#fff",
    padding: "50px 20px",
    fontFamily: "'Segoe UI', sans-serif",
  },
  left: {
    flex: "1 1 500px",
    backgroundColor: "#132b4a",
    padding: "30px",
    borderRadius: "10px",
    margin: "10px",
  },
  right: {
    flex: "1 1 500px",
    padding: "30px",
    margin: "10px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  titleRight: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "30px",
  },
  gray: {
    color: "#888",
  },
  label: {
    display: "block",
    marginTop: "10px",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    backgroundColor: "#132b4a",
    color: "white",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    backgroundColor: "#132b4a",
    color: "white",
  },
  button: {
    padding: "12px 25px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "6px",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
  flexRow: {
    display: "flex",
    gap: "10px",
  },
  flexHalf: {
    flex: 1,
  },
  officeList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  office: {
    flex: "1 1 45%",
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: "rgba(255,255,255,0.05)",
  },
  officeCity: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "5px",
  },
  officeText: {
    fontSize: "14px",
    lineHeight: "1.4",
  },
};
