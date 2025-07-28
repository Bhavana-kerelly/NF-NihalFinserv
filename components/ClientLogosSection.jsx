9
import React from "react";

const clients = [
  { name: "Wilmar", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Wilmar_International_Logo.svg/2560px-Wilmar_International_Logo.svg.png" },
  { name: "Colliers", logo: "https://www.colliers.com/-/media/project/colliers/logo/colliers_logo_rgb.svg" },
  { name: "Medanta", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Medanta_Hospital_logo.png" },
  { name: "Chatr", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Chatr_wireless_logo.svg/2560px-Chatr_wireless_logo.svg.png" },
  { name: "Qualtrics", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Qualtrics_logo.svg/1280px-Qualtrics_logo.svg.png" },
  { name: "Harmoney", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Harmoney_logo.svg/512px-Harmoney_logo.svg.png" },
  { name: "Foxconn", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Foxconn_logo.svg/2560px-Foxconn_logo.svg.png" },
  { name: "RIDEV", logo: "https://www.ridev.ca/_next/static/media/logo.1c238d47.svg" },
  { name: "Etisalat", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Etisalat_logo.svg/2560px-Etisalat_logo.svg.png" },
  { name: "Almarai", logo: "https://upload.wikimedia.org/wikipedia/en/3/35/Almarai_logo.png" },
  { name: "Hyundai Mobis", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/HYUNDAI_MOBIS_logo.svg/2560px-HYUNDAI_MOBIS_logo.svg.png" },
  { name: "Philips", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Philips_logo.svg/2560px-Philips_logo.svg.png" },
];

const styles = {
  wrapper: {
    textAlign: "center",
    padding: "50px 20px",
    backgroundColor: "#ffffff",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "8px",
  },
  subheading: {
    fontSize: "20px",
    fontWeight: "500",
    color: "#555",
    marginBottom: "40px",
  },
  logoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "24px",
    justifyItems: "center",
  },
  logoCard: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 6px rgba(0,0,0,0.05)",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    maxWidth: "100%",
    maxHeight: "60px",
    objectFit: "contain",
  },
};

export default function ClientLogosSection() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.heading}>Top Web Development Company</div>
      <div style={styles.subheading}>
        Trusted BY 3000+ Happy Clients, Including Fortune 500 Companies
      </div>
      <div style={styles.logoGrid}>
        {clients.map((client, index) => (
          <div key={index} style={styles.logoCard}>
            <img src={client.logo} alt={client.name} style={styles.logoImage} />
          </div>
        ))}
      </div>
    </div>
  );
}