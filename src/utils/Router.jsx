import { createBrowserRouter } from "react-router-dom";

import Root from "../Root";
import Review from "../pages/ReviewPage/Review";
import Home from "../pages/MainPage";
import Community from "../pages/CommunityPage/Community";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/review",
          element: <Review />,
        },
        {
          path: "/community",
          element: <Community />,
        },
      ],
    },
  ],
  {
    basename: `${process.env.PUBLIC_URL}`,
  }
);

export default router;
