"use server";

import { Link, Typography } from "@mui/material";

export default async function Home() {
  return (
    <main style={{ backgroundColor: "rgba(57, 97, 157, 0.5)" }}>
      <div style={{ textAlign: "center", paddingTop: "2rem" }}>
        <Typography variant="h4">Turning bugs into features</Typography>
        <Typography variant="h4">Since 2018</Typography>
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
        </div>
      </div>
      <article
        style={{
          textAlign: "center",
          maxWidth: "90%",
          minWidth: "90%",
          padding: "16px 48px",
          fontSize: "20px",
        }}
      >
        <p
          style={{
            textIndent: "2em",
            lineHeight: "20px",
          }}
        >
          <code
            style={{
              fontSize: "50px",
              fontWeight: "bolder",
              fontFamily: "var(--font-display)",
            }}
          >
            Hi
          </code>
          , my name is Cristian Musat and I am your friendly neighborhood web
          developer.
        </p>
        <p style={{ paddingBottom: "16px" }}>
          I&apos;ve always been fascinated with how the web connects billions of
          people, so I decided to learn how it works.
        </p>
        <p>
          Over the years, I&apos;ve worked on many different projects using a
          variety of technologies and techniques. Out of all of those, I
          decided, for a few years now, to specialize in
        </p>
        <p style={{ paddingBottom: "16px" }}>
          <code>TypeScript</code>, <code>React</code> and <code>Next</code>.
        </p>
        <p>
          If you wanna find out more (and the clever puns above didn&apos;t
          scare you off), use the navigation in the header to explore further or
          check out the footer links to
        </p>
        <p>
          <Link
            sx={{
              color: "var(--secondary)",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            target="_blank"
            href="/resume"
          >
            download my resumee
          </Link>
          &nbsp; and &nbsp;
          <Link
            sx={{
              color: "var(--secondary)",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/"
          >
            to check out my github projects
          </Link>
          .
        </p>
      </article>
    </main>
  );
}
