import React from 'react';
import phonebook_cover from '../img/phohebook_cover.jpg';

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundImage: `url(${phonebook_cover})`,
    backgroundSize: 'fit',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#97bfd4',
    paddingTop: '50px',
  },
  title: {
    fontSize: '52px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
    margin:'0',
  },
  description: {
    fontSize: '26px',
    marginTop: '10px',
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>It's your Phone Book</h1>
      <p style={styles.description}>
        Store and organize your contacts with ease
      </p>
    </div>
  );
};

export default HomePage;
