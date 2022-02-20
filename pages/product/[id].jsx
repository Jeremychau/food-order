import Image from 'next/image';
import {React, useState} from 'react';
import styles from '../../styles/Product.module.css'

const Product = () => {
    const [size, setSize] = useState(0);

    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "CAMPAGNOLA",
        price: [19.9, 23.9, 27.9],
        desc: "weqeqqqweqwqdszzx zleqweqw"
    };

    const sizeList = [
        {
            label: 'Small',
            value: 0
        },
        {
            label: 'Medium',
            value: 1
        },
        {
            label: 'Large',
            value: 2
        }
    ]

    const ingredientList = [
        {
            label: 'Double Ingredients',
            value: 'double'
        },
        {
            label: 'Extar Cheese',
            value: 'cheese'
        },
        {
            label: 'Spicy Sauce',
            value: 'spicy'
        },
        {
            label: 'Garlic Sauce',
            value: 'garlic'
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} alt="" layout='fill' />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
                <span className={styles.price}>${pizza.price[size]}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    {
                        sizeList.map( (item, index) => (
                            <div className={styles.size} key={index} onClick={() => setSize(item.value)}>
                                <Image src="/img/size.png" alt="" layout='fill' />
                                <span className={styles.number}>{item.label}</span>
                            </div>
                        ))
                    }
                </div>
                <h3 className={styles.choose}> Please choose ingredients </h3>
                <div className={styles.ingredients}>
                    {
                        ingredientList.map( (item, index) => (
                            <div className={styles.option} key={index}>
                                <input type="checkbox" id={item.value} name={item.value} className={styles.checkbox} />
                                <label htmlFor={item.value} >{item.label}</label>
                            </div>
                        ) )
                    }
                </div>

                <div className={styles.add}>
                    <input type="number"  defaultValue={1} className={styles.quantity}/>
                    <button className={styles.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
