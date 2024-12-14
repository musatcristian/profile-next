import { Typography } from "@mui/material";
import Image from "next/image";

import styles from "@/styles/app.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.page}>
        <header style={{ display: "flex" }}>
          <Image
            className={styles.logo}
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={80}
            height={80}
            priority
          />
          <div>
            <Typography variant="h2">This is a page title</Typography>
            <Typography variant="body2">This is a subtitle</Typography>
          </div>
        </header>
      </div>
    </main>
  );
}
