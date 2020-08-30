import React from 'react';
import Navigation from '../Navigation';
import styles from './AppBar.module.css';

const AppNav = () => {
  return (
    <>
      <header className={styles.appBar}>
        <Navigation />
      </header>
    </>
  );
};

export default AppNav;
