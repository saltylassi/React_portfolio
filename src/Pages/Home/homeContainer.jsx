import React from "react";
import Loader from "react-loader-spinner";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import HomePresenter from "./homePresenter";

const HomeContainer = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 1500);
    }, []);
    return loaded ? (
        <HomePresenter />
    ) : (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Loader
                type="Bars"
                color="black"
                height={100}
                width={100}
                timeout={1500}
            />
        </div>
    );
};

export default HomeContainer;
