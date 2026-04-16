import { pad2 } from '@/lib/pad-2';
import { Component, createMemo, createSignal, onCleanup, onMount } from 'solid-js';
import { CLOCK_PRESETS } from './presets';


export const Clock: Component = () => {
  const [now, setNow] = createSignal(new Date());

  onMount(() => {
    const id = setInterval(() => setNow(new Date()), 250);
    onCleanup(() => clearInterval(id));
  });

  const parts = createMemo(() => {
    const d = now();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    return {
      hh: pad2(h),
      mm: pad2(m),
      ss: pad2(s),
      blink: s % 2 === 0,
      date: new Intl.DateTimeFormat(undefined, {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      }).format(d),
    };
  });

  return (
    <div class="flex min-h-[16rem] items-center justify-center p-6 font-mono">
      {CLOCK_PRESETS["default-digital-clock"].preset({ ...parts() })}
    </div>
  );
};
