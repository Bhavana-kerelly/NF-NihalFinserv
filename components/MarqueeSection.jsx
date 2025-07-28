"use client";

import { FaArrowRight } from "react-icons/fa6";

// Inline styling for animation
const styles = {
  marqueeWrapper: {
    overflow: "hidden",
    backgroundColor: "#000000",
    padding: "24px 0",
  },
  marqueeContent: {
    display: "flex",
    whiteSpace: "nowrap",
    animation: "marquee 30s linear infinite",
  },
  textBlock: {
    display: "flex",
    alignItems: "center",
    fontSize: "32px",
    fontWeight: "bold",
    color: "#ffffff",
    margin: "0 40px",
  },
  arrow: {
    fontSize: "36px",
    margin: "0 16px",
  },
};

// Keyframes in <style> tag
const keyframes = `
@keyframes marquee {
  0%   { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}
`;

export default function MarqueeSection() {
  return (
    <>
      {/* Injecting keyframes into the DOM */}
      <style>{keyframes}</style>

      <div style={styles.marqueeWrapper}>
        <div style={styles.marqueeContent}>
          {[...Array(6)].map((_, idx) => (
            <div key={idx} style={styles.textBlock}>
              <span>Application Development</span>
              <FaArrowRight style={styles.arrow} />
              <span>Mobile Development</span>
              <FaArrowRight style={styles.arrow} />
            </div>
          ))}           
        </div>
      </div>
    </>
  );
}