import styles from "./Button.module.css";

export default function Button({ type, label, style, onClick, className }) {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onClick}
      style={style}
    >
      {label}
    </button>
  );
}
