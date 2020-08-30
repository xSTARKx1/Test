import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { testActions } from '../../redux';
import styles from './UserData.module.css';

export default function UserData() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const changeFirstName = e => {
    setFirstName(e.target.value);
  };
  const [lastName, setLastName] = useState('');
  const changeLastName = e => {
    setLastName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!firstName || !lastName) {
      alert('Заповніть всі поля, будь ласка)');
      return;
    }

    dispatch(testActions.setUserData({ firstName, lastName }));

    setFirstName('');
    setLastName('');
  };

  return (
    <>
      <h2>Вкажіть Ваше ім'я та прізвище!</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Ім'я
          <input value={firstName} onChange={changeFirstName} />
        </label>
        <label className={styles.label}>
          Прізвище
          <input value={lastName} onChange={changeLastName} />
        </label>
        <button type="submit" className={styles.button}>
          Відправити дані
        </button>
      </form>
    </>
  );
}
