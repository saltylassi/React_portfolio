import React from "react";
import NavContents from "../navContents/navContents";
import styles from "./navLabel.module.css";

const NavLabel = ({ title, contents }) => {
    return (
        <ul className={styles.container}>
            <span className={styles.label}>{title}</span>
            <div className={styles.contents}>
                {contents.map((item) => {
                    return <NavContents item={item} />;
                })}
            </div>
        </ul>
    );
};

export default NavLabel;
