import styles from "./Button.module.css";

export default function Button({ type, label, style, onClick }) {
  return (
    <button
      className={styles.button}
      type={type}
      onClick={onClick}
      style={style}
    >
      {label}
    </button>
  );
}
