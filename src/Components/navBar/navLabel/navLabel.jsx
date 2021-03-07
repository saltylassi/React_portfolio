import React from "react";
import NavContent from "../navContent/navContent";
import styles from "./navLabel.module.css";

const NavLabel = (props) => {
    return (
        <ul className={styles.container}>
            <span className={styles.label}>Label</span>
            <div className={styles.content}>
                <NavContent />
                <NavContent />
            </div>
        </ul>
    );
};

export default NavLabel;
