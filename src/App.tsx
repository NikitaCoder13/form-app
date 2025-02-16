import React, { FC } from 'react';
import './styles/scss/main.scss';
import Header from './components/Header/Header';
import UserRoutes from './routes/UserRoutes';
import { useAppSelector } from './redux/hooks';
import LoginPage from './pages/LoginPage';
import AdminRoutes from './routes/AdminRoutes';

const App: FC = () => {
    const role = useAppSelector((state) => state.auth.role);
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    return (
        <>
            <Header />
            {isAuth && role === 'user' && <UserRoutes />}
            {isAuth && role === 'admin' && <AdminRoutes />}
            {role === '' && <LoginPage />}
        </>
    );
};

export default App;
