import React, {FC} from 'react';
import styles from './GlobalMap.module.css';
import globalMap from '../../assets/global_map.png'
import GlobalMapLocation from "../GlobalMapLocation/GlobalMapLocation";

interface GlobalMapProps {}

const GlobalMap: FC<GlobalMapProps> = () => (
    <div className={styles.GlobalMap}>
        <div className={styles.PerspectiveContainer}>
            <img src={globalMap} alt="Map" className={styles.mapImage}/>
            <GlobalMapLocation/>
        </div>
    </div>
);

export default GlobalMap;
