import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
export const metadata = {
  title: "today blog",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>home page</h1>
      <div>
        <Link href="/dashboard"> Dashboard</Link>
      </div>
    </main>
  );
}
