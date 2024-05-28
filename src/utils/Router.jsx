import { createBrowserRouter } from 'react-router-dom';

import Root from '../Root';
import Review from '../pages/ReviewPage/Review';
import Home from '../pages/MainPage';

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
                    path: '/review',
                    element: <Review />,
                },
            ],
        },
    ],
    {
        basename: `${process.env.PUBLIC_URL}`,
    }
);

export default router;
