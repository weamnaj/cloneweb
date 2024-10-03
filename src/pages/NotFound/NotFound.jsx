import React, { useEffect } from "react";
import "./NotFound.css";
import { Container, Carousel, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ui/card";

export default function NotFound() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log("====================================");
        console.log(response.data.products);
        console.log("====================================");
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error.message);
      });
  }, []);

  const groupedProducts = (groupSize) => {
    const result = [];
    for (let i = 0; i < products.length; i += groupSize) {
      result.push(products.slice(i, i + groupSize));
    }
    return result;
  };
  return (
    <section className="not-found text-center">
      <Container className="">
        <h5>عذراً، لم يتم العثور على الصفحة التي تبحث عنها.</h5>
        <h3 className="mb-4 mt-3">
          لكن لدينا الكثير من المنتجات المختارة بعناية والتي ستعشقونها.
        </h3>
        <Carousel className="p-5">
          {groupedProducts(4).map((productGroup, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center">
                {productGroup.map((product) => (
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    imageUrl={product.thumbnail}
                    link={product.link}
                  />
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
