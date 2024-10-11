import React from "react";
import styles from "./SlideOne.module.scss";
import slideOneImage from "../../assets/slideOne.png";

export default function SlideOne() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.textSide}>
          <h1>
            Restez connectés, <br /> à votre manière
          </h1>
          <p className={styles.description}>
            Compose ton forfait en toute liberté, selon tes besoins
          </p>
          <p className={styles.underline}>
            100% digital, 100% personnalisable.
          </p>
          <button className={styles.button}>
            <i className="fi fi-rr-settings-sliders" />
            Je Compose Mon Forfait
          </button>
        </div>
        <img className={styles.image} src={slideOneImage} alt="slide-one" />
      </div>
    </div>
  );
}
