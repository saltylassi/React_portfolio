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
            <NavLabel
                title={"Home"}
                items={[{ contents: "Home", dest: "/" }]}
            />
            <NavLabel
                title={"About"}
                items={[{ contents: "about", dest: "/about" }]}
            />
            <NavLabel
                title={"REACT"}
                items={[
                    { contents: "reheaven", dest: "/project/reheaven" },
                    // { contents: "portfolio", dest: "/project/portfolio" },
                ]}
            />
            <NavLabel
                title={"REACT NATIVE"}
                items={[{ contents: "2LuckShare", dest: "/project/twoluck" }]}
            />
        </div>
    );
};

export default NavBar;
