import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/slices/productsSlice";
import styled from "styled-components";

const ProductListStyle = styled.div``;
const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;
const ProductItem = styled.article`
  padding: 1rem;
  width: 100%;
  max-width: 20rem;
  height: 30rem;
  background-color: #fff;
  color: #000;
  border-radius: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  height: auto;
  object-fit: contain;
`;
const ProductTitle = styled.h3`
  font-size: 2em;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ProductDescription = styled.p`
  font-size: 1em;
`;
const ProductPrice = styled.span`
  font-size: 1.5em;
`;
const ProductRating = styled.span``;
const ProductComments = styled.span`
  font-size: 0.9em;
  color: #ccc;
`;
const ProductBadge = styled.span`
  font-size: 1.5em;
`;
const ProductOffert = styled.span``;
const ProductAddCart = styled(Link)`
  font-size: 1em;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
`;
const ProductAddFavorite = styled.button`
  width: 1rem;
  height: 1rem;
  background-color: red;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
const ProductTag = styled.button``;

export const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  if (productStatus === "loading" || productStatus === "idle")
    return <p>Cargando productos...</p>;
  if (productStatus === "failed") return <p>Error: {error}</p>;

  return (
    <ProductListStyle>
      <h2>Productos</h2>
      <ProductWrapper>
        {products.map((product) => (
          <ProductItem key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.decription}</ProductDescription>
            <ProductPrice>{product.price}</ProductPrice>
            <ProductAddCart to={`${product.id}`}>
              Agregar al carrito
            </ProductAddCart>
          </ProductItem>
        ))}
      </ProductWrapper>
    </ProductListStyle>
  );
};
