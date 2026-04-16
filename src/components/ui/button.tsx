import { cn } from "@/lib/cn"
import { Component, ComponentProps, splitProps } from "solid-js"

type ButtonProps = ComponentProps<"button">

export const Button: Component<ButtonProps> = (props) => {
  const [local, rest] = splitProps(props, ["class"])
  return (
    <button
      data-slot="button"
      class={cn(
        "[&_svg]:size-5 cursor-pointer disabled:cursor-default text-foreground",
        local.class
      )}
      {...rest}
    />
  )
}
