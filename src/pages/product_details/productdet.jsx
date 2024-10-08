
// import { Container, Row, Col, Card, Button, Accordion, InputGroup, FormControl } from "react-bootstrap";
// import axios from "axios";
// import './Productdet.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import { Toast, ToastContainer } from 'react-bootstrap';
// import { useLoaderData, useParams } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import { useDispatch } from 'react-redux';
// import { addToCart } from  "../../store/slices/cartSlice"; // Import the action
// import { addToFavorites } from "../../store/slices/favoritesSlice"; // Import the action for favorites

// const Productdet = () => {
//   const { id } = useParams(); // Get the ID from the URL parameters
//   const product = useLoaderData(); // Fetch data from the loader
//   const dispatch = useDispatch(); // Use Redux dispatch
//   const handleAddToCart = () => {
//     const item = {
//       id: product.id,
//       title: product.title,
//       price: product.price,
//       thumbnail:product.thumbnail,
//       quantity: 1, // Default quantity
//     };
//     dispatch(addToCart(item)); // Dispatch the addToCart action
//   };
//   // Function to handle adding to favorites
//   const handleAddToFavorites = () => {
//     const favoriteItem = {
//       id: product.id,
//       title: product.title,
//       price: product.price,
//       thumbnail: product.thumbnail,
//     };
//     dispatch(addToFavorites(favoriteItem)); // Dispatch the addToFavorites action
//   };
//   if (!product) {
//     return <p>Error loading product. Please try again later.</p>; // Fallback in case product is null
//   }

//   return (
//     <Container className="my-4">
//       <Row>
//         <Col sm={12} className="mb-4">
//           <Card className="p-0 m-0 border-0">
//             <Row>
//               {/* Left Column for Image */}
//               <Col md={4}>
//                 <a href="">
//                   <Card.Img
//                     style={{ maxWidth: "100%", height: "auto" }}
//                     src={product.thumbnail} // Dynamic product image
//                     alt={product.title}
//                   />
//                 </a>
//                 <p className="text-muted">{product.description.substring(0, 300)}</p>
//               </Col>

//               {/* Right Column for Details */}
//               <Col md={8}>
//                 <Card.Body>
//                   <Card.Title className="fs-6">{product.title}</Card.Title>
//                   <Card.Text>
//                     <p>EGP {product.price}</p>
//                     <p>القطع المتبقيه: {product.stock}</p>
//                   </Card.Text>
//                   <div className="action-buttons my-3">
//                     <Button variant="dark" className="add-to-basket-btn mb-2 "onClick={handleAddToCart}>
//                       <i className="bi bi-bag"></i> اضف الى الحقيبه
//                     </Button>
//                     <br />
//                     <Button variant="light" className="add-to-favourites-btn mb-2"onClick={handleAddToFavorites}>
//                       <i className="bi bi-heart"></i> اضف الى المنتجات المفضله
//                     </Button>
//                   </div>

//                   {/* Write a review */}
//                   <p className="mt-3">
//                     <a href="/review.jsx">اكتب تعليق</a>
//                   </p>

//                   {/* Accordion for Delivery and Collection */}
//                   <Accordion defaultActiveKey="0" flush>
//                     <Accordion.Item eventKey="0">
//                       <Accordion.Header>
//                         <h6>خيارات التوصيل</h6>
//                       </Accordion.Header>
//                       <Accordion.Body>
//                         <div>
//                           التوصيل العادي <br />
//                           <p>سيتم توصيل طلبك خلال 1-7 أيام</p>
//                         </div>
//                         <div>
//                           توصيل في نفس اليوم <br />
//                           <p>يرجى الطلب قبل الساعة 10 صباحًا لاستلام طلبيتك اليوم.</p>
//                         </div>
//                       </Accordion.Body>
//                     </Accordion.Item>
//                     <Accordion.Item eventKey="1">
//                       <Accordion.Header>الاستلام من محلاتنا</Accordion.Header>
//                       <Accordion.Body>
//                         <Row className="mb-3">
//                           <Col className="text-end">
//                             <span>تحقق من توفر الكمية في المحلات</span>
//                           </Col>
//                         </Row>
//                         {/* Input Group with Button */}
//                         <InputGroup>
//                           <FormControl placeholder="أدخل المنطقة" />
//                           <Button variant="dark">البحث عن المحلات</Button>
//                         </InputGroup>
//                       </Accordion.Body>
//                     </Accordion.Item>
//                   </Accordion>
//                 </Card.Body>
//               </Col>
//               <Col>
//                   <p>تقييمات</p>
//                   <ToastContainer className="p-3 toast-style">
//                     {product.reviews.map((review) => (
//                       <Toast key={review.id} bg="light" className="mb-3">
//                         <Toast.Header closeButton={false}>
//                           <strong className="me-auto">{review.title}</strong>
//                           <small>Reviewed on {review.date}</small>
//                         </Toast.Header>
//                         <Toast.Body>
//                           <p>{review.description}</p>
//                           <p><strong>Name:</strong> {review.reviewerName}</p>
//                           <p><strong>Comment:</strong> {review.comment}</p>
//                           <p><strong>Rating:</strong> {review.rating}</p>
//                         </Toast.Body>
//                       </Toast>
//                     ))}
//                   </ToastContainer>
//                 </Col>
              
