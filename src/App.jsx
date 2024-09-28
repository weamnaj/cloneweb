import "./App.css";
import Footer from "./components/shared/footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./pages/AboutUs/AboutUs";
// import LightingPage from "./pages/LightingPage/LightingPage";
// import WeeklyGiftCardsPage from "./pages/WeeklyGiftCardsPage/WeeklyGiftCardsPage";
// import PurchaseTerms from "./pages/PurchaseTerms/PurchaseTerms";

function App() {
  return (
    <>
      <AboutUs />
      {/* <LightingPage /> */}
      {/* <PurchaseTerms /> */}
      {/* <WeeklyGiftCardsPage/> */}
      <Footer />
    </>
  );
}

export default App;
