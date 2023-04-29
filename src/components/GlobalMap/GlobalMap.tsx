import React, {FC} from 'react';
import styles from './GlobalMap.module.css';
import globalMap from '../../assets/global_map.png'
import GlobalMapLocation from "../GlobalMapLocation/GlobalMapLocation";
import {regions} from "../../data/regions";

interface GlobalMapProps {}

const GlobalMap: FC<GlobalMapProps> = () => (
    <div className={styles.GlobalMap}>
        <div className={styles.PerspectiveContainer}>
            <img src={globalMap} alt="Map" className={styles.mapImage}/>
            <GlobalMapLocation region={regions[0]}/>
        </div>
    </div>
);

export default GlobalMap;
