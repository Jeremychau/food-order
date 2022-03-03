import Image from 'next/image';
import React from 'react';
import styles from '../styles/Footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <Image src="/img/bg.png" layout='fill' objectFit="cover" alt="" priority/>
        </div>

        <div className={styles.item}>
            <div className={styles.card}>
                <h2 className={styles.motto}>
                    OH YES.
                </h2>
            </div>
            <div className={styles.card}>
                <h1 className={styles.title}>
                    Find out store
                </h1>
                <p className={styles.text}>
                    1645 R stor #01<br />
                    NY<br />
                    5123 1234<br />
                </p>
                <p className={styles.text}>
                    1645 R stor #01<br />
                    NY<br />
                    5123 1234<br />
                </p>
                <p className={styles.text}>
                    1645 R stor #01<br />
                    NY<br />
                    5123 1234<br />
                </p>
            </div>

            <div className={styles.card}>
                <h1 className={styles.title}>
                    Working Hours
                </h1>
                <p className={styles.text}>
                    14:00 - 16:00
                </p>
            </div>
        </div>
    </div>
  );
};
