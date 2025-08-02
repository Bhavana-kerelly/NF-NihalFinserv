"use client";

import React from "react";


const testimonials = [
  {
    title: "Nikhil Bharadwaj",
    text: "Nihal Finserv Team are a true professional and extremely focused towards positive customer experience. Their service is very fast and he was very flexible in accommodating our requirements. He has supported us like a family member and has been very helpful throughout the process. I would strongly recommend there service to my friends and family.",
    name: "Nikhil Bharadwaj",
    position: "CEO | Frutoo szeeque",
  },
  {
    title: "Sandeep Parepally",
    text: "I was struggling to get a personal loan for the past 6 months, but Nihal and team made it happen! The entire Nihal Finserv team was awesome—always kept me informed about what to expect, which calls I’d get, and how to respond. Team was always available for any doubts and picked up my calls every time. Extremely happy with the support and service. Highly recommended!",
    /*name: "Sneha Kapoor",*/
    position: "Sandeep Parepally",
  },
];

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
  },
  headerGray: {
    color: "#bbb",
  },
  testimonials: {
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
    text: "black",
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
  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
       <span style={{ color: "#000" }}>Testimonials</span>
      </div>
      <div style={styles.testimonials}>
        {testimonials.map((item, idx) => (
          <div key={idx} style={styles.card}>
            <div style={styles.quoteIcon}>❝</div>
            <div style={styles.title}>{item.title}</div>
            <div style={styles.text}>{item.text}</div>
            <div style={styles.author}>{item.name}</div>
            <div style={styles.role}>{item.position}</div>
          </div>
        ))}
      </div>
    </div>
  );
}