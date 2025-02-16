import { FC, useState } from 'react';
import BlueButton from '../UI/BlueButton/BlueButton';
import styles from './Filter.module.scss';

import { setStorage } from '../../redux/slices/filter/storageSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setRegion } from '../../redux/slices/filter/regionSlice';
import { setData } from '../../redux/slices/data/dataSlice';
import { importData } from '../../data/importData';

const Filter: FC = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((data) => data.data.value);

    const [activeRegion, setActiveRegion] = useState<string>('Все');
    const [activeStorage, setActiveStorage] = useState<string>('Все');

    const [isErrorData, setErrorData] = useState<boolean>(false);

    const handleChangeStorage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setActiveStorage(event.target.value);
    };
    const handleChangeRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setActiveRegion(event.target.value);
    };

    const handleImportData = () => {
        dispatch(setData({ value: importData }));
    };
    const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setActiveDate(event.target.value);
        console.log(activeDate);
    };
    const handleFilterData = () => {
        if (data.length === 0) {
            setErrorData(true);
        } else {
            dispatch(setStorage({ value: activeStorage }));
            dispatch(setRegion({ value: activeRegion }));
            setErrorData(false);
        }
    };
    const [activeDate, setActiveDate] = useState<string>('');
    return (
        <div className={styles.filter}>
            <h3>Фильтр</h3>
            <div className={styles.options}>
                <label htmlFor="date-select">Выберите дату:</label>
                <input
                    type="date"
                    id="date-select"
                    value={activeDate}
                    onChange={handleChangeDate}
                />
            </div>
            <div className={styles.options}>
                <label htmlFor="storage-select">Выберите склад:</label>
                <select id="storage-select" onChange={handleChangeStorage}>
                    <option value="Все">Все</option>
                    <option value="A">Склад A</option>
                    <option value="B">Склад B</option>
                    <option value="C">Склад C</option>
                </select>
            </div>
            <div className={styles.options}>
                <label htmlFor="region-select">Выберите регион:</label>
                <select id="region-select" onChange={handleChangeRegion}>
                    <option value="Все">Все</option>
                    <option value="Омск">Омск</option>
                    <option value="Санкт-Петербург">Санкт-Петербург</option>
                </select>
            </div>
            <div className={styles.buttons}>
                <BlueButton onClick={handleFilterData}>Поиск</BlueButton>
                {isErrorData && data.length === 0 ? (
                    <span className={styles.error}>Данных для фильтрации нет</span>
                ) : null}
                <BlueButton onClick={handleImportData}>Импорт</BlueButton>
                <BlueButton onClick={() => console.log('Экспорт')}>Экспорт</BlueButton>
            </div>
        </div>
    );
};

export default Filter;
