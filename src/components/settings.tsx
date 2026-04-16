import { Fullscreen, Lightbulb, SettingsIcon, Sun, SunMoon, Zap } from "lucide-solid"
import { Button } from "./ui/button";
import { useWakeLock } from "@/hooks/uses-wake-lock";
import { useFullscreen } from "@/hooks/use-fullscreen";
export const Settings = (props: {}) => {
  const wakelock = useWakeLock()
  const fullscreen = useFullscreen()



  return (
    <div class="fixed gap-4 bottom-4 left-1/2 -translate-x-1/2 py-3 flex items-center justify-center w-fit rounded-full border px-5" >
      <Button>
        <SettingsIcon />
      </Button>
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
  );
}
