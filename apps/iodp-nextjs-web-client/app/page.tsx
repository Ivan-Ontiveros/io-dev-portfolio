import React from "react";
import styles from "./home.module.scss";

const HomePage: React.FC = () => {
  return (
    <div className={styles["home-page"]}>
      <div className={styles["content"]}>
        <h1 className="text-3xl font-bold">Under Maintenance</h1>
        <p className="text-lg">
          We are currently working on the website. Please check back later.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
