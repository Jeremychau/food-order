import React from 'react';
import styles from "../styles/PizzaList.module.css";
import PizzaCard from './PizzaCard';

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>The Pizza</h1>
        <p className={styles.desc}>
            Food Ordering App UI Design Using React Next.js | Responsive Restaurant Website.Food Ordering App UI Design Using React Next.js | Responsive Restaurant WebsiteFood Ordering App UI Design Using React Next.js | Responsive Restaurant Website, Food Ordering App UI Design Using React Next.js | Responsive Restaurant Website, Food Ordering App UI Design Using React Next.js | Responsive Restaurant Website, Food Ordering App UI Design Using React Next.js | Responsive Restaurant Website, Food Ordering App UI Design Using React Next.js | Responsive Restaurant WebsiteFood Ordering App UI Design Using React Next.js | Responsive Restaurant Website, Food Ordering App UI Design Using React Next.js | Responsive Restaurant WebsiteFood Ordering App UI Design Using React Next.js | Responsive Restaurant Website, Food Ordering App UI Design Using React Next.js | Responsive Restaurant Website
        </p>
        <div className={styles.wrapper}>
            {pizzaList.map((item) => (
                <PizzaCard key={item._id} pizza={item}/>
            ))}
        </div>
    </div>
  );
};

export default PizzaList;
