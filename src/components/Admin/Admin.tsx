import { useEffect } from 'react';
import IDataImport from '../../models/IDataImport';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setActiveModal } from '../../redux/slices/activeModalSlice';
import ModalAdmin from '../ModalAdmin/ModalAdmin';
import styles from './Admin.module.scss';

const Admin = () => {
    const dispatch = useAppDispatch();
    const activeModal = useAppSelector((state) => state.activeModal.value);
    const dataRequestss = useAppSelector((state) => state.dataRequests.value);

    const handleClickModal = (data: IDataImport) => {
        dispatch(setActiveModal(data));
    };
    useEffect(() => {
        console.log(dataRequestss);
    }, []);

    return (
        <div className={styles.admin}>
            <h2>Административная панель</h2>
            <div className={styles.info}>
                <div className={styles.count}>Количество запросов: {dataRequestss.length}</div>
            </div>
            <table className={styles.wrapper}>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Наименование объекта</th>
                        <th>Дочернее общество</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    {dataRequestss &&
                        dataRequestss.map((data, index) => (
                            <tr onClick={() => handleClickModal(data)} key={data.code}>
                                <td className={styles.number}>{index + 1}</td>
                                <td title={data.nameObject}>
                                    <span className={styles.text}>{data.nameObject}</span>
                                </td>
                                <td title={data.nameEvent}>
                                    <span className={styles.text}>{data.subsidiaryCompany}</span>
                                </td>
                                <td>{data.status}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            {dataRequestss &&
                dataRequestss.map((data) =>
                    activeModal?.code === data.code ? (
                        <ModalAdmin key={data.code} dataObject={data} />
                    ) : null,
                )}
        </div>
    );
};

export default Admin;
