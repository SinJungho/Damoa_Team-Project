import styles from '../css/Sort.module.css';
import { ReactComponent as SortIcon } from '../svg/SortIcon.svg';

export default function Sort() {
    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <div className={styles.filterContainer}>
                    <SortIcon className={styles.icon} />
                    <p className={styles.filterLabel}>정렬</p>
                </div>
                <div className={styles.buttonGroup}>
                    <div className={styles.button}>조회순</div>
                    <div className={styles.button}>최신순</div>
                </div>
            </div>
        </div>
    );
}
