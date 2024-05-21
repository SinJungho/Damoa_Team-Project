import { createBrowserRouter } from 'react-router-dom';
import Home from './routes/MainPage/Home';
import Root from './Root';
import Review from './routes/ReviewPage/Review';

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
