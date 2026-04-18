import { type Component, createSignal } from 'solid-js';
import { PresetsSwitcher } from './components/presets-switcher';
import { Clock } from './components/clock';
import { ThemeSwitcher } from './components/theme-switcher';
import { Settings } from './components/settings';
import { ColorModeProvider } from './providers/color-mode-provider';

const CLOCK_SCALE_STEP = 0.1;
const MIN_CLOCK_SCALE = 0.9;
const MAX_CLOCK_SCALE = 1.8;

const App: Component = () => {
  const [clockScale, setClockScale] = createSignal(1);

  const increaseClockScale = () =>
    setClockScale((value) => Math.min(value + CLOCK_SCALE_STEP, MAX_CLOCK_SCALE));
  const decreaseClockScale = () =>
    setClockScale((value) => Math.max(value - CLOCK_SCALE_STEP, MIN_CLOCK_SCALE));

  return (
    <ColorModeProvider>
      <main class='h-screen w-screen flex items-center justify-center'>
        <Clock scale={clockScale()} />
        <Settings
          onIncreaseClockSize={increaseClockScale}
          onDecreaseClockSize={decreaseClockScale}
        />
      </main>
    </ColorModeProvider>
  );
};

export default App;
