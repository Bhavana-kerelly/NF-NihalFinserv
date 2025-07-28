11
import React from "react";

const testimonials = [
  {
    title: "Top Web Development Company",
    text: "Ozrit transformed our outdated website into a modern, responsive platform that truly reflects our brand. Their attention to detail, speed of execution, and understanding of our vision were exceptional. We've seen a significant boost in user engagement.",
    name: "Rahul Mehta",
    position: "Director, GVR Convention",
  },
  {
    title: "Seamless App Development",
    text: "Working with Ozrit on our mobile app was a seamless experience. The team was proactive, creative, and technically sound. They delivered exactly what we envisioned – a sleek, fast, and user-friendly app that our customers love.",
    name: "Sneha Kapoor",
    position: "Founder, EduTrack",
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
  },
  text: {
    fontSize: "16px",
    color: "#444",
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
        <span style={{ color: "#000" }}>Testi</span>
        <span style={styles.headerGray}>monials</span>
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