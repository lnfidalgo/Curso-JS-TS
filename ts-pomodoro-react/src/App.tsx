import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <PomodoroTimer
      pomodoroTime={1500}
      shortRestTime={300}
      longRestTime={900}
      cycles={4}
    />
  );
}

export default App;
