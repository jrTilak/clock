import { createSignal, onCleanup } from "solid-js";

export function useWakeLock() {
  let wakeLock: WakeLockSentinel | null = null;
  const [active, setActive] = createSignal(false);

  const request = async () => {
    if (!("wakeLock" in navigator)) {
      console.warn("wakelock not found in navigator")
      return
    }

    try {
      wakeLock = await navigator.wakeLock.request("screen");
      setActive(true);

      wakeLock.addEventListener("release", () => {
        wakeLock = null;
        setActive(false);
      });
    } catch (err) {
      console.error(err)
      setActive(false);
    }
  };

  const release = async () => {
    if (wakeLock) {
      await wakeLock.release();
      wakeLock = null;
      setActive(false);
    }
  };

  onCleanup(() => {
    release();
  });

  const toggleWakeLock = () => {
    active()
      ? release()
      : request();
  };

  return {
    request,
    release,
    isActive: active,
    toggleWakeLock,
  };
}

