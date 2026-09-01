"use client"

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { cva, type VariantProps } from "class-variance-authority"
import cn from "cnfast"
import { useSketchOutline } from "./sketch-provider"

const toggleVariants = cva(
  "group/toggle isolate inline-flex items-center justify-center gap-1 rounded-lg text-sm font-medium whitespace-nowrap transition-all outline-none hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>[data-sketch-outline]]:-z-10 hover:[--sketch-fill:color-mix(in_oklch,var(--muted-foreground),transparent_88%)] data-pressed:text-foreground data-pressed:[--sketch-fill:color-mix(in_oklch,var(--muted-foreground),transparent_75%)]",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent",
      },
      size: {
        default:
          "h-8 min-w-8 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        sm: "h-7 min-w-7 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 min-w-9 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  children,
  className,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  const sketchOutline = useSketchOutline()

  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn("relative", toggleVariants({ variant, size, className }))}
      {...props}
    >
      {children}
      <svg
        aria-hidden="true"
        data-sketch-outline
        ref={sketchOutline.ref}
        style={sketchOutline.style}
      />
    </TogglePrimitive>
  )
}

export { Toggle, toggleVariants }
