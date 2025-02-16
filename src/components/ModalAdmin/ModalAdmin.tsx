import { FC, useEffect, useState } from 'react';
import styles from './ModalAdmin.module.scss';
import IDataImport from '../../models/IDataImport';
import { useAppDispatch } from '../../redux/hooks';
import { clearActiveModal } from '../../redux/slices/activeModalSlice';
import BlueButton from '../UI/BlueButton/BlueButton';
import { updateDataRequestStatus } from '../../redux/slices/data/dataRequests';

interface ModalAdminProps {
    dataObject: IDataImport;
}

const ModalAdmin: FC<ModalAdminProps> = ({ dataObject }) => {
    const dispatch = useAppDispatch();
    const dataObjectCopy = { ...dataObject };

    const [activeEventId] = useState<string>(dataObjectCopy.id);
    const [activeEventName] = useState<string>(dataObjectCopy.nameEvent);
    const [currentNote, setCurrentNote] = useState<string>('');
    const [activeDate, setActiveDate] = useState<string>('');

    const onChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentNote(event.target.value);
    };

    const onAllowClick = () => {
        dispatch(updateDataRequestStatus({ code: dataObject.code, status: 'Одобрен' }));
        dispatch(clearActiveModal());
    };

    const onRefuseClick = () => {
        dispatch(updateDataRequestStatus({ code: dataObject.code, status: 'Отказан' }));
        dispatch(clearActiveModal());
    };
    useEffect(() => {
        setCurrentNote(dataObjectCopy.note || '');
        setActiveDate(dataObjectCopy.revisionDate);
    }, [dataObjectCopy.note, dataObjectCopy.revisionDate]);
    return (
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                <h2>{dataObjectCopy.nameObject}</h2>
                <form action="">
                    <div className={styles.info}>
                        <div className={styles.subsidiaryCompany}>
                            <h3>Дочернее общество:</h3>
                            <span>{dataObjectCopy.subsidiaryCompany}</span>
                        </div>
                        <div className={styles.number}>
                            <h3>Инвентарный номер:</h3>
                            <span>{dataObjectCopy.invertNumber}</span>
                        </div>
                        <div className={styles.code}>
                            <h3>Код объекта:</h3>
                            <span>{dataObjectCopy.code}</span>
                        </div>
                    </div>
                    <div className={styles.field}>
                        <h3>Дата ревизии:</h3>
                        <span>{activeDate}</span>
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="event-id">
                            <h3>ID мероприятия:</h3>
                            <span>{activeEventId}</span>
                        </label>
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="event-name">
                            <h3>Наименование мероприятия:</h3>
                            <span>{activeEventName}</span>
                        </label>
                    </div>
                    <div className={styles.note}>
                        <h3>Примечание:</h3>
                        <textarea
                            readOnly
                            title={currentNote}
                            onChange={onChangeInput}
                            value={currentNote}
                            rows={4}
                            cols={50}
                        />
                    </div>
                </form>
                <div className={styles.button}>
                    <BlueButton onClick={onAllowClick}>Разрешить</BlueButton>
                    <BlueButton onClick={onRefuseClick}>Отказать</BlueButton>
                </div>
            </div>
        </div>
    );
};

export default ModalAdmin;
