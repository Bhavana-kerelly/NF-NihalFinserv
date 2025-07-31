10
import React from "react";

const articles = [
  {
    title: "How the Best Digital Marketing Agency in Hyderabad Can Transform Your Brand",
    image: "https://images.unsplash.com/photo-1581091870632-6c1c0b1f54c2", // Replace with your actual image
  },
  {
    title: "Why Search Engine Marketing is Still the King in 2025",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328d3d52", // Replace with your actual image
  },
  {
    title: "Mastering Mobile Application and Development in Just 30 Days: The Ultimate Indian Guide",
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5", // Replace with your actual image
  },
];

const styles = {
  container: {
    padding: "60px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "'Segoe UI', sans-serif",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "700",
    textAlign: "left",
    marginBottom: "10px",
  },
  subheading: {
    fontSize: "18px",
    color: "#555",
    textAlign: "left",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  },
  card: {
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease",
  },
  cardImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  cardTitle: {
    padding: "16px",
    fontSize: "18px",
    fontWeight: "600",
    color: "#000",
    lineHeight: "1.4",
  },
};

export default function FeaturedInsights() {
  return (
    <div style={styles.container}>
      <div style={styles.heading}>Blogs</div>
      <div style={styles.subheading}>
        Explore our comprehensive blog posts today and let Nihal Finserv guide you towards smarter financial decisions.
      </div>
      <div style={styles.grid}>
        {articles.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.image} alt={item.title} style={styles.cardImage} />
            <div style={styles.cardTitle}>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}