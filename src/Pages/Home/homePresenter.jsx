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
                <div className={styles.textContainer}>
                    <span className={styles.title}>
                        "너는 지금까지 먹은 빵의 수를 기억하나?"
                    </span>
                    <span className={styles.text}>
                        모 만화에서 나오는 대사입니다. 책을 직접 읽은 것은
                        아니고 어쩌다 우연히 접한 대사였습니만, 굉장히 강렬했던
                        기억이 납니다.
                    </span>
                    <span className={styles.text}>
                        2021년의 저는 아직 취준생이지만 언젠간 당당하게 이 말을
                        할 수 있는 사람이 되고 싶습니다.
                    </span>
                    <span className={styles.subTitle}>
                        "너는 지금까지 작성한 코드의 수를 기억하나?"
                    </span>
                    <img
                        src="/logo512.png"
                        alt="react logo"
                        className={styles.logo}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePresenter;
