import HeaderMenu from "./component/layout/header/headerMenu";
import Header from "./component/layout/header/headerMain";
import RegisterPage from "../register";
import "./App.css";
// import LoginPage from "../login";
import StoreSearch from "../locationMain";
// import Favorites from "../Empty-fav";
// import HeaderMenu from "./headerMenu";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {

  return (
    <>  
        <Header/>
        <HeaderMenu/>
        {/* <LoginPage/>  */}

      {/* <RegisterPage/>  */}
      {/* <Favorites/> */}
<StoreSearch/>
    </>
  );
}

export default App;
