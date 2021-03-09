import React from "react";
import NavBar from "../../../Components/navBar/navBar";
import styles from "./PFPresenter.module.css";

const PFPresenter = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <NavBar />
                <div className={styles.textContainer}>
                    <span className={styles.title}></span>
                    <span className={styles.text}></span>
                    <span className={styles.text}></span>
                    <span className={styles.subTitle}></span>
                </div>
            </div>
        </div>
    );
};

export default PFPresenter;
