import ReactDOM from "react-dom/client";
import router from "./utils/Router";
import LoginForm from "./component/LoginForm";
import { RouterProvider } from "react-router-dom";
// import Community from "./screens/routes/CommunityPage/Commnuity";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={router} />);
root.render(<LoginForm />);
