import React from "react";
import { withRouter } from "react-router";
import styles from "./navContents.module.css";

const NavContent = ({ contents, dest, history }) => {
    return (
        <li className={styles.container}>
            <a
                className={styles.contents}
                onClick={() => {
                    history.push(dest);
                }}
            >
                {contents}
            </a>
        </li>
    );
};

export default withRouter(NavContent);
