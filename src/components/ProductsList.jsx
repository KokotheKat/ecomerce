import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../store/slices/productsSlice';

export const ProductsList = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products.items);
	const productStatus = useSelector((state) => state.products.status);
	const error = useSelector((state) => state.products.error);

	useEffect(() => {
		if (productStatus === 'idle') {
			dispatch(fetchProducts());
		}
	}, [productStatus, dispatch]);

	if (productStatus === 'loading' || productStatus === 'idle') return <p>Cargando productos...</p>;
	if (productStatus === 'failed') return <p>Error: {error}</p>;

	return (
		<section>
			<h2>Productos</h2>
			<ul>
				{products.map((product) => (
					<li key={product.id}>
						<Link to={`${product.id}`}>{product.id} {product.name}</Link>
					</li>
				))}
			</ul>
		</section>
	);
};

