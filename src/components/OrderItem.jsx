import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (item) => {
		removeFromCart(item);
	};

	return (
		<div className={styles.OrderItem}>
			{console.log(product.images[0])}
			<figure>
				<Image src={product?.images[0]} alt={product?.title} width={70} height={70} className={styles.productImg} />
			</figure>
			<p>{product?.title}</p>
			<p>{`${product?.price ? '$' + product?.price : ''}`}</p>
			<Image src={close} className={styles['remove-item']} alt="close" onClick={() => handleRemove(product)} />
		</div>
	);
};

export default OrderItem;
