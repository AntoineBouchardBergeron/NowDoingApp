import React, { useRef, useState, useEffect } from "react";
import { Time } from "../Classes/Time";
import Clock from "./Clock";
import { useTheme } from "../Providers/ThemeProvider";
import { useActiveActivity } from "../Providers/ActivityProvider";
import Container from "../Components/Container";
import { useTimer } from "../Providers/TimeProvider";
type Props = {
  onTimerExpired: () => void;
};

const ActiveTimer = (props: Props) => {
  const { isTimerActive, activateTimer } = useTimer();
  const {activity } =
    useActiveActivity();
  const countdownAmount = useRef<number>(0);
  const [updateActivityTime, setUpdateActivityTime] = useState<Time>(
    new Time(activity.timePassed.seconds)
  );

  function tickDown() {
    return new Time(activity.estimatedTime.seconds - updateActivityTime.seconds);
  }

  useEffect(() => {
    clearInterval(countdownAmount.current);
    if (tickDown().seconds <= 0 && isTimerActive) {
      props.onTimerExpired();
      return;
    }
    if (isTimerActive) {
      countdownAmount.current = window.setInterval(() => {
        setUpdateActivityTime((updateActivityTime) => {
          return updateActivityTime.tick();
        });
      }, 1000);
    }
  }, [isTimerActive, countdownAmount.current]);

  return (
    <Container>
      <Clock
        representedTime={tickDown()}
        timeRepresentation={activity.desiredRepresentation.value}
        clockBackgroundColor={useTheme().colors.secondaryBackground}
        clockColor={useTheme().colors.clockColors}
      />
    </Container>
  );
};

export default ActiveTimer;
