// // import React from 'react';
// // import './App.css';

// // function App() {
// //   const downloadLink = "https://drive.google.com/uc?export=download&id=1D3ZR4R4tS_fhiV_UXNbzlbBkIUGeaQq7";

// //   return (
// //     <div className="app-container">
// //       <header className="header">
// //         <h1>Uniqus</h1>
// //         <p>Your Gateway to Smarter Learning</p>
// //       </header>

// //       <main className="content">
// //         <p>
// //           Uniqus is an innovative education app designed to transform how you learn and grow. 
// //           With interactive lessons, progress tracking, and much more, Uniqus is your partner in achieving academic excellence.
// //         </p>
// //         <a href={downloadLink} className="download-button" target="_blank" rel="noopener noreferrer">
// //           Download APK
// //         </a>
// //       </main>

// //       <footer className="footer">
// //         <p>© 2024 Uniqus. All Rights Reserved.</p>
// //       </footer>
// //     </div>
// //   );
// // }

// // export default App;

// // import React from 'react';
// // import pic from './image/pic.png'

// // const App = () => {
// //   return (
// //     <div style={styles.app}>
// //       {/* Navbar */}
// //       <nav style={styles.navbar}>
// //         <div style={styles.logo}>uniqus</div>
// //         <ul style={styles.navLinks}>
// //           <li style={styles.navLink}>Home</li>
// //           <li style={styles.navLink}>Products</li>
// //           <li style={styles.navLink}>Contact Us</li>
// //           <li style={styles.navLink}>FAQ</li>
// //           <li style={styles.navLink}>About Us</li>
// //         </ul>
// //       </nav>

