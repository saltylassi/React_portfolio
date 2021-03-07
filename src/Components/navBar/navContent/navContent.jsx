import React from "react";
import styles from "./navContent.module.css";

const NavContent = (props) => {
    return (
        <li className={styles.container}>
            <a className={styles.content}>Content</a>
        </li>
    );
};

export default NavContent;
