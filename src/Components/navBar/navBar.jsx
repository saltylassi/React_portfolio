import React from "react";
import styles from "./navBar.module.css";
import NavLabel from "./navLabel/navLabel";

const NavBar = (props) => {
    //NavBarComponent(Parent) 이하 P
    //NavBarComponent(Child) 이하 C

    //P visited, height증가, ease in out
    //C, 클릭시 해당하는 프로젝트로 이동
    //ETC

    return (
        <div className={styles.container}>
            <NavLabel title={"About"} contents={["about"]} />
            <NavLabel title={"HTML"} contents={["kakaoClone"]} />
            <NavLabel title={"JS"} contents={["youtube-js"]} />
            <NavLabel
                title={"REACT"}
                contents={["reheaven", "youtube-react", "movies", "portfolio"]}
            />
            <NavLabel title={"REACT NATIVE"} contents={["2LuckShare"]} />
        </div>
    );
};

export default NavBar;
