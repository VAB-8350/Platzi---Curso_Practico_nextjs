import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import Head from 'next/head';
import OrderItem from '@components/OrderItem';
import Image from 'next/image';
import flechita from '@icons/flechita.svg';
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
	const { state } = useContext(AppContext);
	return (
		<>
			<Head>
				<title>Checkout</title>
			</Head>
			<div className={styles.Checkout}>
				<div className={styles['Checkout-container']}>
					<h1 className={styles.title}>My orders</h1>

					{state.cart.map((item) => (
						<OrderItem product={item} key={`orderItem-${item.id}`} />
					))}
					<div className={styles['Checkout-content']}>
						<div className={styles.order}>
							<p>
								<span>03.25.2021</span>
								<span>6 articles</span>
							</p>
							<p>$560.00</p>
							<Image src={flechita} alt="arrow" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Checkout;
