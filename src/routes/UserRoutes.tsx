import { useRoutes } from 'react-router-dom';
import ImportPage from '../pages/ImportPage';

const UserRoutes = () => {
    return useRoutes([
        {
            path: '/',
            element: <ImportPage />,
        },
    ]);
};

export default UserRoutes;
