import React, { FC } from 'react';
import styles from './GlobalMapLocation.module.css';

interface GlobalMapLocationProps {}

const GlobalMapLocation: FC<GlobalMapLocationProps> = () => (
    <div className={styles.GlobalMapLocation}>
        <canvas/>
    </div>
);

export default GlobalMapLocation;
