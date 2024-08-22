import { productList } from "../../data/productsData";
import { Card, LinkItem, ProductContainer, Title } from "./ProductsStyles";
import { useContext } from "react";
import { CartContext } from "../../components/Cart/CartContext";

function Products() {
  const { handleAddToCart } = useContext(CartContext);

  return (
    <>
      <Title>Nuestros Productos</Title>
      <ProductContainer>
        {productList?.map((product) => (
          <Card key={product.id}>
            <img src={product.src} alt={product.name} />
            <h2>{product.name}</h2>
            <span>{product.year}</span>
            <LinkItem to={`/products/${product.name}`}>Ver mas</LinkItem>
            <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
          </Card>
        ))}
      </ProductContainer>
    </>
  );
}

export default Products;
