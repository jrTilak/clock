import { createContext, createEffect, createSignal, JSX, useContext } from "solid-js";

type ColorMode = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: JSX.Element
  defaultTheme?: ColorMode
  storageKey?: string
}

/**
 * Light/Dark Mode Provider 
**/
export const ColorModeProviderContext = createContext();

export function ColorModeProvider({
  children,
  defaultTheme = "system",
  storageKey = "__color-mode",
  ...props
}: ThemeProviderProps) {
  const [colorMode, setColorMode] = createSignal<ColorMode>(
    (localStorage.getItem(storageKey) as ColorMode) || defaultTheme
  )

  createEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (colorMode() === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(colorMode())
  },)

  const value = {
    colorMode,
    setColorMode: (colorMode: ColorMode) => {
      localStorage.setItem(storageKey, colorMode)
      setColorMode(colorMode)
    },
  }

  return (
    <ColorModeProviderContext.Provider {...props} value={value}>
      {children}
    </ColorModeProviderContext.Provider>
  )
}

export const useColorMode = () => {
  const context = useContext(ColorModeProviderContext)

  if (context === undefined)
    throw new Error("useColorMode must be used within a ColorModeProvider")

  return context
}
