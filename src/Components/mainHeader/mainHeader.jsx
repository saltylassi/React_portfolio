import React from "react";
import styles from "./mainHeader.module.css";

const MainHeader = (props) => {
    return (
        <div className={styles.container}>
            <span className={styles.firstText}>
                Hello! 이상민, 인사 드립니다 :)
            </span>
            <span className={styles.secondText}>
                이 포트폴리오는 간단한 소개와 인적사항, 그리고 제가 진행했던
                프로젝트를 담고 있습니다.
            </span>
            <span className={styles.thirdText}>
                그럼 즐거운 시간 되시길 바라며, 이만 물러가겠습니다.
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
