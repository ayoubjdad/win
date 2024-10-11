import React from "react";
import styles from "./SlideTwo.module.scss";
import slideTwoImage from "../../assets/slideTwo.png";

export default function SlideTwo() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.textSide}>
          <h1>
            <span>win</span> by inwi, C’est Quoi?
          </h1>
          <p className={styles.description}>
            Votre forfait sur-mesure, flexible et sans engagement.
          </p>

          <div className={styles.grids}>
            <div className={styles.gridContainer}>
              <div className={styles.grid}>
                <h1>ICON</h1>
                <p>
                  Composez votre forfait et choisissez votre numéro, simplement
                  et rapidement
                </p>
              </div>
            </div>
            <div className={styles.gridContainer}>
              <div className={styles.grid}>
                <h1>ICON</h1>
                <p>
                  Modifiez votre forfait gratuitement, aussi souvent que vous le
                  souhaitez
                </p>
              </div>
            </div>
            <div className={styles.gridContainer}>
              <div className={styles.grid}>
                <h1>ICON</h1>
                <p>
                  Mettez en pause ou reprenez votre forfait à tout moment, sans
                  frais
                </p>
              </div>
            </div>
            <div className={styles.gridContainer}>
              <div className={styles.grid}>
                <h1>ICON</h1>
                <p>
                  Accédez à une assistance disponible à tout moment, pour une
                  tranquillité d'esprit
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.button}>Je souscris</button>
        {/* <img className={styles.image} src={slideTwoImage} alt="slide-one" /> */}
      </div>
    </div>
  );
}
