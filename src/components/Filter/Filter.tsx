import { FC, useState } from 'react';
import styles from './Filter.module.scss';
import { setStorage } from '../../redux/slices/filter/storageSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setRegion } from '../../redux/slices/filter/regionSlice';
import { setData } from '../../redux/slices/data/dataSlice';
import { importData } from '../../data/importData';
import BlueButton from '../UI/BlueButton/BlueButton';

const Filter: FC = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((data) => data.data);
    const [activeRegion, setActiveRegion] = useState<string>('Все');
    const [activeStorage, setActiveStorage] = useState<string>('Все');

    const handleChangeStorage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setActiveStorage(event.target.value);
    };
    const handleChangeRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setActiveRegion(event.target.value);
    };

    const handleImportData = () => {
        dispatch(setData({ value: importData }));
        dispatch(setStorage({ value: activeStorage }));
        dispatch(setRegion({ value: activeRegion }));
        console.log(data);
    };

    return (
        <div className={styles.filter}>
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
                <label htmlFor="storage-select">Выберите регион:</label>
                <select id="storage-select" onChange={handleChangeRegion}>
                    <option value="Все">Все</option>
                    <option value="Омск">Омск</option>
                    <option value="Санкт-Петербург">Санкт-Петербург</option>
                </select>
            </div>
            <BlueButton onClick={handleImportData}>Импортировать</BlueButton>
        </div>
    );
};

export default Filter;
