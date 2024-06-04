import { createBrowserRouter } from "react-router-dom";

import Root from "../Root";
import Review from "../pages/ReviewPage";
import Home from "../pages/MainPage";
import Notice from "../pages/NoticePage";
import UpcomingPage from "../pages/UpcomingPage";
import CommunityPage from "../pages/CommunityPage";
import Board from "../component/Board"; // Board 컴포넌트를 직접 추가
import WritingPage from "../component/WritingPage";
import WritingPageReview from "../component/WritingPageReview";
import PostDetail from "../component/PostDetail"; // PostDetail 컴포넌트 추가
import ErrorPage from "../component/ErrorPage"; // 에러 페이지 컴포넌트 추가

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />, // Root 라우트에 에러 페이지 추가
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "notice",
          element: <Notice />,
        },
        {
          path: "review",
          element: <Review />,
          children: [
            { path: "writingReview", element: <WritingPageReview /> },
            { path: "post/:postId", element: <PostDetail /> },
          ],
        },
        {
          path: "upcoming",
          element: <UpcomingPage />,
        },
        {
          path: "community",
          element: <CommunityPage />,
          children: [
            {
              path: "",
              element: <Board />, // 기본 경로에서 Board 컴포넌트를 렌더링
            },
            {
              path: "writing",
              element: <WritingPage />,
            },
            {
              path: "post/:postId",
              element: <PostDetail />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: `${process.env.PUBLIC_URL}`,
  }
);

export default router;
