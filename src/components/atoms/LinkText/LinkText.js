import styles from "./LinkText.module.css";

const LinkText = ({val, onClick}) => {
    return (
        <a className={styles.linkText} onClick={onClick}>{val}</a>
    )
}

export default LinkText