import React from 'react';
import styles from './Button.module.css';

const Button = ({ value, variant, fullWidth }) => {
  const classes = `${styles.button} ${styles[variant] || ''} ${fullWidth && styles.fullWidth || ""}`;

  return (
    <button className={classes}>
      {value}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  value: "Login",
  variant: "default"
};
