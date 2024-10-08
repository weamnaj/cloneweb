// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { FaFacebook, FaGoogle } from "react-icons/fa"; // Importing social media icons
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Register.css"; // Import your custom CSS file
// import { useNavigate } from "react-router-dom";

// const RegisterPage = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="registerPage">
//       <div className=" mb-4">
//         <h3 className="text-right">
//           <strong>انشاء حساب جديد</strong>
//         </h3>
//         <Container fluid className="d-flex ">
//           <Row className="w-100 row-style justify-content-center">
//             <Col md={6} className="left-div">
//               <p>
//                 <strong>سجل باستخدام البريد الالكتروني</strong>
//               </p>
//               <Form>
//                 <Form.Group controlId="formName">
//                   <Form.Control
//                     className="border-top-only form-control shadow-none "
//                     type="text"
//                     placeholder="الاسم كامل"
//                     name="name"
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="formBasicEmail">
//                   <Form.Control
//                     type="email"
//                     placeholder="أدخل البريد الإلكتروني"
//                     className="border-top-only form-control shadow-none "
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="formBasicPassword">
//                   <Form.Control
//                     type="password"
//                     placeholder="كلمة المرور"
//                     className="border-top-only form-control shadow-none "
//                     required
//                   />
//                 </Form.Group>
//                 <br />
//                 <p>
//                   <input type="checkbox" id="rememberMe" name="rememberMe" />
//                   ارغب في استلام عروض حصريه من اتش اند ام
//                 </p>
//                 <p>
//                   تسجيل بياناتك يعني موافقتك على .
//                   <a
//                     onClick={() => navigate(`/PrivacyPolicy`)}
//                     style={{ cursor: "pointer" }}
//                   >
//                     الشروط والأحكام و سياسة الخصوصية.
//                   </a>
//                 </p>
//                 <Button
//                   variant="primary"
//                   type="submit"
//                   className="btn_style social-media-buttons border-0"
//                 >
//                   انشاء حساب جديد
//                 </Button>
//               </Form>
//             </Col>

//             <Col md={6} className="right-div">
//               <p>
//                 <strong>او سجل عبر مواقع التواصل الاجتماعي</strong>
//               </p>
//               <div>
//                 <Button
//                   variant="outline-dark"
//                   className="mb-2 social-media-buttons"
//                   // style={{ width: '100%' }}
//                   onClick={() =>
//                     window.open("https://www.facebook.com/HM", "_blank")
//                   }
//                 >
//                   <FaFacebook size={20} className="me-2" />
//                   سجل الدخول عن طريق الفيس بوك
//                 </Button>
//                 <Button
//                   variant="outline-dark"
//                   className="mb-2 social-media-buttons"
//                   // style={{ width: '100%' }}
//                   onClick={() =>
//                     window.open("https://accounts.google.com", "_blank")
//                   }
//                 >
//                   <FaGoogle size={20} className="me-2" />
//                   سجل الدخول عن طريق جوجل
//                 </Button>
//                 <p>هل لديك حساب؟</p>
//                 <Button
//                   variant="outline-dark"
//                   className="mb-2 social-media-buttons "
//                   // style={{ width: '100%'  }}
//                   onClick={() => navigate(`/login`)}
//                 >
//                   سجل هنا
//                 </Button>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </section>
//   );
// };

// export default RegisterPage;
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebook, FaGoogle } from "react-icons/fa"; // Importing social media icons
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css"; // Import your custom CSS file
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
// import { registerUser } from "./store/slices/userSlics"// Import the registerUser action
import { registerUser } from "../../store/slices/userSlice";
const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the registerUser action to save the user in Redux
    dispatch(registerUser(formData));

    // Optionally, navigate to the login page after registration
    navigate("/login");
  };

  return (
    <section className="registerPage">
      <div className=" mb-4">
        <h3 className="text-right">
          <strong>انشاء حساب جديد</strong>
        </h3>
        <Container fluid className="d-flex ">
          <Row className="w-100 row-style justify-content-center">
            <Col md={6} className="left-div">
              <p>
                <strong>سجل باستخدام البريد الالكتروني</strong>
              </p>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Control
                    className="border-top-only form-control shadow-none"
                    type="text"
                    placeholder="الاسم كامل"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="أدخل البريد الإلكتروني"
                    className="border-top-only form-control shadow-none"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="كلمة المرور"
                    className="border-top-only form-control shadow-none"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <br />
                <p>
                  <input type="checkbox" id="rememberMe" name="rememberMe" />
                  ارغب في استلام عروض حصريه من اتش اند ام
                </p>
                <p>
                  تسجيل بياناتك يعني موافقتك على .
                  <a
                    onClick={() => navigate(`/PrivacyPolicy`)}
                    style={{ cursor: "pointer" }}
                  >
                    الشروط والأحكام و سياسة الخصوصية.
                  </a>
                </p>
                <Button
                  variant="primary"
                  type="submit"
                  className="btn_style social-media-buttons border-0"
                >
                  انشاء حساب جديد
                </Button>
              </Form>
            </Col>

            <Col md={6} className="right-div">
              <p>
                <strong>او سجل عبر مواقع التواصل الاجتماعي</strong>
              </p>
              <div>
                <Button
                  variant="outline-dark"
                  className="mb-2 social-media-buttons"
                  onClick={() =>
                    window.open("https://www.facebook.com/HM", "_blank")
                  }
                >
                  <FaFacebook size={20} className="me-2" />
                  سجل الدخول عن طريق الفيس بوك
                </Button>
                <Button
                  variant="outline-dark"
                  className="mb-2 social-media-buttons"
                  onClick={() =>
                    window.open("https://accounts.google.com", "_blank")
                  }
                >
                  <FaGoogle size={20} className="me-2" />
                  سجل الدخول عن طريق جوجل
                </Button>
                <p>هل لديك حساب؟</p>
                <Button
                  variant="outline-dark"
                  className="mb-2 social-media-buttons"
                  onClick={() => navigate(`/login`)}
                >
                  سجل هنا
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default RegisterPage;
