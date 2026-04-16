import { createSignal, onCleanup } from "solid-js";

export function useFullscreen() {
  const [active, setActive] = createSignal(false);

  const syncActive = () => {
    setActive(Boolean(document.fullscreenElement));
  };
  syncActive();

  const enter = async () => {
    try {
      if (document.fullscreenElement) return;
      await document.documentElement.requestFullscreen();
      syncActive();
    } catch (err) {
      console.error(err);
      syncActive();
    }
  };

  const exit = async () => {
    try {
      if (!document.fullscreenElement) return;
      await document.exitFullscreen();
      syncActive();
    } catch (err) {
      console.error(err);
      syncActive();
    }
  };

  const onChange = () => {
    syncActive();
  };

  document.addEventListener("fullscreenchange", onChange);
  onCleanup(() => {
    document.removeEventListener("fullscreenchange", onChange);
  });

  const toggleFullscreen = () => {
    active() ? exit() : enter();
  };

  return {
    enter,
    exit,
    isActive: active,
    toggleFullscreen,
  };
}

