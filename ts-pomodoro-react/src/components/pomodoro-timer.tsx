import { useEffect, useState } from 'react';
import { useInterval } from '../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellStart = require('../sounds/src_sounds_bell-start.mp3');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellFinish = require('../sounds/src_sounds_bell-finish.mp3');

const BellStart = new Audio(bellStart);
const BellFinish = new Audio(bellFinish);

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);
  const [startTime, setStartTime] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);
  const [cyclesQtdManager, setCyclesQtdManager] = useState(
    new Array(props.cycles),
  );

  useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');
  }, [working]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    startTime ? 1000 : null,
  );

  const configureWork = () => {
    setStartTime(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.pomodoroTime);
    BellStart.play();
  };

  const configureRest = (long: boolean) => {
    setStartTime(true);
    setWorking(false);
    setResting(true);
    BellFinish.play();

    if (long) {
      setMainTime(props.longRestTime);
    } else {
      setMainTime(props.shortRestTime);
    }
  };

  return (
    <div className="pomodoro">
      <h2>Você está estudando</h2>
      <Timer mainTime={mainTime} />
      <div className="button-holder">
        <Button
          text="Start"
          onClick={() => {
            configureWork();
          }}
        />
        <Button
          text="Rest"
          onClick={() => {
            configureRest(false);
          }}
        />
        <Button
          className={!working && !resting ? 'hidden' : ''}
          text={startTime ? 'Pause' : 'Play'}
          onClick={() => setStartTime(!startTime)}
        />
      </div>
    </div>
  );
}
