import React from "react";
import styles from "./mainHeader.module.css";

const MainHeader = (props) => {
    return (
        <div className={styles.container}>
            <span className={styles.firstText}>
                Hello! 이상민, 인사 드립니다 :)
            </span>
            <span className={styles.secondText}>
                이 포트폴리오는 인적사항과 제가 진행했던 프로젝트를 담고
                있습니다.
            </span>
            <span className={styles.thirdText}>
                천천히 둘러보시고, 이쁘게 봐주시면 감사하겠습니다.
            </span>
            <span className={styles.title}>이상민</span>
            <span className={styles.lastText}>건국대학교 컴퓨터공학부</span>
            <span className={styles.lastText}>
                28세, 프론트엔드 개발자의 꿈을 키우는 예비 신입 :)
            </span>
        </div>
    );
};

export default MainHeader;
