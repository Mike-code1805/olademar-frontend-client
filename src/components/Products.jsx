import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ name, cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProductsTitle, setFilteredProductsTitle] = useState([]);
  const [productsTitle, setProductsTitle] = useState();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    const getProductsTitle = async () => {
      try {
        const res = await axios.get(
          name && cat
            ? `http://localhost:5000/api/products?name=${name}&category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProductsTitle(res.data);
        console.log(res);
      } catch (err) {}
    };
    getProductsTitle();
  }, [name, cat]);

  

  useEffect(() => {
    name &&
      setFilteredProductsTitle(
        productsTitle.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [productsTitle, name, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProductsTitle((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProductsTitle((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProductsTitle((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {name 
        ? filteredProductsTitle.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;