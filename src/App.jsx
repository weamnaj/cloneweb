

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/layout/header/headerMain";
import HeaderMenu from "./components/layout/header/headerMenu";
// import LoginPage from "./pages/loginpage/login";
// import ForgotPassword from "./pages/loginpage/forgetpassword";
// import ProductPage from "../product details/Product_detail";
// import Auth from "../simple authorize form/auth";
import Productdet from "./pages/product details/productdet";
function App() {
  return <>
 <Header/>
 <HeaderMenu/>
 {/* <Auth/> */}
 {/* <ProductPage/> */}
 <Productdet/>
 {/* <LoginPage/>
 <ForgotPassword/> */}
  </>;
}
export default App;
