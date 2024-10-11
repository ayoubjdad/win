import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
  const links = ["Je Découvre", "Forfait", "Pass", "Assistance"];

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <img
          className={styles.logo}
          src="https://api.win.ma/api/v1/static/img?name=img/win-logo.png"
          alt="logo"
        />
        <div className={styles.links}>
          {links.map((link, index) => (
            <span key={index}>{link}</span>
          ))}
        </div>
        <div className={styles.links}>
          <span>
            <i className="fi fi-rr-comment-question" />
          </span>
          <span>
            <i className="fi fi-rr-globe" />
          </span>
          <span>
            <i className="fi fi-rr-circle-user" />
          </span>
        </div>
      </div>
    </div>
  );
}
