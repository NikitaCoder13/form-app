import { useRoutes } from 'react-router-dom';
import AdminPage from '../pages/AdminPage';

const AdminRoutes = () => {
    return useRoutes([
        {
            path: '/',
            element: <AdminPage />,
        },
    ]);
};

export default AdminRoutes;
