import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { Analytics } from "@vercel/analytics/react";

import styles from "./index.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/getting-started/"
            >
              Get Started
            </Link>
          </div>
          <div style={{ paddingTop: "2.5rem" }}>
            <img
              style={{ maxHeight: "750px" }}
              src={useBaseUrl("/screens/astrysk_landing_screen.png")}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Analytics />
      <Layout
        title={`${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        <HomepageHeader />
        <main>
          <HomepageFeatures />
          <div
            className="container"
            style={{
              marginBottom: "1.5rem",
            }}
          >
            <p className="hero__subtitle">{"Jellyfin Applet"}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "100%", maxWidth: "1000px" }}
                src={useBaseUrl("/screens/astrysk_jellyfin_screens.png")}
              />
              {/*
              Attribution
              <a href="https://www.freepik.com/free-vector/realistic-front-view-smartphone-mockup-
              mobile-iphone-purple-frame-with-blank-white-display-vector_33632332.htm#query=iphone
              %20mockup&position=0&from_view=keyword&track=ais">Image by svstudioart</a> on Freepik
              */}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
