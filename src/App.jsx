import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/shared/footer/footer";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
export default function App() {
  return (
    <>
      <PrivacyPolicy></PrivacyPolicy>
      <Footer />
    </>
  );
}
