import React from "react";
import { withRouter } from "react-router";
import styles from "./navContents.module.css";

const NavContent = ({ item, history }) => {
    return (
        <li className={styles.container}>
            <a
                className={styles.contents}
                onClick={() => {
                    item !== "about"
                        ? history.push(`project/${item}`)
                        : history.push(`/${item}`);
                }}
            >
                {item}
            </a>
        </li>
    );
};

export default withRouter(NavContent);
