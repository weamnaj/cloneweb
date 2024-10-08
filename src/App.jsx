// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { RouterProvider } from "react-router-dom";
// import { routes } from "./routersConfi";

// export default function App() {
//   return (
//     <>

// <RouterProvider router={routes} />

//     </>
//   );
// }
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { RouterProvider } from "react-router-dom";
import { routes } from "./routersConfi";


const App = () => {
  return (
    <Provider store={store}>
      <div>
     <RouterProvider router={routes} />

      </div>
    </Provider>
  );
};

export default App;
