import axios from 'axios';
import Image from 'next/image';
import {React, useState} from 'react';
import styles from '../../styles/Product.module.css'
import { useDispatch } from 'react-redux';
import { addProduct } from "../../redux/cartSlice"

const Product = ({pizza}) => {
    const [size, setSize] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(pizza.prices[0]);
    const [extras, setExtras] = useState([]);
    const dispatch = useDispatch()

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

    const handleSize = (index) => {
        const difference = pizza.prices[index] - pizza.prices[size];
        setSize(index)
        setPrice(price + difference)
    }

    const handleChange = (e, option) => {
        const checked = e.target.checked;

        if(checked){
            setPrice(price + option.price)
            setExtras([...extras, option])
        }else{
            setPrice(price - option.price)
            setExtras(extras.filter(extra=> extra._id !== option._id))
        }
    }

    const handleClick = () => {
        dispatch(addProduct({...pizza, extras, price, quantity}))
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} alt="" layout='fill' />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
                <span className={styles.prices}>${price}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    {
                        sizeList.map( (item, index) => (
                            <div className={styles.size} key={index} onClick={() => handleSize(item.value)}>
                                <Image src="/img/size.png" alt="" layout='fill' />
                                <span className={styles.number}>{item.label}</span>
                            </div>
                        ))
                    }
                </div>
                <h3 className={styles.choose}> Please choose ingredients </h3>
                <div className={styles.ingredients}>
                    {
                        pizza.extraOptions.map( ( option ) => (
                            <div className={styles.option} key={option._id}>
                                <input
                                    type="checkbox"
                                    id={option.text}
                                    name={option.text}
                                    className={styles.checkbox}
                                    onChange={ (e) => handleChange(e, option) }
                                />
                                <label htmlFor={option.value} >{option.text}</label>
                            </div>
                        ))
                    }
                </div>

                <div className={styles.add}>
                    <input onChange={e => setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity}/>
                    <button className={styles.button} onClick={handleClick}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);

    return {
        props: {
            pizza:res.data
        }
    }
}

export default Product;
