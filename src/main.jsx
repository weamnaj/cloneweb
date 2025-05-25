import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Honeybadger, HoneybadgerErrorBoundary } from "@honeybadger-io/react"

const config = {
  apiKey: "hbp_5mIizkcYVGWdi4Kepd28JZQLoPqCLl1WuVHP",
  environment: "production"
}

const honeybadger = Honeybadger.configure(config)

ReactDOM.render(<HoneybadgerErrorBoundary honeybadger={honeybadger}><App /></HoneybadgerErrorBoundary>, document.getElementById("root"))
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