// //       {/* Hero Section */}
// //       <div style={styles.heroSection}>
// //         <div style={styles.heroContent}>
// //           <h1 style={styles.heroTitle}>
// //             Revolutionizing Education <br />
// //             With <span style={styles.highlight}>Personalized Learning</span> Solutions
// //           </h1>
// //           <button
// //             style={styles.downloadButton}
// //             onClick={() =>
// //               window.open(
// //                 'https://drive.google.com/file/d/1D3ZR4R4tS_fhiV_UXNbzlbBkIUGeaQq7/view?usp=sharing',
// //                 '_blank'
// //               )
// //             }
// //           >
// //             Try Uniqus Digital Classroom (beta)
// //           </button>
// //         </div>
// //         <div style={styles.heroImage}>
// //           <img
// //             src={pic}
// //             alt="Educational AI"
// //             style={styles.image}
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const styles = {
// //   app: {
// //     textAlign: 'center',
// //     fontFamily: 'Arial, sans-serif',
// //     backgroundColor: '#1e1e1e',
// //     color: '#ffffff',
// //     margin: 0,
// //   },
// //   navbar: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: '1rem 2rem',
// //     backgroundColor: '#121212',
// //   },
// //   logo: {
// //     fontSize: '1.5rem',
// //     fontWeight: 'bold',
// //     color: '#00aaff',
// //   },
// //   navLinks: {
// //     listStyle: 'none',
// //     display: 'flex',
// //     gap: '1.5rem',
// //     margin: 0,
// //     padding: 0,
// //   },
// //   navLink: {
// //     cursor: 'pointer',
// //     color: '#ffffff',
// //   },
// //   heroSection: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     padding: '3rem 5rem',
// //   },
// //   heroContent: {
// //     textAlign: 'left',
// //   },
// //   heroTitle: {
// //     fontSize: '2.5rem',
// //     marginBottom: '1rem',
// //     color: '#ffffff',
// //   },
// //   highlight: {
// //     color: '#00aaff',
// //   },
// //   downloadButton: {
// //     backgroundColor: '#00aaff',
// //     color: 'white',
// //     border: 'none',
// //     padding: '0.8rem 1.5rem',
// //     borderRadius: '5px',
// //     fontSize: '1rem',
// //     cursor: 'pointer',
// //   },
// //   heroImage: {
// //     textAlign: 'right',
// //   },
// //   image: {
// //     borderRadius: '50%',
// //     width: '400px',
// //     height: '400px',
// //     objectFit: 'cover',
// //   },
// // };

// // export default App;

// import React from 'react';
// import pic from './image/pic.png';

// const App = () => {
//   return (
//     <div style={styles.app}>
//       {/* Navbar */}
//       <nav style={styles.navbar}>
//         <div style={styles.logo}>uniqus</div>
//         <ul style={styles.navLinks}>
//           <li style={styles.navLink}>Home</li>
//           <li style={styles.navLink}>Products</li>
//           <li style={styles.navLink}>Contact Us</li>
//           <li style={styles.navLink}>FAQ</li>
//           <li style={styles.navLink}>About Us</li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <div style={styles.heroSection}>
//         <div style={styles.heroContent}>
//           <h1 style={styles.heroTitle}>
//             Revolutionizing Education <br />
//             With <span style={styles.highlight}>Personalized Learning</span> Solutions
//           </h1>
//           <button
//             style={styles.downloadButton}
//             onClick={() =>
//               window.open(
//                 'https://drive.google.com/file/d/1D3ZR4R4tS_fhiV_UXNbzlbBkIUGeaQq7/view?usp=sharing',
//                 '_blank'
//               )
//             }
//           >
//             Try Uniqus Digital Classroom (beta)
//           </button>
//         </div>
//         <div style={styles.heroImage}>
//           <img
//             src={pic}
//             alt="Educational AI"
//             style={styles.image}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   app: {
//     textAlign: 'center',
//     fontFamily: 'Arial, sans-serif',
//     backgroundColor: '#1e1e1e',
//     color: '#ffffff',
//     margin: 0,
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },
//   navbar: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '2rem 4rem',
//     backgroundColor: '#121212',
//   },
//   logo: {
//     fontSize: '3rem',
//     fontWeight: 'bold',
//     color: '#00aaff',
//   },
//   navLinks: {
//     listStyle: 'none',
//     display: 'flex',
//     gap: '2rem',
//     margin: 0,
//     padding: 0,
//   },
//   navLink: {
//     cursor: 'pointer',
//     fontSize: '1.5rem',
//     color: '#ffffff',
//   },
//   heroSection: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '5rem 8rem',
//     flexGrow: 1,
//     flexWrap: 'wrap', // Allow elements to wrap on smaller screens
//   },
//   heroContent: {
//     textAlign: 'left',
//     maxWidth: '50%',
//     paddingRight: '2rem', // Add some padding for mobile
//   },
//   heroTitle: {
//     fontSize: '4rem',
//     lineHeight: '1.5',
//     marginBottom: '2rem',
//     color: '#ffffff',
//   },
//   highlight: {
//     color: '#00aaff',
//   },
//   downloadButton: {
//     backgroundColor: '#00aaff',
//     color: 'white',
//     border: 'none',
//     padding: '1rem 2rem',
//     borderRadius: '10px',
//     fontSize: '1.5rem',
//     cursor: 'pointer',
//   },
//   heroImage: {
//     textAlign: 'right',
//     flexShrink: 0,
//     marginTop: '2rem', // For mobile responsiveness
//   },
//   image: {
//     borderRadius: '50%',
//     width: '100%',
//     maxWidth: '400px', // Limit image size on mobile
//     height: 'auto',
//     objectFit: 'cover',
//   },
//   // Mobile responsiveness styles
//   '@media (max-width: 768px)': {
//     navbar: {
//       padding: '1rem',
//       flexDirection: 'column', // Stack navbar items vertically on small screens
//     },
//     navLinks: {
//       flexDirection: 'column',
//       gap: '1rem',
//       textAlign: 'center', // Center the nav links
//     },
//     heroSection: {
//       padding: '2rem',
//       flexDirection: 'column', // Stack content vertically on small screens
//       alignItems: 'center', // Center the content
//     },
//     heroContent: {
//       maxWidth: '100%',
//       paddingRight: '0',
//     },
//     heroTitle: {
//       fontSize: '2.5rem', // Smaller font size for mobile
//     },
//     downloadButton: {
//       fontSize: '1.2rem', // Smaller button on mobile
//       padding: '1rem 1.5rem',
//     },
//     heroImage: {
//       marginTop: '2rem',
//       textAlign: 'center',
//     },
//     image: {
//       maxWidth: '300px', // Smaller image on mobile
//       width: '100%',
//       height: 'auto',
//     },
//   },
// };

