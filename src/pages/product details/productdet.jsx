

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Accordion,InputGroup,FormControl } from "react-bootstrap";
import axios from "axios";
import './Productdet.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Review from "../review/review";
import { Toast, ToastContainer } from 'react-bootstrap';

const Productdet = () => {
  const [products, setProducts] = useState([]);
  const desiredProductId = 1; // Replace with the desired product ID

  // Fetch products from API
  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container className="my-4">
      <Row>
        {/* Map through products array */}
        {products.length > 0 &&
          products
            .filter((product) => product.id === desiredProductId)
            .map((product) => (
              <Col key={product.id} sm={12} className="mb-4">
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
                      <Col>
                    
                 
                </Col>
                <Col />
                                      <p className="text-muted">
                          {product.description.substring(0, 300)}
                        </p>
                    </Col>

                    {/* Right Column for Details */}
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title className="fs-6">{product.title}</Card.Title>
                        <Card.Text>
                          <p>EGP {product.price}</p>
                          <p> القطع المتبقيه :{product.stock}</p>
                        </Card.Text>
                        {/* <p className="text-muted">
                          {product.description.substring(0, 100)}...
                        </p> */}
                        <div className="action-buttons my-3">
                          <Button variant="dark" className="add-to-basket-btn mb-2">
                            <i className="bi bi-bag"></i>اضف الى الحقيبه

                          </Button>
                          <br />
                          <Button variant="light" className="add-to-favourites-btn mb-2">
                            <i className="bi bi-heart"></i>اضف الى المنتجات المفضله
                          </Button>
                        </div>
  {/* Write a review */}
  <p className="mt-3">
                  <a href="/review.jsx" >اكتب تعليق</a>
                  
                  {/* <Review productId={product.id}/> */}

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
                                <p>سيتم توصيل طلبك خلال1-7 أيام</p>

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
        <FormControl placeholder="أدخل المنطقة" />        <Button variant="dark">البحث عن المحلات</Button>

      </InputGroup>                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Card.Body>
                    </Col>
                    {/* for (let index = 0; index < product.reviews.length; index++) {
                      const element = array[index];
                      
                    } */}
                    {/* <Col>
                      {product.reviews.map((review) => (
                        <div key={review.id}>
                          <h5>{review.title}</h5>
                          <p>{review.description}</p>
                          <p>name:{review.reviewerName}</p>
                          <p>comment :{review.comment}</p>
                          <p>Reviewed on {review.date}</p>

                          <p>Rating: {review.rating}</p>
                          <p>Posted by {review.author} on {review.date}</p>
                        </div>
                      ))}
                    </Col> */}
                   

                  </Row>
                {/* <ProductReviews productId={product.id} />                     */}
            
<Row><Col>  <p>تقييمات</p> <ToastContainer  className="p-3 toast-style">
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
                  </ToastContainer></Col></Row>
                </Card>
              </Col>
            ))}
      </Row>
    </Container>
  );
};

export default Productdet;
