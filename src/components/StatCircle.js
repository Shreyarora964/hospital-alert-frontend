import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const StatCircle = ({ value, max, label, color, textColor }) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="flex flex-col items-center w-[80px]">
      <div className="w-[60px] h-[60px]">
        <CircularProgressbar
          value={percentage}
          text={value.toString()}
          strokeWidth={12}
          styles={buildStyles({
            pathColor: color,
            textColor: textColor || color,
            trailColor: "#f1f1f1",
            textSize: '28px',
          })}
        />
      </div>
      <span className="text-xs mt-1 text-center text-gray-700 font-medium">{label}</span>
    </div>
  );
};

export default StatCircle;
