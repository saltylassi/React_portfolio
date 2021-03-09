import React from "react";
import NavContents from "../navContents/navContents";
import styles from "./navLabel.module.css";

const NavLabel = ({ title, contents, dest, items }) => {
    return (
        <ul className={styles.container}>
            <span className={styles.label}>{title}</span>
            <div className={styles.contents}>
                {items.map((item) => {
                    return (
                        <NavContents
                            contents={item.contents}
                            dest={item.dest}
                        />
                    );
                })}
            </div>
        </ul>
    );
};

export default NavLabel;
