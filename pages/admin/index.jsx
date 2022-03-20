import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from "../../styles/Admin.module.css"

export const adminIndex = ({products, orders}) => {
    const [pizzaList, setPizzaList] = useState(products);
    const [orderList, setOrderList] = useState(orders);

    const status = ["preparing", "on the way", "delivered"]

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/api/products/${id}`)
            setPizzaList(pizzaList.filter(pizza => pizza._id !== id))
        } catch (error) {
            console.log(error);
        }
    }

    const handleStatus = async (id) => {

        console.log(123);

        const item = orderList.filter(order => order._id === id)[0]
        const currentStatus = item.status

        try {
            const res = await axios.put("http://localhost:3000/api/orders/" + id, {status: currentStatus + 1})
            setOrderList([
                res.data,
                ...orderList.filter(order => order._id !== id)
            ])
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <h1 className={styles.title}>
                Products
            </h1>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle}>
                    <th>Image</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Action</th>
                    </tr>
                </tbody>
                <tbody>
                    {
                        pizzaList.map( (product, index) => (
                            <tr className={styles.trTitle} key={index}>
                                <td>
                                    <Image
                                        src={product.img}
                                        width={50}
                                        height={50}
                                        objectFit="cover"
                                        alt=""
                                    />
                                </td>
                                <td>{product._id}</td>
                                <td>{product.title}</td>
                                <td>$ {product.prices[0]}</td>
                                <td>
                                    <button className={styles.button}>Edit</button>
                                    <button className={styles.button} onClick={()=> handleDelete(product._id)}>Delete</button>
                                </td>
                            </tr>
                        ) )
                    }
                </tbody>
            </table>
        </div>
        <div className={styles.item}>
            <h1 className={styles.title}>
                Orders
            </h1>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle}>
                        <th>Id</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </tbody>
                <tbody>
                    {
                        orderList.map( (order, index) => (
                            <tr className={styles.trTitle} key={index}>
                                <td>{order._id}</td>
                                <td>{order.customer}</td>
                                <td>$ {order.total}</td>
                                <td><span> {order.method === 0 ? 'Cash' : 'Paid'} </span></td>
                                <td>{ status[order.status]}</td>
                                <td>
                                    <button onClick={ ()=> handleStatus(order._id) } className={styles.button}>Next Stage</button>
                                </td>
                            </tr>
                        ))
                    }
                    {/* <tr className={styles.trTitle}>
                        <td>id123121</td>
                        <td>Kobe</td>
                        <td>$50</td>
                        <td>paid</td>
                        <td>preparing</td>
                        <td>
                            <button onClick={ ()=> handleStatus(order._id) } className={styles.button}>Next Stage</button>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>

    </div>
  )
}

export const getServerSideProps = async (ctx) => {
    const myCookie = ctx.req?.cookies || ""
    let admin = false;

    if(myCookie.token !== process.env.TOKEN){
        return {
            redirect: {
                destination: "/admin/login",
                permanents: false
            }
        }
    }else{
        admin = true
    }

    const productRes = await axios.get("http://localhost:3000/api/products")
    const orderRes = await axios.get("http://localhost:3000/api/orders")

    return {
        props: {
            orders: orderRes.data,
            products: productRes.data,
            admin: admin
        }
    }
}

export default adminIndex
