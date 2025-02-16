import { FC } from 'react';
import styles from './ImportData.module.scss';
import ImportDataList from '../ImportDataList/ImportDataList';
import Filter from '../Filter/Filter';

const ImportData: FC = () => {
    return (
        <section className={styles.section}>
            <h1>Импорт данных</h1>
            <div className={styles.import}>
                <ImportDataList />
                <Filter />
            </div>
        </section>
    );
};

export default ImportData;
