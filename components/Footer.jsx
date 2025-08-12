"use client"; // <--- ADD THIS LINE AT THE VERY TOP IF USING NEXT.JS APP ROUTER

import React from 'react';
import Image from 'next/image';


const Footer = () => {
 
  const styles = {
    footerContainer: {
      backgroundColor: '#132b4a',
      padding: '5px 20px', /* Vertical and horizontal padding */
      color: '#ffffff', /* Light text color */
      fontFamily: 'Arial, sans-serif', /* Consistent font */
      display: 'flex',
      justifyContent: 'space-between', /* Distribute items to left and right */
      alignItems: 'center', /* Vertically center items */
      flexWrap: 'wrap', /* Allow wrapping on smaller screens */
      gap: '20px', /* Gap for wrapped items */
      boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.2)', /* Optional: subtle shadow for depth */
    },
    footerLeft: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start', /* Align text to the left within this section */
      flexShrink: '0', /* Prevent this section from shrinking too much */
    },
    logo: {
      fontSize: '32px', /* Large font size for the logo */
      fontWeight: 'bold',
      color: '#ffffff', /* White color for the logo */
      marginBottom: '5px', /* Space between logo and copyright */
      lineHeight: '1', /* Adjust line height to match exact logo appearance */
    },
    copyright: {
      fontSize: '14px',
      color: '#b0b0b0', /* Slightly lighter color for copyright text */
    },
    footerRight: {
      display: 'flex',
      gap: '25px', /* Space between navigation links */
      flexWrap: 'wrap', /* Allow links to wrap */
      justifyContent: 'flex-end', /* Align links to the right if they wrap */
    },
    link: {
      color: '#ffffff', /* White color for links */
      textDecoration: 'none', /* Remove underline */
      fontSize: '16px',
      transition: 'color 0.3s ease', /* Smooth transition for hover */
      whiteSpace: 'nowrap', /* Prevent links from wrapping */
      cursor: 'pointer',
    },
    // Hover effect for links (handled with onMouseEnter/onMouseLeave for inline styles)
  };

  // State to manage hover for each link if needed for an inline style approach
  const [hoveredLink, setHoveredLink] = React.useState(null);

  return (
    <footer style={styles.footerContainer}>
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
        <div style={styles.copyright}>Copyright © All Rights Reserved</div>
      </div>
      <div style={styles.footerRight}>
        <a
          href="#"
          style={{
            ...styles.link,
            color: hoveredLink === 'contact' ? '#FFD700' : styles.link.color, /* Example hover color */
          }}
          onMouseEnter={() => setHoveredLink('contact')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Contact Us
        </a>
        <a
          href="#"
          style={{
            ...styles.link,
            color: hoveredLink === 'privacy' ? '#FFD700' : styles.link.color, /* Example hover color */
          }}
          onMouseEnter={() => setHoveredLink('privacy')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
