import React, { useEffect, useRef } from "react";
import "./Progress.css";

export default function Progress({ percent }) {
    const ref = useRef();
    useEffect(() => {
        const circle = ref.current;
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    });
    return (
        <div>
            <span className="score-span">Your score = {percent}%</span>
            <div className="ring-div">
                <svg className="progress-ring" width="60" height="60">
                    <circle
                        className="progress-ring__circle"
                        stroke="white"
                        strokeWidth="4"
                        fill="#790252"
                        r="20"
                        cx="30"
                        cy="30"
                        ref={ref}
                    />
                </svg>
            </div>
        </div>
    );
}
