import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await axios(API);
			const resProducts = response.data.filter((item) => item.images[0].includes('api.lorem.space'));

			setProducts(resProducts);
		})();
	}, [API]);

	return products;
};

export default useGetProducts;
