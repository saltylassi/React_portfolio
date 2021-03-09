import React from "react";
import NavBar from "../../../Components/navBar/navBar";
import styles from "./RHPresenter.module.css";

import RH1 from "../../../assets/images/reheaven/1.png";
import RH2 from "../../../assets/images/reheaven/2.png";
import RH3 from "../../../assets/images/reheaven/3.png";

import EC2Logo from "../../../assets/images/logos/ec2.png";
import JSLogo from "../../../assets/images/logos/js.png";
import NodeLogo from "../../../assets/images/logos/node.png";
import ReactLogo from "../../../assets/images/logos/react.png";
import StyledLogo from "../../../assets/images/logos/styled.png";

const RHPresenter = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <NavBar />
                <div className={styles.wrapper}>
                    <div className={styles.textContainer}>
                        <span className={styles.title}>
                            리뷰 해체 분석기(건국대학교 컴퓨터공학부, 2020년
                            졸업 작품)
                        </span>
                    </div>
                    <div className={styles.imgContainer}>
                        <img className={styles.img} src={RH1} alt="appImg" />
                        <img className={styles.img} src={RH2} alt="appImg" />
                        <img className={styles.img} src={RH3} alt="appImg" />
                    </div>

                    <div className={styles.textContainer}>
                        <span className={styles.subTitle}>Tech Stack</span>
                    </div>
                    <div className={styles.logoContainer}>
                        <img
                            className={styles.logo}
                            alt="logo"
                            src={ReactLogo}
                        />
                        <img className={styles.logo} alt="logo" src={JSLogo} />
                        <img className={styles.logo} alt="logo" src={EC2Logo} />
                        <img
                            className={styles.logo}
                            alt="logo"
                            src={NodeLogo}
                        />
                        <img
                            className={styles.logo}
                            alt="logo"
                            src={StyledLogo}
                        />
                    </div>

                    <div className={styles.textContainer}>
                        <span className={styles.text}>
                            작년 졸업 작품입니다.
                        </span>
                        <span className={styles.text}>
                            클라이언트 {"<->"} 웹서버 {"<->"}모델서버{"<->"}
                            모델의 형태로 구축했습니다.
                        </span>
                        <span className={styles.text}>
                            프론트엔드는 React, styledComponents를, 백엔드는
                            NodeJS와 Axios를 활용했고 아마존 EC2에 업로드했으며
                            현재는 내린 상태입니다.
                        </span>
                        <span className={styles.text}>
                            맘 같아선 Redux도 적용해보고 싶었지만, 러닝커브로
                            인해 기간 내에 적용하기엔 어려울 것 같아 포기했던
                            점이 아쉬움으로 남았던 프로젝트입니다.
                        </span>
                        <a
                            href="https://github.com/saltylassi/reheaven-app"
                            target="_blank"
                        >
                            <span className={styles.text}>
                                https://github.com/saltylassi/reheaven-app
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RHPresenter;
