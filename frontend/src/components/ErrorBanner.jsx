import styles from "./ErrorBanner.module.css";
import useStore from "../store/store.js";
import { useEffect } from "react";

export default function ErrorBanner() {
  const { errorMessage, setErrorMessage } = useStore();

  useEffect(() => {
    if (errorMessage != "") {
      setTimeout(() => closeBanner(), 5000);
    }
  }, [errorMessage]);

  function closeBanner() {
    setErrorMessage("");
  }

  if (errorMessage === "") return null;

  return (
    <>
      <div className={styles.errorBanner}>
        <span className={styles.errorText}>{errorMessage}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className={styles.closeIcon}
          onClick={closeBanner}
        >
          <title>close</title>
          <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
      </div>
    </>
  );
}
