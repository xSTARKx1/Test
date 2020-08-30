import React from 'react';
import { useSelector } from 'react-redux';
import { testSelectors } from '../../redux';
import styles from './UserAge.module.css';

export default function UserAge() {
  const age = useSelector(testSelectors.getUserAge);
  return (
    <>
      <p className={styles.title}>Оуу, Вам вже {age} років!:)</p>
    </>
  );
}
