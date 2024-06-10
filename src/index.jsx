import ReactDOM from "react-dom/client";
import router from "./utils/Router";
import style from "../src/css/Root.module.css";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
