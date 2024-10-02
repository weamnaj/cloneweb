import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/shared/footer/footer";
import NotFound from "./pages/NotFound/NotFound";
import HomePage from "./pages/Home/homePage";
export default function App() {
  return (
    <>
      <NotFound />
      <Footer />
    </>
  );
}
