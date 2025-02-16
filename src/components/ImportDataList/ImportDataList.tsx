import { FC, useEffect, useState } from 'react';
import styles from './ImportDataList.module.scss';
import IDataImport from '../../models/IDataImport';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Modal from '../Modal/Modal';
import { setActiveModal } from '../../redux/slices/activeModalSlice';

const ImportDataList: FC = () => {
    const dispatch = useAppDispatch();

    const storage = useAppSelector((state) => state.storage.value);
    const region = useAppSelector((state) => state.region.value);
    const data = useAppSelector((state) => state.data.value);
    const activeModal = useAppSelector((state) => state.activeModal.value);

    const [filteredData, setFilteredData] = useState<IDataImport[]>(data);

    const handleClickModal = (data: IDataImport) => {
        dispatch(setActiveModal(data));
    };

    useEffect(() => {
        if (storage === 'Все' && region === 'Все') {
            setFilteredData(data);
        } else {
            setFilteredData(
                data.filter(
                    (data) =>
                        (storage === 'Все' || data.storage === storage) &&
                        (region === 'Все' || data.region === region),
                ),
            );
        }
        console.table(data);
    }, [storage, region, data]);

    return (
        <>
            <table className={styles.data}>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Наименование объекта</th>
                        <th>Дочернее общество</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((data, index) => (
                        <tr onClick={() => handleClickModal(data)} key={data.code}>
                            <td className={styles.number}>{index + 1}</td>
                            <td title={data.nameObject}>
                                <span className={styles.text}>{data.nameObject}</span>
                            </td>
                            <td title={data.nameEvent}>
                                <span className={styles.text}>{data.subsidiaryCompany}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {filteredData.map((data) =>
                activeModal?.code === data.code ? <Modal key={data.code} {...data} /> : null,
            )}
        </>
    );
};

export default ImportDataList;
