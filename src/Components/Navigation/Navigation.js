import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { testSelectors } from '../../redux';
import styles from './Navigation.module.css';

export default function Navigation() {
  const { firstName, lastName } = useSelector(testSelectors.getUserData);
  return (
    <>
      <ul className={styles.navList}>
        <li>
          <NavLink
            exact
            to="/"
            className={styles.NavLink}
            activeClassName={styles.NavLink__active}
          >
            Головна
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tab1"
            className={styles.NavLink}
            activeClassName={styles.NavLink__active}
          >
            Tab1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tab2"
            className={styles.NavLink}
            activeClassName={styles.NavLink__active}
          >
            Tab2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tab3"
            className={styles.NavLink}
            activeClassName={styles.NavLink__active}
          >
            Tab3
          </NavLink>
        </li>
      </ul>
      {firstName && (
        <h2 className={styles.title}>
          {firstName} {lastName}, вітаємо на нашому сайті!
        </h2>
      )}
    </>
  );
}
