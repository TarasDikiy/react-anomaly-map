import React, {FC, useEffect, useRef} from 'react';
import styles from './GlobalMapLocation.module.css';
import {IRegion} from "../../models/IRegion";

interface GlobalMapLocationProps {
    region: IRegion
}

const GlobalMapLocation: FC<GlobalMapLocationProps> = function ({region}: GlobalMapLocationProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if(canvasRef.current) drawPolygon(canvasRef.current);
    }, [])

    function drawPolygon(_canvas: HTMLCanvasElement){
        let ctx = _canvas.getContext('2d');
        if (!ctx) return;
        //Кординати
        ctx.beginPath();
        ctx.moveTo(15, 10);
        ctx.lineTo(0,70);
        ctx.lineTo(0,90);
        ctx.lineTo(0,130);
        ctx.lineTo(50,150);
        ctx.lineTo(100,140);
        ctx.lineTo(150,140);
        ctx.lineTo(200,130);
        ctx.lineTo(280,140);
        ctx.lineTo(280,130);
        ctx.lineTo(270,100);
        ctx.lineTo(280,80);
        ctx.lineTo(290,10);
        ctx.lineTo(140,0);
        ctx.lineTo(90,5);
        ctx.closePath();
        //Стилі
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#007929";
        ctx.stroke();
        ctx.fillStyle = '#238c4754';
        ctx.fill();
    }

    //Обробка hover на фігуру canvas-а
    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        e.preventDefault();
        e.stopPropagation();


    }

    return (
        <div className={styles.GlobalMapLocation} style={{left: region.x, top: region.y, width: region.width, height: region.height}}>
            <canvas ref={canvasRef} onMouseMove={handleMouseMove}/>
        </div>
    )
};

export default GlobalMapLocation;