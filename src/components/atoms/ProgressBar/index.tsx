import cx from 'classnames';
import React from 'react';

export type ProgressBarProps = {
  totalSteps?: string;
  stepsReady?: string;
  label?: string;
  showLabel?: boolean;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  totalSteps,
  stepsReady,
  label,
  showLabel = true,
}) => {
  const progressPercentage = (Number(stepsReady) / Number(totalSteps)) * 100;

  return (
    <div>
      {showLabel && (
        <span className="p-2.5 text-sm font-semibold text-slate-50">
          {label} {stepsReady}/{totalSteps}
        </span>
      )}

      <div className=" h-2 w-[150px] rounded-md bg-slate-100">
        <div
          className={cx('rounded-md', {
            'bg-scrummyRed-500 text-white': progressPercentage <= 30,
            'bg-scrummyGreen-500 text-white': progressPercentage >= 60,
            'bg-scrummyYellow-500':
              progressPercentage > 30 && progressPercentage < 60,
          })}
          style={{
            height: '100%',
            width: `${progressPercentage}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
