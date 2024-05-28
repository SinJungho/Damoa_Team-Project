import ReactDOM from "react-dom/client";
import router from "./screens/Router";
import { RouterProvider } from "react-router-dom";
import Community from "./screens/routes/CommunityPage/Commnuity";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
// root.render(<Community></Community>);
