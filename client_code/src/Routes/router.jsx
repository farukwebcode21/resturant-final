import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import OurMenu from "../Pages/OurMenu/OurMenu/OurMenu";
import Order from "../Pages/Order/Order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: "contactus", element: <ContactUs /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "ourmenu", element: <OurMenu /> },
      { path: "order", element: <Order /> },
    ],
  },
]);

export default router;
