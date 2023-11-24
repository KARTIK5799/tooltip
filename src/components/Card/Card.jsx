import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { Chip } from '@mui/material';
import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.main}>
      <Tooltip title="100 songs" arrow placement="top">
        <a href="/">
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img
                src="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg"
                alt="album"
                loading="lazy"
              />
              <div className={styles.banner}>
                <Chip label={`100 Follows`} size="small" className={styles.pill} />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>title</p>
            </div>
          </div>
        </a>
      </Tooltip>
    </div>
  );
};

export default Card;
