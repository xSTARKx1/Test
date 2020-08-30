import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { testOperations, testSelectors } from '../redux';
import Loader from 'react-loader-spinner';
import styles from './Styles.module.css';

export default function Tab1() {
  const dispatch = useDispatch();
  const images = useSelector(testSelectors.getImages);
  const isLoading = useSelector(testSelectors.getIsLoading);

  useEffect(() => {
    dispatch(testOperations.getImages());
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <Loader
          type="ThreeDots"
          color="#3618df"
          height={80}
          width={80}
          className={styles.loader}
        />
      )}

      <ul className={styles.imagesList}>
        {images.map(({ tags, id, webformatURL }) => (
          <li key={id}>
            <img src={webformatURL} alt={tags} width="320" />
          </li>
        ))}
      </ul>
    </>
  );
}
