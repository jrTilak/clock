export const CLOCK_PRESETS = {
  "default-digital-clock": {
    name: "Default Digital Clock",
    preset: await import("./default-digital-clock").then(c => c.DefaultDigitalClock)
  }
}