// export default App;

import React from 'react';
import pic from './image/pic.png';

const App = () => {
  return (
    <div style={styles.app}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>uniqus</div>
        <ul style={styles.navLinks}>
          <li style={styles.navLink}>Home</li>
          <li style={styles.navLink}>Products</li>
          <li style={styles.navLink}>Contact Us</li>
          <li style={styles.navLink}>FAQ</li>
          <li style={styles.navLink}>About Us</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Revolutionizing Education <br />
            With <span style={styles.highlight}>Personalized Learning</span> Solutions
          </h1>
          <button
            style={styles.downloadButton}
            onClick={() =>
              window.open(
                'https://drive.google.com/file/d/1D3ZR4R4tS_fhiV_UXNbzlbBkIUGeaQq7/view?usp=sharing',
                '_blank'
              )
            }
          >
            Try Uniqus Digital Classroom (beta)
          </button>
        </div>
        <div style={styles.heroImage}>
          <img
            src={pic}
            alt="Educational AI"
            style={styles.image}
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
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem 4rem',
    backgroundColor: '#121212',
  },
  logo: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#00aaff',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '2rem',
    margin: 0,
    padding: 0,
  },
  navLink: {
    cursor: 'pointer',
    fontSize: '1.5rem',
    color: '#ffffff',
  },
  heroSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5rem 8rem',
    flexGrow: 1,
    flexWrap: 'wrap', // Allow elements to wrap on smaller screens
  },
  heroContent: {
    textAlign: 'left',
    maxWidth: '50%',
    paddingRight: '2rem', // Add some padding for mobile
    marginBottom: '2rem', // Add some margin for better spacing on mobile
  },
  heroTitle: {
    fontSize: '4rem',
    lineHeight: '1.5',
    marginBottom: '2rem',
    color: '#ffffff',
    width: '100%',
  },
  highlight: {
    color: '#00aaff',
  },
  downloadButton: {
    backgroundColor: '#00aaff',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '10px',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  heroImage: {
    textAlign: 'right',
    flexShrink: 0,
    marginTop: '2rem', // For mobile responsiveness
    display: 'none', // Hide image on mobile
  },
  image: {
    borderRadius: '50%',
    width: '100%',
    maxWidth: '400px', // Limit image size for larger screens
    height: 'auto',
    objectFit: 'cover',
  },
  // Mobile responsiveness styles
  '@media (max-width: 768px)': {
    navbar: {
      padding: '1rem',
      flexDirection: 'column', // Stack navbar items vertically on small screens
    },
    navLinks: {
      flexDirection: 'column',
      gap: '1rem',
      textAlign: 'center', // Center the nav links
    },
    heroSection: {
      padding: '2rem',
      flexDirection: 'column', // Stack content vertically on small screens
      alignItems: 'center', // Center the content
    },
    heroContent: {
      maxWidth: '100%',
      paddingRight: '0',
    },
    heroTitle: {
      fontSize: '2.5rem', // Smaller font size for mobile
      width: '100%',
      textAlign: 'center', // Center align the title
    },
    downloadButton: {
      fontSize: '1.2rem', // Smaller button on mobile
      padding: '1rem 1.5rem',
      marginTop: '1rem', // Add space between the button and title
    },
    heroImage: {
      display: 'none', // Hide image on mobile
    },
  },
};

export default App