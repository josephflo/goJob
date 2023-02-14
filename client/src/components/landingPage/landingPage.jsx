import React from "react";
import { Link } from "react-router-dom";

import styles from "./landingPage.module.css";

export default function LandingPage() {
  return (
    <>
      {/* Landing */}
      <div className={styles.container}>
        <div className={styles.center}>
          <h1 className={styles.text1}>
            Trabajadores con experiencia y referencia
          </h1>
          <h2 className={styles.text2}>Desarrolla tu oficio cerca de ti</h2>
          <div class={`input-group ${styles.search}`}>
            <div class="form-outline">
              <input
                type="search"
                id="form1"
                class="form-control"
                placeholder="&#xf002;"
              />
            </div>
            <Link to="/home">
              <button type="button" class="btn btn-primary">
                Ver Perfiles
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
