import ReactDOM from "react-dom/client";
import router from "./utils/Router";
import { RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
// import Community from "./screens/routes/CommunityPage/Commnuity";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
// root.render(<LoginPage />);
