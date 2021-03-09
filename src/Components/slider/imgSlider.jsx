import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import styles from "./imgSlider.module.css";
import first from "../../assets/images/twoluck/1.jpg";

const Slider = () => (
    <AwesomeSlider className={styles.container}>
        <div>1</div>
    </AwesomeSlider>
);

export default Slider;
