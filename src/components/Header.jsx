import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';
import Link from 'next/link';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const [movileMenu, setMobileMenu] = useState(false);

	const { state } = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!toggle);
	};

	return (
		<nav className={styles.Nav}>
			<Image src={menu} alt="menu" className={styles.menu} onClick={() => setMobileMenu(!movileMenu)} />
			<div className={`${styles['burguer-menu']}  ${movileMenu && styles.active}`}>
				<h2>CATEGORIES</h2>
				<ul>
					<li>
						<Link href="/">All</Link>
					</li>
					<li>
						<Link href="/">Clothes</Link>
					</li>
					<li>
						<Link href="/">Electronics</Link>
					</li>
					<li>
						<Link href="/">Furnitures</Link>
					</li>
					<li>
						<Link href="/">Toys</Link>
					</li>
					<li>
						<Link href="/">Others</Link>
					</li>
				</ul>

				<ul>
					<li onClick={() => setToggleOrders(!toggleOrders)} onKeyPress={() => setToggleOrders(!toggleOrders)} role="presentation">
						My orders
					</li>
					<li>
						<Link href="/">My account</Link>
					</li>
				</ul>

				<ul>
					<li className={styles.email}>platzi@example.com</li>
				</ul>
			</div>

			<div className={styles['navbar-left']}>
				<Link href="/">
					<Image src={logo} alt="logo" className={styles['nav-logo']} />
				</Link>
				<ul>
					<li>
						<Link href="/">All</Link>
					</li>
					<li>
						<Link href="/">Clothes</Link>
					</li>
					<li>
						<Link href="/">Electronics</Link>
					</li>
					<li>
						<Link href="/">Furnitures</Link>
					</li>
					<li>
						<Link href="/">Toys</Link>
					</li>
					<li>
						<Link href="/">Others</Link>
					</li>
				</ul>
			</div>

			<div className={styles['navbar-right']}>
				<ul>
					<li className={styles['navbar-email']} onClick={handleToggle} onKeyPress={handleToggle} role="presentation">
						platzi@example.com
					</li>
					<li className={styles['navbar-shopping-cart']} onClick={() => setToggleOrders(!toggleOrders)} onKeyPress={() => setToggleOrders(!toggleOrders)} role="presentation">
						<Image src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>

			{toggleOrders && <MyOrder toggle={() => setToggleOrders(!toggleOrders)} />}
			{toggle && <Menu />}
		</nav>
	);
};

export default Header;
