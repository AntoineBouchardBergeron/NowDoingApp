import React, { useRef, useState, useEffect } from "react";
import { Time } from "../Classes/Time";
import Clock from "./Clock";
import { useTheme } from "./ThemeProvider";
import { useActiveActivity } from "./ActivityProvider";
import Container from "../Components/Container";
type Props = {
  toggle: boolean;
  // onActivityComplete: () => void
  onTimerExpired: () => void;
};

const ActiveTimer = (props: Props) => {
  const { timePassed, estimatedTime, desiredRepresentation } =
    useActiveActivity();
  const countdownAmount = useRef<number>(0);
  const [updateActivityTime, setUpdateActivityTime] = useState<Time>(
    new Time(timePassed.seconds)
  );

  function tickDown() {
    return new Time(estimatedTime.seconds - updateActivityTime.seconds);
  }

  useEffect(() => {
    clearInterval(countdownAmount.current);
    if (tickDown().seconds <= 0 && !props.toggle) {
      props.onTimerExpired();
      return;
    }
    if (!props.toggle) {
      countdownAmount.current = window.setInterval(() => {
        setUpdateActivityTime((updateActivityTime) => {
          return updateActivityTime.tick();
        });
      }, 1000);
    }
  }, [props.toggle, countdownAmount.current]);

  return (
    <Container>
      <Clock
        representedTime={tickDown()}
        timeRepresentation={desiredRepresentation.value}
        clockBackgroundColor={useTheme().colors.secondaryBackground}
        clockColor={useTheme().colors.clockColors}
      />
    </Container>
  );
};

export default ActiveTimer;
