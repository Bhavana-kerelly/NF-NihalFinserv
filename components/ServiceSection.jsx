"use client"; // <--- ADD THIS LINE AT THE VERY TOP

import React, { useState } from 'react';

const ServiceSection = () => {
  // Define your styles as a JavaScript object
  const styles = {
    sectionContainer: {
      backgroundColor: '#132b4a', /* Dark background */
      padding: '40px 20px', /* Adjust padding as needed */
      color: '#ffffff', /* Light text color */
      fontFamily: 'Arial, sans-serif', /* Choose a suitable font */
      maxWidth: '1200px', /* Max width for the content */
      margin: '50px auto', /* Center the section */
      borderRadius: '15px', /* Optional: if the section container has rounded corners */
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', /* Optional: subtle shadow */
    },
    columnsWrapper: {
      display: 'flex',
      justifyContent: 'space-around', /* Distribute columns evenly */
      flexWrap: 'wrap', /* Allow columns to wrap on smaller screens */
      gap: '40px', /* Space between columns */
    },
    column: {
      flex: '1', /* Allow columns to grow and shrink */
       /* Minimum width for each column before wrapping */
      maxWidth: '280px', /* Optional: max width for columns */
    },
    columnHeading: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#ffffff',
      whiteSpace: 'nowrap', /* Prevent heading from wrapping */
    },
    serviceList: {
      listStyle: 'none', /* Remove default bullet points */
      padding: '0',
      margin: '0',
    },
    serviceListItem: {
      fontSize: '16px',
      marginBottom: '10px', /* Space between list items */
      color: '#b0b0b0', /* Slightly lighter color for list items */
      cursor: 'pointer', /* Indicate interactivity */
      transition: 'color 0.3s ease', /* Smooth transition for hover effect */
    },
  };

  const ServiceColumn = ({ title, items }) => {
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
      <div style={styles.column}>
        <h3 style={styles.columnHeading}>{title}</h3>
        <ul style={styles.serviceList}>
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                ...styles.serviceListItem,
                color: hoveredItem === index ? '#ffffff' : styles.serviceListItem.color,
              }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const serviceCategories = [
    {
      title: 'SME',
      items: [
        'Manufacturer',
        'Distributor',
        'Vendor',
        'Service Provider',
        'Retailer',
      ],
    },
    {
      title: 'Structured Products',
      items: [
        'Loan Against Securities',
'Structured Investments',
'Debt Syndication',
'Letter of Credit',
'Lease Rental Discounting',
'Loan Against Property',
      ],
    },
    {
      title: 'Equipment Financing & Leasing',
      items: [
        
'Capital Goods',
'IT Hardware',
'Office Infrastructure',
'Cars',
'Construction Equipment',
'Energy Saving Equipment',
'Healthcare Equipment',
'Logistics Machinery',
'Solar Equipment',
      ],
    },
    {
      title: 'Construction Finance',
      items: [
        
'Funding Solutions for Your Construction Projects',
'Securing Land and Sourcing Raw Materials',
'Paying Contractors and Workers',
'Acquiring Permits and Licenses',
      ],
    },
  ];

  return (
    <div style={styles.sectionContainer}>
      <div style={styles.columnsWrapper}>
        {serviceCategories.map((category, index) => (
          <ServiceColumn
            key={index}
            title={category.title}
            items={category.items}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;