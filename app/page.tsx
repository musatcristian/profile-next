import styles from "@/styles/app.module.css";
import { Link, Typography } from "@mui/material";

export default async function Home() {
  return (
    <main
      className={styles.main}
      style={{ backgroundColor: "rgba(57, 97, 157, 0.5)" }}
    >
      <div style={{ textAlign: "center", paddingTop: "2rem" }}>
        <Typography variant="h4">Turning bugs into features</Typography>
        <Typography variant="h4">Since 2018</Typography>
        {/* (<code>ok, its not that long ago but still</code>) */}
      </div>
      <div
        style={{
          textAlign: "left",
          paddingRight: "2rem",
          maxWidth: "50%",
          minWidth: "250px",
          alignSelf: "flex-end",
          fontSize: "16px",
        }}
      >
        <div style={{ fontSize: "14px" }}>
          - <code>powered by</code> -
        </div>
        <div style={{ textAlign: "center" }}>
          <p>MDN</p>
          <p>Stack Overflow</p>
          <p>Too much coffee</p>
          {/* MDNStackoverflow and too much coffee. */}
        </div>
      </div>
      <article
        style={{
          textAlign: "center",
          maxWidth: "90%",
          minWidth: "90%",
          // backgroundColor: "red",
          padding: "16px",
          fontSize: "20px",
        }}
      >
        <p>
          Hi, I'm Cristian Musat and I am your friendly neighborhood web
          developer. I've always been fascinated with how the web connects
          billions of people, so, I've decided to learn how it works.
        </p>
        <p>
          Along the years I've worked on many different projects using many
          differnt technologies and techniques. Out of all of those I decided,
          for a few years now, to specialize in
          <code>typecript</code>, <code>react</code> and <code>next</code>.
        </p>
        <p>
          If you wanna find out more and the clever puns above didn't scare you
          off, use the navogation in the header to get more details or use the
          footer links to <Link> download my resumee </Link> and{" "}
          <Link>to check out my github projects</Link>.
        </p>
      </article>
    </main>
  );
}
