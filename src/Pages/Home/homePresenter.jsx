import React from "react";
import MainHeader from "../../Components/mainHeader/mainHeader";
import NavBar from "../../Components/navBar/navBar";
import styles from "./homePresenter.module.css";

const HomePresenter = (props) => {
    return (
        <div className={styles.container}>
            <MainHeader />
            <div className={styles.contents}>
                <NavBar />
                <h1 className={styles.title}>Home</h1>
            </div>
        </div>
    );
};

export default HomePresenter;
