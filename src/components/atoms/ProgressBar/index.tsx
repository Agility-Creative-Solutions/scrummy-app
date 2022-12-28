import cx from 'classnames';
import React from 'react';

export type ProgressBarProps = {
  totalsteps?: string;
  stepsready?: string;
  label?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  totalsteps,
  stepsready,
  label,
}) => {
  const StepsReadyPercente = (Number(stepsready) / Number(totalsteps)) * 100;

  return (
    <div>
      {showLabel && (
        <span className="p-2.5 text-sm font-semibold text-slate-50">
          {label} {stepsready}/{totalsteps}
        </span>
       )
      <div className=" h-[8px] w-[150px] rounded-md bg-slate-100">
        <div
          className={cx('rounded-md', {
            'bg-scrummyRed-500 text-white': StepsReadyPercente <= 30,
            'bg-scrummyGreen-500 text-white': StepsReadyPercente >= 60,
            'bg-scrummyYellow-500':
              StepsReadyPercente > 30 && StepsReadyPercente < 60,
          })}
          style={{
            height: '100%',
            width: `${StepsReadyPercente}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
