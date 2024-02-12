import React from 'react';
import styles from './Text.module.css';

const Text = ({ size = 'medium', weight = 'normal', color = 'black', value, isInline }) => {
  const classes = `${styles.text} ${styles[size]} ${styles[weight]} ${styles[color]} ${isInline && styles["inline"]}`;

  return <span className={classes}>{value}</span>;
};

export default Text;

Text.defaultProps = {
  value: 'Login to Kite',
};
