import React, { useEffect, useState } from "react";
import { Time } from "../Classes/Time";

export interface TimerDefault {
  isTimerActive: boolean;
}

export interface TimeInterface extends TimerDefault {
  activateTimer: (b: boolean) => void;
}

export const baseTime: TimerDefault = {
  isTimerActive: false,
};

export const basicTimeContext: TimeInterface = {
  activateTimer: () => {
    return baseTime;
  },
  isTimerActive: baseTime.isTimerActive,
};

export const TimeContext = React.createContext<TimeInterface>(basicTimeContext);

export const TimeProvider: React.FC<{}> = (props) => {
  const [activeTime, setTime] = useState<TimerDefault>(baseTime);

  useEffect(() => {
    // Handle the logic for updating all activities.
    // Mainly for the status. Might not be actually needed, but it's there.>
    // Will need to request time from TimerProvider to know how much time lapsed since start, maybe?
    setTime(activeTime);
    console.log("I'M sad again");
  }, [activeTime]);

  const defaultTime: TimeInterface = {
    isTimerActive: activeTime.isTimerActive,
    activateTimer: (b: boolean) => {
      setTime({
        isTimerActive: b,
      });
    },
  };

  return (
    <TimeContext.Provider value={defaultTime}>
      {props.children}
    </TimeContext.Provider>
  );
};

export const useTimer = () => React.useContext(TimeContext);
