import { Fullscreen, Lightbulb, SettingsIcon, Sun } from "lucide-solid"
import { Button } from "./ui/button";
import { useWakeLock } from "@/hooks/uses-wake-lock";
import { useFullscreen } from "@/hooks/use-fullscreen";

type SettingsProps = {
  onIncreaseClockSize: () => void
  onDecreaseClockSize: () => void
}

export const Settings = (props: SettingsProps) => {
  const wakelock = useWakeLock()
  const fullscreen = useFullscreen()



  return (
    <div class="fixed bottom-4 left-4 right-4 flex items-center justify-between">
      <div class="py-3 flex items-center justify-center w-fit rounded-full border px-5 bg-background/60 backdrop-blur">
        <Button onClick={props.onDecreaseClockSize} aria-label="Decrease clock size">
          <span aria-hidden="true">-</span>
          <span class="sr-only">Decrease clock size</span>
        </Button>
        <Button onClick={props.onIncreaseClockSize} aria-label="Increase clock size">
          <span aria-hidden="true">+</span>
          <span class="sr-only">Increase clock size</span>
        </Button>
      </div>

      <div class="py-3 flex items-center justify-center w-fit rounded-full border px-5 bg-background/60 backdrop-blur">
        <Button>
          <Sun />
        </Button>
        <Button
          onClick={wakelock.toggleWakeLock}
          class={wakelock.isActive() ? "text-yellow" : "text-foreground"}
        >
          <Lightbulb />
        </Button>
        <Button
          onClick={fullscreen.toggleFullscreen}
          class={fullscreen.isActive() ? "text-yellow" : "text-foreground"}
        >
          <Fullscreen />
        </Button>
      </div>

      <div class="py-3 flex items-center justify-center w-fit rounded-full border px-5 bg-background/60 backdrop-blur">
        <Button>
          <SettingsIcon />
        </Button>
      </div>
    </div>
  );
}
