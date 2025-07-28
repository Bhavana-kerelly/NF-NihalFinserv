12
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

export default function ContactSection() {
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <h2 style={styles.title}>
          Collaborate <span style={styles.gray}>with Nihal Finserv</span>
        </h2>
        <form style={styles.form}>
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
            <option>Website Development</option>
            <option>Mobile App Development</option>
            <option>SEO Services</option>
          </select>

          <label style={styles.label}>Comment or Message</label>
          <textarea rows={4} style={styles.textarea} />

          <button style={styles.button}>Submit</button>
        </form>
      </div>

      <div style={styles.right}>
        <h2 style={styles.titleRight}>
          <span style={{ color: "#fff" }}>Our </span>
          <span style={styles.gray}>Offices</span>
        </h2>
        <div style={styles.officeList}>
          {offices.map((office, index) => (
            <div key={index} style={styles.office}>
              <h3 style={styles.officeCity}>{office.city}</h3>
              <p style={styles.officeText}>{office.address}</p>
              <p style={styles.officeText}>{office.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#111",
    color: "#fff",
    padding: "50px 20px",
    fontFamily: "'Segoe UI', sans-serif",
  },
  left: {
    flex: "1 1 500px",
    backgroundColor: "#000",
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
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginBottom: "15px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "4px",
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