import axios from 'axios';
import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Order.module.css';

const Order = ({order}) => {

    const statusList = [
        {
            lable: 'Payment',
            img: '/img/paid.png'
        },
        {
            lable: 'Preparing',
            img: '/img/bake.png'
        },
        {
            lable: 'ON the way',
            img: '/img/bike.png'
        },
        {
            lable: 'Delivered',
            img: '/img/delivered.png'
        },
    ]

    const status = order.status;

    const statusClass = (index) => {
        if( index-status < 1) return styles.done
        else if( index-status === 1) return styles.inProgress
        else if( index-status > 1) return styles.undone
    }

  return (
      <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
                <table className={styles.table}>
                        <tbody>
                        <tr className={styles.trTitle}>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Addrees</th>
                            <th>Total</th>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <span className={styles.id}>{order._id}</span>
                            </td>
                            <td>
                                <span className={styles.name}>
                                    {order.customer}
                                </span>
                            </td>
                            <td>
                                <span className={styles.address}>
                                    {order.address}
                                </span>
                            </td>
                            <td>
                                <span className={styles.total}>
                                    $ {order.total}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.row}>
                {
                    statusList.map( (item, index) => (
                        <div className={statusClass(index)} key={index}>
                            <Image src={item.img} width={30} height={30} alt="" />
                            <span>{item.lable}</span>
                            <div className={styles.checkedIcon}>
                                <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Cart Total</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b>0
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>$79.60
                </div>
                <button disabled className={styles.button}>Paid</button>
            </div>
        </div>
      </div>
  );
};

export const getServerSideProps = async( {params} ) => {
    const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`)
    return {props: {order: res.data}}
}

export default Order;
