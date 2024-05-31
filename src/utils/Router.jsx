import { createBrowserRouter } from 'react-router-dom';

import Root from '../Root';
import Review from '../pages/ReviewPage';
import Home from '../pages/MainPage';
import Notice from '../pages/NoticePage';
import UpcomingPage from '../pages/Upcoming';
import CommunityPage from '../pages/CommunityPage';
import Board from '../component/Board'; // Board 컴포넌트를 직접 추가
import WritingPage from '../component/WritingPage';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root />,
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
                            element: <Board />, // 기본 경로에서 Board 컴포넌트를 렌더링
                        },
                        {
                            path: 'writing',
                            element: <WritingPage />,
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
