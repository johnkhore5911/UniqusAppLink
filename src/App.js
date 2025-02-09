import React, { useState, useEffect } from 'react';
import pic from './image/pic.png';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check screen width to determine if it's mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize state on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles.app}>
      {/* Navbar */}
      <nav style={styles.navbar(isMobile)}>
        <div style={styles.logo}>uniqus</div>
        {isMobile ? (
          // Mobile Hamburger Menu
          <div style={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            &#9776;
          </div>
        ) : (
          <ul style={styles.navLinks(isMobile)}>
            <li style={styles.navLink}>Home</li>
            <li style={styles.navLink}>Products</li>
            <li style={styles.navLink}>Contact Us</li>
            <li style={styles.navLink}>FAQ</li>
            <li style={styles.navLink}>About Us</li>
          </ul>
        )}

        {isMobile && isMenuOpen && (
          <ul style={styles.navLinksMobile(isMobile)}>
            <li style={styles.navLink}>Home</li>
            <li style={styles.navLink}>Products</li>
            <li style={styles.navLink}>Contact Us</li>
            <li style={styles.navLink}>FAQ</li>
            <li style={styles.navLink}>About Us</li>
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <div style={styles.heroSection(isMobile)}>
        <div style={styles.heroContent(isMobile)}>
          <h1 style={styles.heroTitle(isMobile)}>
            Revolutionizing Education <br />
            With <span style={styles.highlight}>Personalized Learning</span> Solutions
          </h1>
          <button
            style={styles.downloadButton(isMobile)}
            onClick={() =>
              window.open(
                'https://drive.google.com/file/d/1B1gLHwowzOkws4aDvXgFBO8QMSYpX8yA/view?usp=sharing',
                '_blank'
              )
            }
          >
            Try Uniqus Digital Classroom (beta)
          </button>
          <div style={{marginTop:10,fontSize:12}}>Last Update: 09/02/2025</div>
        </div>
        <div style={styles.heroImage(isMobile)}>
          <img
            src={pic}
            alt="Educational AI"
            style={styles.image(isMobile)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  app: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    margin: 0,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  navbar: (isMobile) => ({
    display: 'flex',
    justifyContent: isMobile ? 'space-between' : 'space-between',
    alignItems: 'center',
    padding: isMobile ? '1rem' : '2rem 4rem',
    backgroundColor: '#121212',
    position: 'relative',
  }),
  logo: {
    fontSize: '2.5rem', // Smaller logo size
    fontWeight: 'bold',
    color: '#00aaff',
  },
  navLinks: (isMobile) => ({
    listStyle: 'none',
    display: 'flex',
    gap: isMobile ? '1rem' : '2rem',
    margin: 0,
    padding: 0,
    flexDirection: isMobile ? 'row' : 'row',
    textAlign: isMobile ? 'center' : 'unset',
  }),
  navLinksMobile: (isMobile) => ({
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    margin: 0,
    padding: '1rem 0',
    textAlign: 'center',
    position: 'absolute',
    top: '60px',
    left: 0,
    width: '100%',
    backgroundColor: '#121212',
    zIndex: 10,
  }),
  navLink: {
    cursor: 'pointer',
    fontSize: '1.2rem', // Smaller text size for nav links
    color: '#ffffff',
  },
  hamburger: {
    fontSize: '2rem',
    cursor: 'pointer',
    color: '#ffffff',
    display: 'block',
  },
  heroSection: (isMobile) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: isMobile ? '2rem' : '5rem 8rem',
    flexDirection: isMobile ? 'column' : 'row',
    flexGrow: 1,
    position: 'relative', // To ensure image can be positioned absolute
  }),
  heroContent: (isMobile) => ({
    textAlign: isMobile ? 'center' : 'left',
    maxWidth: isMobile ? '100%' : '50%',
    paddingRight: isMobile ? '0' : '2rem',
  }),
  heroTitle: (isMobile) => ({
    fontSize: isMobile ? '2rem' : '3rem', // Smaller title size
    lineHeight: '1.5',
    marginBottom: '2rem',
    color: '#ffffff',
  }),
  highlight: {
    color: '#00aaff',
  },
  downloadButton: (isMobile) => ({
    backgroundColor: '#00aaff',
    color: 'white',
    border: 'none',
    padding: isMobile ? '0.8rem 1.2rem' : '1rem 1.5rem', // Smaller button size
    borderRadius: '10px',
    fontSize: isMobile ? '1rem' : '1.2rem', // Smaller button text size
    cursor: 'pointer',
  }),
  heroImage: (isMobile) => ({
    position: 'absolute',
    left: isMobile ? '0' : '10%', // Floating image to the left on desktop
    top: '50%',
    transform: 'translateY(-50%)',
    width: isMobile ? '100%' : '300px',
    maxWidth: '100%',
    zIndex: 1, // Ensures image is in front of the background but behind the text
  }),
  image: (isMobile) => ({
    borderRadius: '50%',
    width: '50%',
    height: 'auto',
    objectFit: 'cover',
    position:"absolute",
    top:-318,
    left:90

  }),
};

export default App;
