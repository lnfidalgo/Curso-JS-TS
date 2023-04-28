import { useEffect, useState, useCallback } from 'react';
import { useInterval } from '../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';
import { secondsToTime } from '../utils/seconds-to-time';

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
    new Array(props.cycles - 1).fill(true),
  );

  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) setFullWorkingTime(fullWorkingTime + 1);
    },
    startTime ? 1000 : null,
  );

  const configureWork = useCallback(() => {
    setStartTime(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.pomodoroTime);
    BellStart.play();
  }, [setStartTime, setWorking, setResting, setMainTime, props.pomodoroTime]);

  const configureRest = useCallback(
    (long: boolean) => {
      setStartTime(true);
      setWorking(false);
      setResting(true);
      BellFinish.play();

      if (long) {
        setMainTime(props.longRestTime);
      } else {
        setMainTime(props.shortRestTime);
      }
    },
    [
      setStartTime,
      setWorking,
      setResting,
      setMainTime,
      props.longRestTime,
      props.shortRestTime,
    ],
  );

  useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');

    if (mainTime > 0) return;
    if (working && cyclesQtdManager.length > 0) {
      configureRest(false);
      cyclesQtdManager.pop();
    } else if (working && cyclesQtdManager.length <= 0) {
      configureRest(true);
      setCyclesQtdManager(new Array(props.cycles - 1).fill(true));
      setCompletedCycles(completedCycles + 1);
    }

    if (working) setNumberOfPomodoros(numberOfPomodoros + 1);
    if (resting) configureWork();
  }, [
    working,
    resting,
    mainTime,
    cyclesQtdManager,
    completedCycles,
    numberOfPomodoros,
    configureRest,
    setCyclesQtdManager,
    setCompletedCycles,
    configureWork,
    props.cycles,
  ]);

  return (
    <div className="pomodoro">
      <h2>Você está: {working ? 'Produzindo' : 'Descansando'}</h2>
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

      <div className="details">
        <p>Ciclos concluídos: {completedCycles}</p>
        <p>Horas produzindo: {secondsToTime(fullWorkingTime)}</p>
        <p>Pomodoros concluídos: {numberOfPomodoros}</p>
      </div>
    </div>
  );
}
