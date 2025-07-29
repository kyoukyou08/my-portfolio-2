import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <section>
        <div className={styles.top}></div>
        <div className={styles.backgrounds}></div>
      </section>
    </div>
  );
}
