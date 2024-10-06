import React, { useState, useEffect } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import axios from "axios";

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/https://dummyjson.com/products${productId}/`);
        setReviews(response.data.reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [productId]);

  return (
    <ToastContainer>
      {reviews.map((review) => (
        <Toast key={review.id} className="my-2">
          <Toast.Header>
            <strong className="me-auto">{review.title}</strong>
            <small>{review.date}</small>
          </Toast.Header>
          <Toast.Body>{review.description}</Toast.Body>
        </Toast>
      ))}
    </ToastContainer>
  );
};

export default ProductReviews;