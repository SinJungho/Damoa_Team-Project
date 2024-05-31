import { createBrowserRouter } from 'react-router-dom';

import Root from '../Root';
import Review from '../pages/ReviewPage';
import Home from '../pages/MainPage';
import Notice from '../pages/NoticePage';
import UpcomingPage from '../pages/Upcoming';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    path: '/notice',
                    element: <Notice />,
                },
                {
                    path: '',
                    element: <Home />,
                },
                {
                    path: '/review',
                    element: <Review />,
                },
                {
                    path: '/upcoming',
                    element: <UpcomingPage />,
                },
            ],
        },
    ],
    {
        basename: `${process.env.PUBLIC_URL}`,
    }
);

export default router;
