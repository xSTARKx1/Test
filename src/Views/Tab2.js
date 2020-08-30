import React, { useState } from 'react';
import { testActions, testSelectors } from '../redux';
import { useDispatch, useSelector } from 'react-redux';
import UserAge from '../Components/UserAge/UserAge';
import styles from './Styles.module.css';

export default function Tab2() {
  const dispatch = useDispatch();
  const [age, setAge] = useState('');
  const changeAge = e => setAge(e.target.value);

  const userAge = useSelector(testSelectors.getUserAge);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(testActions.changeAge(age));
    setAge('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Вкажіть Ваш вік
          <input type="number" value={age} onChange={changeAge} />
        </label>
        <button type="submit" className={styles.button}>
          Відправити
        </button>
      </form>
      {userAge && <UserAge />}
    </>
  );
}
