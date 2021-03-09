import React from "react";
import NavBar from "../../../Components/navBar/navBar";
import styles from "./LSPresenter.module.css";

import TL1 from "../../../assets/images/twoluck/1.jpg";
import TL2 from "../../../assets/images/twoluck/2.jpg";
import TL3 from "../../../assets/images/twoluck/3.jpg";
import TL4 from "../../../assets/images/twoluck/4.jpg";
import TL5 from "../../../assets/images/twoluck/5.jpg";
import TL6 from "../../../assets/images/twoluck/6.jpg";
import TL7 from "../../../assets/images/twoluck/7.jpg";
import TL8 from "../../../assets/images/twoluck/8.jpg";
import TL9 from "../../../assets/images/twoluck/9.jpg";
import TL10 from "../../../assets/images/twoluck/10.jpg";
import TL11 from "../../../assets/images/twoluck/11.jpg";

import reactNativeLogo from "../../../assets/images/logos/reactNative.png";
import EC2Logo from "../../../assets/images/logos/ec2.png";
import JSLogo from "../../../assets/images/logos/js.png";
import NodeLogo from "../../../assets/images/logos/node.png";
import StyledLogo from "../../../assets/images/logos/styled.png";
import GraphQLLogo from "../../../assets/images/logos/graphQL.png";

import { useRef } from "react";

const LSPresenter = (props) => {
    const sliderRef = useRef();

    const moveToLeft = () => {
        const margin = parseInt(sliderRef.current.style.marginLeft);
        console.log(margin);
        if (
            sliderRef.current.style.marginLeft === "" ||
            sliderRef.current.style.marginLeft === 0
        ) {
            return;
        } else if (margin <= -21) {
            sliderRef.current.style.marginLeft = margin + 21 + "rem";
        }
        // else if (margin === -21) {
        //     sliderRef.current.style.marginLeft = margin + 21 + "rem";
        // }
        else {
            return;
        }
        console.log("left");
    };
    const moveToRight = () => {
        console.log("right");
        const margin = parseInt(sliderRef.current.style.marginLeft);
        console.log(margin);
        if (
            sliderRef.current.style.marginLeft === "" ||
            sliderRef.current.style.marginLeft === 0
        ) {
            sliderRef.current.style.marginLeft =
                sliderRef.current.style.marginLeft - 21 + "rem";
        } else if (margin >= -168) {
            sliderRef.current.style.marginLeft = margin - 21 + "rem";
        }
        // else if (margin === -126) {
        //     sliderRef.current.style.marginLeft = margin - 21 + "rem";
        // }
        else {
            return;
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <NavBar />
                <div className={styles.wrapper}>
                    <div className={styles.textContainer}>
                        <span className={styles.title}>2LuckShare</span>
                    </div>
                    <div className={styles.appImgContainer}>
                        <div ref={sliderRef} className={styles.imgWrapper}>
                            <button
                                className={`${styles.sliderBtn} ${styles.leftBtn}`}
                                onClick={moveToLeft}
                            >
                                {"<"}
                            </button>
                            <img
                                className={styles.appImg}
                                src={TL1}
                                alt="appImg"
                            />
                            <img
                                className={styles.appImg}
                                src={TL2}
                                alt="appImg"
                            />
                            <img
                                className={styles.appImg}
                                src={TL3}
                                alt="appImg"
                            />
                            <img
                                className={styles.appImg}
                                src={TL4}
                                alt="appImg"
                            />
                            <img
                                className={styles.appImg}
                                src={TL5}
                                alt="appImg"
                            />
                            <img
                                className={styles.appImg}
                                src={TL6}
                                alt="appImg"
                            />
                            <img
                                className={styles.appImg}
                                src={TL7}
                                alt="appImg"
                            />
                            <img
                                className={styles.appImg}
                                src={TL8}
                                alt="appImg"
                            />
                            <img
                                className={styles.appImg}
                                src={TL9}
                                alt="appImg"
                            />
                            <img
                                className={styles.appImg}
                                src={TL10}
                                alt="appImg"
                            />
                            <img
                                className={styles.appImg}
                                src={TL11}
                                alt="appImg"
                            />
                            <button
                                className={`${styles.sliderBtn} ${styles.rightBtn}`}
                                onClick={moveToRight}
                            >
                                {">"}
                            </button>
                        </div>
                    </div>
                    <div className={styles.textContainer}>
                        <span className={styles.subTitle}>Tech Stack</span>
                    </div>
                    <div className={styles.logoContainer}>
                        <img
                            src={reactNativeLogo}
                            className={styles.logo}
                            alt="logo"
                        />
                        <img src={EC2Logo} className={styles.logo} alt="logo" />
                        <img src={JSLogo} className={styles.logo} alt="logo" />
                        <img
                            src={NodeLogo}
                            className={styles.logo}
                            alt="logo"
                        />
                        <img
                            src={StyledLogo}
                            className={styles.logo}
                            alt="logo"
                        />
                        <img
                            src={GraphQLLogo}
                            className={styles.logo}
                            alt="logo"
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={styles.text}>
                            2020년 초 2Luck에서 근무할 때 개발했던 모바일
                            어플리케이션입니다.
                        </span>
                        <span className={styles.text}>
                            학부과정, 사이드프로젝트 등 제가 진행했던 모든
                            프로젝트를 통틀어서 가장 규모가 컸던
                            프로젝트였습니다.
                        </span>
                        <span className={styles.text}>
                            프론트엔드는 ReactNative와 styledComponents를,
                            백엔드는 NodeJS를 활용했고 쿼리는 GraphQL를
                            사용했습니다.
                        </span>
                        <span className={styles.text}>
                            플로우는 혹여나 저작권 문제가 있을까 싶어
                            어플리케이션 스크린샷으로 대체하였고 상단 캐로셀을
                            통해 확인하실 수 있습니다.
                        </span>
                        <span className={styles.text}></span>
                        <span className={styles.text}></span>
                        <span className={styles.text}></span>
                        <span className={styles.text}>
                            안타깝지만 이 프로젝트에도 Redux는 적용하지 못
                            했었습니다. 졸업작품과 마찬가지로 데드라인이
                            원인이었습니다.
                        </span>
                        <span className={styles.text}>
                            요즘 들어서 Redux를 배우고 실제로 적용해 볼 기회가
                            없을지 눈에 불을 켜고 돌아다니는 버릇이 생겼는데
                            아마 이것과 졸업 작품, Redux 적용에 두 번이나
                            실패했던 것이 원인이 아니었을까 합니다.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LSPresenter;