//             </Row>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Productdet;

// // Define a custom hook to load product data
// export const ProductLoader = async ({ params }) => {
//   const { id } = params; // Get the id from params
//   try {
//     const response = await axios.get(`https://dummyjson.com/products/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching products for product:", error.message);
//     return null;
//   }
// };
import React from "react";
import { Container, Row, Col, Card, Button, Accordion, InputGroup, FormControl } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice"; // Import the action for cart
import { addToFavorites } from "../../store/slices/favoritesSlice"; // Import the action for favorites
import axios from "axios";
import './Productdet.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Toast, ToastContainer } from 'react-bootstrap';

const Productdet = () => {
  const { id } = useParams(); // Get the ID from the URL parameters
  const product = useLoaderData(); // Fetch data from the loader
  const dispatch = useDispatch(); // Use Redux dispatch

  // Function to handle adding to cart
  const handleAddToCart = () => {
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity: 1, // Default quantity
    };
    dispatch(addToCart(item)); // Dispatch the addToCart action
  };

  // Function to handle adding to favorites
  const handleAddToFavorites = () => {
    const favoriteItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
    };
    dispatch(addToFavorites(favoriteItem)); // Dispatch the addToFavorites action
  };

  if (!product) {
    return <p>Error loading product. Please try again later.</p>; // Fallback in case product is null
  }

  return (
    <Container className="my-4">
      <Row>
        <Col sm={12} className="mb-4">
          <Card className="p-0 m-0 border-0">
            <Row>
              {/* Left Column for Image */}
              <Col md={4}>
                <a href="">
                  <Card.Img
                    style={{ maxWidth: "100%", height: "auto" }}
                    src={product.thumbnail} // Dynamic product image
                    alt={product.title}
                  />
                </a>
                <p className="text-muted">{product.description.substring(0, 300)}</p>
              </Col>

              {/* Right Column for Details */}
              <Col md={8}>
                <Card.Body>
                  <Card.Title className="fs-6">{product.title}</Card.Title>
                  <Card.Text>
                    <p>EGP {product.price}</p>
                    <p>القطع المتبقيه: {product.stock}</p>
                  </Card.Text>
                  <div className="action-buttons my-3">
                    <Button variant="dark" className="add-to-basket-btn mb-2 " onClick={handleAddToCart}>
                      <i className="bi bi-bag"></i> اضف الى الحقيبه
                    </Button>
                    <br />
                    <Button variant="light" className="add-to-favourites-btn mb-2" onClick={handleAddToFavorites}>
                      <i className="bi bi-heart"></i> اضف الى المنتجات المفضله
                    </Button>
                  </div>

                  {/* Write a review */}
                  <p className="mt-3">
                    <a href="/review.jsx">اكتب تعليق</a>
                  </p>

                  {/* Accordion for Delivery and Collection */}
                  <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <h6>خيارات التوصيل</h6>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          التوصيل العادي <br />
                          <p>سيتم توصيل طلبك خلال 1-7 أيام</p>
                        </div>
                        <div>
                          توصيل في نفس اليوم <br />
                          <p>يرجى الطلب قبل الساعة 10 صباحًا لاستلام طلبيتك اليوم.</p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>الاستلام من محلاتنا</Accordion.Header>
                      <Accordion.Body>
                        <Row className="mb-3">
                          <Col className="text-end">
                            <span>تحقق من توفر الكمية في المحلات</span>
                          </Col>
                        </Row>
                        {/* Input Group with Button */}
                        <InputGroup>
                          <FormControl placeholder="أدخل المنطقة" />
                          <Button variant="dark">البحث عن المحلات</Button>
                        </InputGroup>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Col>
              <Col>
                <p>تقييمات</p>
                <ToastContainer className="p-3 toast-style">
                  {product.reviews.map((review) => (
                    <Toast key={review.id} bg="light" className="mb-3">
                      <Toast.Header closeButton={false}>
                        <strong className="me-auto">{review.title}</strong>
                        <small>Reviewed on {review.date}</small>
                      </Toast.Header>
                      <Toast.Body>
                        <p>{review.description}</p>
                        <p><strong>Name:</strong> {review.reviewerName}</p>
                        <p><strong>Comment:</strong> {review.comment}</p>
                        <p><strong>Rating:</strong> {review.rating}</p>
                      </Toast.Body>
                    </Toast>
                  ))}
                </ToastContainer>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Productdet;

// Define a custom hook to load product data
export const ProductLoader = async ({ params }) => {
  const { id } = params; // Get the id from params
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products for product:", error.message);
    return null;
  }
};
