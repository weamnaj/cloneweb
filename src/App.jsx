

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/layout/header/headerMain";
import HeaderMenu from "./components/layout/header/headerMenu";
import StoreSearch from "./pages/location/locationMain";
// import LoginPage from "./pages/loginpage/login";
// import ForgotPassword from "./pages/loginpage/forgetpassword";
function App() {
  return <>
 <Header/>
 <HeaderMenu/>
 {/* <LoginPage/>
 <ForgotPassword/> */}
 <StoreSearch/>
  </>;
}

export default App;
