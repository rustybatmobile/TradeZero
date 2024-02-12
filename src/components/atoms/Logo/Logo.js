import styles from './Logo.module.css';
import logoImage from '../../../assets/images/Zerodha.jpeg';

const Logo = ({ size = 'auto', color = 'black' }) => {
  const classes = `${styles.logo} ${styles[size]} ${styles[color]}`;

  return (
    <img
      className={classes}
      src={logoImage}
      alt="Logo"
      width="150"
      height="22"
    />
  );
};

export default Logo;
