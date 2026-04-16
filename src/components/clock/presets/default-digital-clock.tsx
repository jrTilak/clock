import { Component } from "solid-js"
import { ClockPresetProps } from "./types"

export const DefaultDigitalClock: Component<ClockPresetProps> = ({
  hh,
  mm,
  blink,
  date,
  ss
}) => {
  return (
    <div class="w-full max-w-xl rounded-2xl border border-foreground/10 bg-background/60 p-8 shadow-sm backdrop-blur">
      <div class="flex items-baseline justify-center gap-3 font-mono tabular-nums">
        <span class="text-6xl font-semibold">{hh}</span>
        <span class={`text-5xl font-semibold ${blink ? 'opacity-100' : 'opacity-35'}`}>:</span>
        <span class="text-6xl font-semibold">{mm}</span>
        <span class={`text-5xl font-semibold ${blink ? 'opacity-100' : 'opacity-35'}`}>:</span>
        <span class="text-4xl font-semibold tracking-tight opacity-90">{ss}</span>
      </div>
      <div class="mt-4 text-center text-lg opacity-75">{date}</div>
    </div>
  )
}
