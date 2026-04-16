import type { Component } from 'solid-js';
import { PresetsSwitcher } from './components/presets-switcher';
import { Clock } from './components/clock';
import { ThemeSwitcher } from './components/theme-switcher';
import { Settings } from './components/settings';
import { ColorModeProvider } from './providers/color-mode-provider';

const App: Component = () => {
  return (
    <ColorModeProvider>
      <main class='h-screen w-screen flex items-center justify-center'>
        <Clock />
        <Settings />
      </main>
    </ColorModeProvider>
  );
};

export default App;
