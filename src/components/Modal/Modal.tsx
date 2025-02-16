import { FC, useEffect, useState } from 'react';
import styles from './Modal.module.scss';
import IDataImport from '../../models/IDataImport';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { clearActiveModal } from '../../redux/slices/activeModalSlice';
import BlueButton from '../UI/BlueButton/BlueButton';
import { setData } from '../../redux/slices/data/dataSlice';

const Modal: FC<IDataImport> = (dataObject) => {
    const eventIds = ['01', '02', '03', '04'];
    const eventNames = [
        'Нанесение инвентарных номеров',
        'Ликвидация',
        'Техническое обслуживание',
        'Ремонт оборудования',
        'Замена оборудования',
        'Проверка безопасности',
    ];
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.data.value);
    const dataObjectCopy = { ...dataObject };

    const [activeEventId, setActiveEventId] = useState<string>(dataObjectCopy.id);
    const [activeEventName, setActiveEventName] = useState<string>(dataObjectCopy.nameEvent);
    const [currentNote, setCurrentNote] = useState<string>('');

    const onChangeEventName = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setActiveEventName(event.target.value);
    };

    const onChangeEventId = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setActiveEventId(event.target.value);
    };

    const onChangeData = () => {
        const dataIndex = data.findIndex((dataEl) => dataEl.code === dataObject.code);
        const dataCopy = [...data];

        dataObjectCopy.id = activeEventId;
        dataObjectCopy.nameEvent = activeEventName;
        dataObjectCopy.note = currentNote;

        dataCopy[dataIndex] = dataObjectCopy;
        dispatch(setData({ value: dataCopy }));
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentNote(event.target.value);
    };

    const handleClickClose = () => {
        dispatch(clearActiveModal());
    };

    useEffect(() => {
        setCurrentNote(dataObjectCopy.note || '');
    }, [dataObjectCopy.note]);
    return (
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                <h2>{dataObjectCopy.nameObject}</h2>
                <form action="">
                    <div className={styles.subsidiaryCompany}>
                        <h3>Дочернее общество:</h3>
                        <span>{dataObjectCopy.subsidiaryCompany}</span>
                    </div>
                    <div className={styles.code}>
                        <h3>Код объекта:</h3>
                        <span>{dataObjectCopy.code}</span>
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="event-id">
                            <h3>ID мероприятия:</h3>
                        </label>
                        <select value={activeEventId} id="event-id" onChange={onChangeEventId}>
                            {eventIds.map((eventIdsEl) => (
                                <option value={eventIdsEl}>{eventIdsEl}</option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="event-name">
                            <h3>Наименование мероприятия</h3>
                        </label>
                        <select
                            value={activeEventName}
                            id="event-name"
                            onChange={onChangeEventName}
                        >
                            {eventNames.map((eventName) => (
                                <option value={eventName}>{eventName}</option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.note}>
                        <h3>Примечание:</h3>
                        <input
                            title={currentNote}
                            onChange={onChangeInput}
                            type="text"
                            value={currentNote}
                        />
                    </div>
                </form>
                <div className={styles.button}>
                    <BlueButton onClick={onChangeData}>Сохранить</BlueButton>
                    <BlueButton onClick={handleClickClose}>Закрыть</BlueButton>
                </div>
            </div>
        </div>
    );
};

export default Modal;
