import React from 'react';
import styles from './Hero.scss';


const Hero = props => (
    <header className={styles.component}>
        <h2 className={styles.title}>{props.titleText}</h2>
        {/*<img className={styles.image} src={require("../../images/space.png")}></img>*/}
        <img className={styles.image} src={"../../images/space.png"}></img>

    </header>
);

export default Hero;