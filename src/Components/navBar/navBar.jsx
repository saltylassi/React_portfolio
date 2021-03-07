import React from "react";
import styles from "./navBar.module.css";

const NavBar = (props) => {
    return (
        <div className={styles.container}>
            <span className={styles.content}>navBar</span>
        </div>
    );
};

export default NavBar;
