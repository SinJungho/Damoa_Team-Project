import React from 'react';
import styles from '../css/Sort.module.css';
import { ReactComponent as SortIcon } from '../svg/SortIcon.svg';

export default function Sort() {
    const handleSortOptionClick = (option) => {
        if (option === '1') {
            localStorage.removeItem('selectedSortOption');
        } else {
            localStorage.setItem('selectedSortOption', option);
        }
        window.location.reload();
    };

    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <div className={styles.filterContainer}>
                    <SortIcon className={styles.icon} />
                    <p className={styles.filterLabel}>정렬</p>
                </div>
                <div className={styles.buttonGroup}>
                    <button className={styles.button} onClick={() => handleSortOptionClick('1')}>
                        최신순
                    </button>
                    <button className={styles.button} onClick={() => handleSortOptionClick('2')}>
                        오래된순
                    </button>
                    <button className={styles.button} onClick={() => handleSortOptionClick('3')}>
                        별점 높은순
                    </button>
                    <button className={styles.button} onClick={() => handleSortOptionClick('4')}>
                        별점 낮은순
                    </button>
                </div>
            </div>
        </div>
    );
}
