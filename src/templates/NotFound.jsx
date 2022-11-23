import React from 'react';
import Link from 'next/link';
import '@styles/NotFound.scss';

const NotFound = () => {
	return (
		<div className="cardNotFound">
			<h1 className="titleNotFount">404</h1>
			<h3 className="subtitleNotFount">Ooops! Not Found</h3>
			<Link href="/" className="goHome">
				Go Home
			</Link>
		</div>
	);
};

export default NotFound;
