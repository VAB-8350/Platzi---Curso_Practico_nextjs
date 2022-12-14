import React from 'react';
import Image from 'next/image';
import '@styles/Checkout.scss';
import flechita from '@icons/flechita.svg';

const Checkout = () => {
	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My orders</h1>
				<div className="Checkout-content">
					<div className="order">
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
	);
};

export default Checkout;
