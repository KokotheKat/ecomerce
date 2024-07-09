import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const Product = () => {
	const { id } = useParams();

	const product = useSelector((state) => state.products.items);

	if (!product) return <p>Producto {id} no encontrado</p>;

	return (
		<section>
			<h2>{product.name}</h2>
			<p>{product.website}</p>
			<p>Precio: ${product.id}</p>
		</section>
	);
};
