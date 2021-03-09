import React from "react";
import NavBar from "../../Components/navBar/navBar";
import styles from "./aboutPresenter.module.css";

const AboutPresenter = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <NavBar />

                <div className={styles.wrapper}>
                    <div className={styles.textContainer}>
                        <span className={styles.title}>인적사항</span>
                        <span className={styles.text}>이름 : 이상민</span>
                        <span className={styles.text}>나이 : 28세</span>
                        <span className={styles.text}>
                            최종 학력 : 건국대학교 컴퓨터공학부 졸업
                        </span>
                        <a href="https://github.com/saltylassi" target="_blank">
                            <span className={styles.text}>
                                https://github.com/saltylassi
                            </span>
                        </a>
                    </div>
                    <div className={styles.textContainer}>
                        <span className={styles.title}>
                            왜 프론트엔드이고 왜 리액트인가?
                        </span>
                        <span className={styles.subTitle}>
                            유저와 가장 가까운 환경
                        </span>
                        <span className={styles.text}>
                            보편적으로 인간이 가장 먼저 정보를 받아들이는
                            감각기관은 눈입니다.
                        </span>
                        <span className={styles.text}>
                            이는 개발업계 최전선에는 프론트엔드 개발자가 있다는
                            뜻과 같습니다.
                        </span>
                        <span className={styles.text}>
                            물론 백엔드와 데브옵스도 중요합니다. 하지만, 아무리
                            좋은 서비스라도 시각적으로 유저의 흥미를 끌지 못
                            한다면 시작부터 지고 들어가는 것이라고 생각합니다.
                        </span>
                        <span className={styles.text}>
                            이왕 하는 것이라면 제대로, 최전선에서 활동하고
                            싶었습니다.
                        </span>
                        <span className={styles.subTitle}>
                            개발자도 유저였다
                        </span>
                        <span className={styles.text}>
                            웹 기술의 발전과 함께, 과거에 비해 웹페이지는 굉장히
                            복잡해졌습니다.
                        </span>
                        <span className={styles.text}>
                            애니메이션과 수많은 이벤트, DOM조작 등 브라우저가
                            처리해야 할 일은 시간이 가면 갈 수록 더욱 더 늘어날
                            것입니다.
                        </span>
                        <span className={styles.text}>
                            하지만 이러한 부하는 성능 저하로 이어질 가능성이
                            매우 높습니다.
                        </span>
                        <span className={styles.text}>
                            n개의 조작을 가했을 때 paint 단계에서 해결이 된다면
                            다행이지만 실제로는 layout부터 다시 계산하는 경우가
                            비일비재합니다. 브라우저 엔진이 향상되고 하드웨어
                            성능이 높아졌다고는 해도, 이는 용납하기 어려운
                            일입니다.
                        </span>
                        <span className={styles.text}>
                            제가 리액트에 매력을 느낀 이유는 리액트가 단순한
                            해결책에서 그치지 않았기 때문입니다.
                        </span>
                        <span className={styles.text}>
                            사실 VirtualDOM이 아니더라도 렌더링을 줄일 수 있는
                            방법은 이미 존재하는 것으로 알고 있습니다. 하지만
                            해결책이 존재하는지는 중요하지 않았습니다.
                        </span>
                        <span className={styles.text}>
                            리액트를 활용하면 일일이 한 땀 한 땀 작업하지
                            않더라도 자동으로 해결해준다는 점이 굉장히
                            매력적이었고, 이는 개발자 역시 유저였다는 사실을
                            깨닫게 해주었습니다.
                        </span>
                        <span className={styles.text}>
                            새로웠죠. 수박 겉핥기로 익혔으면 자신감만 높아진다고
                            합니다. 제가 딱 그 상황이었습니다.
                        </span>
                        <span className={styles.text}>
                            전공생이라고는 하나 고작 3학년 학부과정 마친 상황에,
                            조금 배웠답시고 스스로 모든걸 해결할 거라는 근거없는
                            자신감. 그러한 상황에서 제 눈을 뜨게 해 준 것이
                            리액트였습니다.
                        </span>
                        <span className={styles.text}>
                            리액트를 알게 된 것, 그리고 실제로 활용해볼 수
                            있었던(React Native였지만) 스타트업 개발 경험이
                            아니었다면 저는 아직까지도 하고싶은 분야를 정하지 못
                            했을 것입니다.
                        </span>
                        <span className={styles.text}>
                            그저 흘러가는대로, 되는대로 취업하고 그저 그런
                            개발자가 되었거나 어쩌면 전공조차 살리지 못 했을지도
                            모르겠습니다. 하지만 지금은 그렇지 않습니다.
                        </span>
                        <span className={styles.text}>
                            지금도 아직까진 수박 겉핥기지만, 제가 하고 싶은 일을
                            스스로 선택했다는 것. 이게 가장 중요하다고
                            생각합니다.
                        </span>
                        <span className={styles.text}>
                            첫 발을 제 의지로 내딛었으니 앞으로는 발전할 일만
                            남았습니다.
                        </span>
                    </div>

                    <div className={styles.textContainer}>
                        <span className={styles.title}>이력</span>
                        <span className={styles.text}>
                            2010.03 부천 심원고등학교 입학
                        </span>
                        <span className={styles.text}>
                            2013.02 심원고등학교 졸업
                        </span>
                        <span className={styles.text}>
                            2014.03 건국대학교 컴퓨터공학부 서울캠퍼스 입학
                        </span>
                        <span className={styles.text}>
                            2016.03 육군 20사단 입영
                        </span>
                        <span className={styles.text}>
                            2017.12 육군 병장 만기제대
                        </span>
                        <span className={styles.text}>
                            2020.12 졸업작품 전시회 장려상 수상(영화 리뷰
                            분석기, 프론트엔드)
                        </span>
                        <span className={styles.text}>
                            2021.02 건국대학교 졸업
                        </span>
                    </div>

                    <div className={styles.textContainer}>
                        <span className={styles.title}>경력</span>
                        <span className={styles.subTitle}>
                            현대자동차 사내 스타트업 2Luck
                        </span>
                        <span className={styles.text}>
                            모바일 어플리케이션 2LuckShare 프론트엔드 담당
                        </span>
                        <span className={styles.text}>
                            2020.01.01 ~ 2020.02.29
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPresenter;
