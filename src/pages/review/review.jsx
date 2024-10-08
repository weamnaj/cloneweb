    // import React from "react";
    // import { Form, Button } from "react-bootstrap";

    // const Review = ({ productId }) => {
    //   const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Handle form submission logic here
    //     // Save the review data to the database or perform any other necessary actions
    //   };
    
    //   return (
    //     <Form onSubmit={handleSubmit}>
    //       <Form.Group>
    //         <Form.Label>Review Title</Form.Label>
    //         <Form.Control type="text" placeholder="Enter a title for your review" />
    //       </Form.Group>
    //       <Form.Group>
    //         <Form.Label>Review Description</Form.Label>
    //         <Form.Control as="textarea" rows={3} placeholder="Write your review here" />
    //       </Form.Group>
    //       <Button type="submit">Submit Review</Button>
    //     </Form>
    //   );
    // };
    
    // export default Review;  
    import React from 'react';
import { Container, Row, Col, Form, Button, Accordion } from 'react-bootstrap';
// import { MdReviews } from 'react-icons/md';

const Review = () => {
  return (
    <Container className="my-4">
         <Row>
        <Col>
          <h5> التقييم</h5>
          <hr />
          <Form >
          <Form.Group>
            <Form.Label>عنوان التقييم</Form.Label>
             <Form.Control type="text" placeholder="عنوان التقييم" />
           </Form.Group>
           <Form.Group>
          <Form.Label>تقييم المنتج</Form.Label>
           <Form.Control as="textarea" rows={3} placeholder="تقييم المنتج" />
           <br />
         </Form.Group>
          </Form>
        </Col>
      </Row>
      {/* User Information Section */}
      <Row>
        <Col>
          <h5>معلومات المستخدم الأساسية</h5>
          <hr />
          <Form>
        
            <Form.Group as={Row} controlId="formUserName">
              <Form.Label column sm={3}>اسم المستخدم *</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="أدخل الاسم" />
                <br />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formEmail">
              <Form.Label column sm={3}>البريد الإلكتروني *</Form.Label>
              <Col sm={9}>
                <Form.Control type="email" placeholder="أدخل البريد الإلكتروني" />
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>

      {/* Product Section */}
      <Row className="mt-4">
        <Col>
          <h5>المنتج</h5>
          <hr />
          {/* Sliders */}
          <Form.Group as={Row}>
            <Form.Label column sm={3}>مقاس فعلي:</Form.Label>
            <Col sm={9}>
              <Form.Range />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>الطول:</Form.Label>
            <Col sm={9}>
              <Form.Range />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>العرض:</Form.Label>
            <Col sm={9}>
              <Form.Range />
            </Col>
          </Form.Group>
        </Col>
      </Row>

      {/* User Preferences Section */}
      <Row className="mt-4">
        <Col>
          <h5>المستخدم</h5>
          <hr />
          <Form.Group as={Row} controlId="formHeight">
            <Form.Label column sm={3}>الطول</Form.Label>
            <Col sm={9}>
              <Form.Select>
                <option>اختر...</option>
                <option>قصير</option>
                <option>متوسط</option>
                <option>طويل</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formSkinType">
            <Form.Label column sm={3}>نوع البشرة</Form.Label>
            <Col sm={9}>
              <Form.Select>
                <option>اختر...</option>
                <option>دهنية</option>
                <option>جافة</option>
                <option>مختلطة</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formSkinTone">
            <Form.Label column sm={3}>درجة لون البشرة</Form.Label>
            <Col sm={9}>
              <Form.Select>
                <option>اختر...</option>
                <option>فاتح</option>
                <option>متوسط</option>
                <option>غامق</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Col>
      </Row>

      {/* Submit Button Section */}
      <Row className="mt-4">
        <Col>
          <Button variant="dark" type="submit" className="me-2">نشر التقييم</Button>
          <Button variant="outline-dark">إلغاء</Button>
        </Col>
      </Row>

      {/* Terms and Conditions Section */}
      <Row className="mt-4">
        <Col>
          <p>
            <a href="#">الشروط والأحكام | إرشادات المراجعة</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Review;
