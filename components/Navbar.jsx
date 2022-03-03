import Image from "next/image"
import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css"

export const Navbar = () => {

    const listMenu = [
        {
            text: 'Homepage',
            href: '/'
        },
        {
            text: 'Products',
            href: '/products'
        },
        {
            text: 'Menu',
            href: '/menu'
        },
        {
            text: 'Events',
            href: '/events'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ]

    const quantity = useSelector(state => state.cart.quantity)

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="" width={32} height={32} />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}> Order Now! </div>
                    <div className={styles.text}> +852 6194 2123 </div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    {
                        listMenu.map( (item, index) => (
                            (
                                index != 3 ?
                                (
                                    <Link href={item.href} key={index}>
                                        <a><li className={styles.listItem}>{item.text}</li></a>
                                    </Link>
                                )
                                : (<Link href="/" key={index}><a><Image src="/img/logo.png" alt="" width="160" height="69"/></a></Link>)
                            )
                        ) )
                    }
                    {/* <li className={styles.listItem}>Homepage</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Link href="/"><a><Image src="/img/logo.png" alt="" width="160" height="69"/></a></Link>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li> */}
                </ul>
            </div>
            <Link href="/cart" passHref>
                <a>
                    <div className={styles.item}>
                        <div className={styles.cart}>
                            <Image src="/img/cart.png" alt="" width="32" height="32"/>
                            <div className={styles.counter}>{quantity}</div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
};
