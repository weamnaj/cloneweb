import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/shared/footer/footer";
import AllProducts from "./pages/AllProducts/AllProducts";

export default function App() {
  return (
    <>
      <AllProducts></AllProducts>
      <Footer />
    </>
  );
}
