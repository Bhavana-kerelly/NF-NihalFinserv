import React from 'react';

const RatingsSection = () => {
  const ratingsData = [
    { rating: '4.9', platform: 'DESIGNRUSH', icon: '⭐' },
    { rating: '4.9', platform: 'TopDevelopers', icon: '⭐' },
    { rating: '5.0', platform: 'Google', icon: '⭐' },
    { rating: '4.9', platform: 'DESIGNRUSH', icon: '⭐' },
    { rating: '5.0', platform: 'GoodFirms', icon: '⭐' },
    { rating: '4.9', platform: 'SelectedFirms', icon: '⭐' },
  ];

  // Define your styles as a JavaScript object
  const styles = {
    ratingsSectionContainer: {
      backgroundColor: '#000000', /* Dark background */
      padding: '20px',
      borderRadius: '15px', /* Rounded corners */
      maxWidth: 'fit-content', /* Adjust as needed */
      margin: '50px auto', /* Center the container and add some space */
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', /* Optional: subtle shadow */
    },
    ratingsWrapper: {
      display: 'flex',
      justifyContent: 'space-around', /* Distribute items evenly */
      alignItems: 'center',
      gap: '30px', /* Space between cards */
      flexWrap: 'wrap', /* Allow wrapping on smaller screens */
    },
    ratingCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#ffffff', /* White text for numbers and platform */
      textAlign: 'center',
      padding: '10px 15px',
      borderRadius: '8px', /* Slightly rounded corners for individual cards */
      minWidth: '120px', /* Ensure a minimum width for cards */
    },
    ratingContent: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '5px', /* Space between rating and platform name */
    },
    starIcon: {
      fontSize: '24px', /* Adjust size of the star */
      marginRight: '8px', /* Space between star and number */
      color: '#FFD700', /* Gold color for the star */
    },
    ratingNumber: {
      fontSize: '28px', /* Large font size for the rating number */
      fontWeight: '700', /* Bold */
      letterSpacing: '-0.5px', /* Adjust for closer spacing if needed */
    },
    platformName: {
      fontSize: '14px', /* Smaller font size for the platform name */
      fontWeight: '500', /* Medium bold */
      opacity: '0.8', /* Slightly less prominent */
      textTransform: 'uppercase', /* Uppercase as in the image */
      letterSpacing: '0.5px',
    },
    // Note: Media queries cannot be directly applied to inline styles or simple JS objects
    // For true media query support within a JS file, you'd typically use styled-components,
    // Emotion, or a similar CSS-in-JS library, or dynamic JS logic for responsive styles.
  };

  const RatingCard = ({ rating, platform, icon }) => {
    return (
      <div style={styles.ratingCard}>
        <div style={styles.ratingContent}>
          <span style={styles.starIcon}>{icon}</span>
          <span style={styles.ratingNumber}>{rating}</span>
        </div>
        <div style={styles.platformName}>{platform}</div>
      </div>
    );
  };

  return (
    <div style={styles.ratingsSectionContainer}>
      <div style={styles.ratingsWrapper}>
        {ratingsData.map((data, index) => (
          <RatingCard
            key={index}
            rating={data.rating}
            platform={data.platform}
            icon={data.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default RatingsSection;