import React, { FC } from 'react';
import './styles/scss/main.scss';
import Header from './components/Header/Header';
import ImportPage from './pages/ImportPage';

const App: FC = () => {
    return (
        <>
            <Header />
            <ImportPage />
        </>
    );
};

export default App;
