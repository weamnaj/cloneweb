
// import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
// import { FaFacebook, FaGoogle } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Register.css"; // Import your custom CSS file
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import { loginUser } from "../../store/slices/userSlice"; // Import the loginUser action

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Local state for form inputs
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null); // State to hold login errors

//   // Accessing the Redux state to check login status
//   const { loggedInUser, users } = useSelector((state) => state.user);

//   // Handle input changes
//   const handleEmailChange = (e) => setEmail(e.target.value);
//   const handlePasswordChange = (e) => setPassword(e.target.value);

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if user exists in the Redux store
//     const foundUser = users.find(
//       (user) => user.email === email && user.password === password
//     );

//     if (foundUser) {
//       // If user exists, dispatch the login action and reset any error
//       dispatch(loginUser({ email, password }));
//       setError(null); // Clear any previous errors
//     } else {
//       // If user does not exist, show error message
//       setError("Invalid email or password. Please try again.");
//     }
//   };

//   // If the user is logged in, display their name and a button to navigate home
//   if (loggedInUser) {
//     return (
//       <div className="text-center">
//         <h4>Hello, {loggedInUser.name}!</h4>
//         <Button onClick={() => navigate("/")}>Go to Home</Button>
//       </div>
//     );
//   }

//   return (
//     <section className="loginPage">
//       <div className="mb-4">
//         <h4 className="text-right">
//           <strong>تسجيل دخول</strong>
//         </h4>
//         <Container fluid className="d-flex ">
//           <Row className="w-100 row-style justify-content-center">
//             <Col md={6} className="left-div">
//               <p>
//                 <strong>تسجيل الدخول عن طريق البريد الالكتروني</strong>
//               </p>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group controlId="formBasicEmail">
//                   <Form.Control
//                     type="email"
//                     placeholder="أدخل البريد الإلكتروني"
//                     className="border-top-only form-control shadow-none"
//                     value={email}
//                     onChange={handleEmailChange}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="formBasicPassword">
//                   <Form.Control
//                     type="password"
//                     placeholder="كلمة المرور"
//                     className="border-top-only form-control shadow-none"
//                     value={password}
//                     onChange={handlePasswordChange}
//                     required
//                   />
//                 </Form.Group>
//                 <br />
//                 {/* Display error message if credentials are invalid */}
//                 {error && (
//                   <Alert variant="danger">
//                     {error}
//                   </Alert>
//                 )}
//                 <Button
//                   variant="primary"
//                   type="submit"
//                   className="btn_style social-media-buttons border-0"
//                 >
//                   تسجيل الدخول
//                 </Button>
//                 <a onClick={() => navigate(`/forgetpassword`)}>
//                   هل نسيت كلمه السر؟
//                 </a>
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
//                   onClick={() =>
//                     window.open("https://accounts.google.com", "_blank")
//                   }
//                 >
//                   <FaGoogle size={20} className="me-2" />
//                   سجل الدخول عن طريق جوجل
//                 </Button>
//                 <p>ليس لديك حساب؟</p>
//                 <Button
//                   variant="outline-dark"
//                   className="mb-2 social-media-buttons"
//                   onClick={() => navigate(`/register`)}
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

// export default LoginPage;
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css"; // Import your custom CSS file
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { loginUser, logoutUser } from "../../store/slices/userSlice"; // Import the login and logout actions

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Local state for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State to hold login errors

  // Accessing the Redux state to check login status
  const { loggedInUser, users } = useSelector((state) => state.user);

  // Handle input changes
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if user exists in the Redux store
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      // If user exists, dispatch the login action and reset any error
      dispatch(loginUser({ email, password }));
      setError(null); // Clear any previous errors
    } else {
      // If user does not exist, show error message
      setError("Invalid email or password. Please try again.");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login"); // Redirect back to login page
  };

  // If the user is logged in, display their name and a button to logout
  if (loggedInUser) {
    return (
      <div className="text-center">
        <h4>Hello, {loggedInUser.name}!</h4>
        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    );
  }

  return (
    <section className="loginPage">
      <div className="mb-4">
        <h4 className="text-right">
          <strong>تسجيل دخول</strong>
        </h4>
        <Container fluid className="d-flex ">
          <Row className="w-100 row-style justify-content-center">
            <Col md={6} className="left-div">
              <p>
                <strong>تسجيل الدخول عن طريق البريد الالكتروني</strong>
              </p>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="أدخل البريد الإلكتروني"
                    className="border-top-only form-control shadow-none"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="كلمة المرور"
                    className="border-top-only form-control shadow-none"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </Form.Group>
                <br />
                {/* Display error message if credentials are invalid */}
                {error && (
                  <Alert variant="danger">
                    {error}
                  </Alert>
                )}
                <Button
                  variant="primary"
                  type="submit"
                  className="btn_style social-media-buttons border-0"
                >
                  تسجيل الدخول
                </Button>
                <a onClick={() => navigate(`/forgetpassword`)}>
                  هل نسيت كلمه السر؟
                </a>
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
                <p>ليس لديك حساب؟</p>
                <Button
                  variant="outline-dark"
                  className="mb-2 social-media-buttons"
                  onClick={() => navigate(`/register`)}
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

export default LoginPage;
