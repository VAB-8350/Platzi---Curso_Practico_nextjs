import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import flechita from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = ({ toggle }) => {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};

	return (
		<aside className={styles.MyOrder}>
			<div className={styles['title-container']} onClick={toggle} onKeyPress={toggle} role="button" tabIndex={0}>
				<Image src={flechita} alt="arrow" className={styles.arrow} width={100} height={100} tabIndex={-1} />
				<p className={styles.title}>My order</p>
			</div>
			<div className={styles['my-order-content']}>
				{state.cart.map((item) => (
					<>
						{console.log(item)}
						<OrderItem product={item} key={`orderItem-${item.id}`} />
					</>
				))}
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<Link className={styles['primary-button']} href="/checkout" onClick={toggle}>
					Checkout
				</Link>
			</div>
		</aside>
	);
};

export default MyOrder;
