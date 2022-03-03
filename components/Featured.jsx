import {React, useState} from 'react';
import styles from "../styles/Featured.module.css";
import Image from "next/image"

const Featured = () => {
    const [index, setIndex] = useState(0);

    const imgArr = [
        "/img/featured.jpg",
        "/img/featured2.jpg",
        "/img/featured3.jpg"
    ]

    const handleArrow = (direction) =>{
        if(direction === 'left'){
            setIndex(index !== 0 ? index-1 : 2)
        }else{
            setIndex(index !== 2 ? index+1 : 0)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left: 0}} onClick={() => handleArrow('left')} >
                <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
                {imgArr.map( (img, index) => (
                    <div className={styles.imgContainer} key={index}>
                        <Image src={img} layout="fill" alt="" objectFit="contain" priority />
                    </div>
                ) )}
            </div>
            <div className={styles.arrowContainer} style={{right: 0}} onClick={() => handleArrow('right')}>
                <Image src="/img/arrowr.png" alt="" layout="fill" objectFit="contain"/>
            </div>
        </div>
    );
};

export default Featured;
