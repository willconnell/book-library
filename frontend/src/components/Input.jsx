import styles from "./Input.module.css";

export default function Input({
  type,
  id,
  placeholder,
  style,
  onChange,
  value,
}) {
  return (
    <input
      className={styles.input}
      style={style}
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
