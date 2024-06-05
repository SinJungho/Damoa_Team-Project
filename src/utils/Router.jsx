import { createBrowserRouter } from 'react-router-dom';

import Root from '../Root';
import Review from '../pages/ReviewPage';
import Home from '../pages/MainPage';
import Notice from '../pages/NoticePage';
import UpcomingPage from '../pages/UpcomingPage';
import CommunityPage from '../pages/CommunityPage';
import Board from '../component/Board';
import WritePage from '../component/WritingPage'; // 이름 변경 WritingPage -> WritePage
import PostDetail from '../component/PostDetail';
import ErrorPage from '../component/ErrorPage';
import WritingPageReview from '../component/WritingPageReview';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '',
                    element: <Home />,
                },
                {
                    path: 'notice',
                    element: <Notice />,
                },
                {
                    path: 'review',
                    element: <Review />,
                    children: [
                        {
                            path: 'writing',
                            element: <WritingPageReview />,
                        },
                    ],
                },
                {
                    path: 'upcoming',
                    element: <UpcomingPage />,
                },
                {
                    path: 'community',
                    element: <CommunityPage />,
                    children: [
                        {
                            path: '',
                            element: <Board />,
                        },
                        {
                            path: 'writing',
                            element: <WritePage />,
                        },
                        {
                            path: 'post',
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
