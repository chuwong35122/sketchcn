"use client"

import { Switch as SwitchPrimitive } from "@base-ui/react/switch"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { useSketchOutline } from "./sketch-provider"

const switchVariants = cva(
  "group/switch relative isolate inline-flex shrink-0 items-center rounded-full border border-transparent bg-transparent p-[3px] transition-all outline-none focus-visible:ring-3 focus-visible:ring-ring/50 data-disabled:cursor-not-allowed data-disabled:opacity-50 [&>[data-sketch-outline]]:-z-10 [--sketch-fill:var(--primary)] [--sketch-fill-opacity:0] [--sketch-stroke:var(--primary)] hover:data-unchecked:[--sketch-fill-opacity:0.1] data-checked:[--sketch-fill-opacity:1] aria-invalid:[--sketch-stroke:var(--destructive)] aria-invalid:[--sketch-fill:var(--destructive)]",
  {
    variants: {
      size: {
        sm: "h-[18px] w-8",
        default: "h-[22px] w-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const switchThumbVariants = cva(
  "pointer-events-none relative isolate block rounded-full transition-transform duration-200 ease-out [&>[data-sketch-outline]]:-z-10 [--sketch-fill:var(--background)] [--sketch-fill-opacity:1] [--sketch-stroke:var(--primary)] group-aria-invalid/switch:[--sketch-stroke:var(--destructive)]",
  {
    variants: {
      size: {
        sm: "size-3 data-checked:translate-x-3.5",
        default: "size-4 data-checked:translate-x-[18px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

function Switch({
  className,
  size = "default",
  ...props
}: SwitchPrimitive.Root.Props & VariantProps<typeof switchVariants>) {
  const trackOutline = useSketchOutline()
  const thumbOutline = useSketchOutline()

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(switchVariants({ size, className }))}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(switchThumbVariants({ size }))}
      >
        <svg
          aria-hidden="true"
          data-sketch-outline
          ref={thumbOutline.ref}
          style={thumbOutline.style}
        />
      </SwitchPrimitive.Thumb>
      <svg
        aria-hidden="true"
        data-sketch-outline
        ref={trackOutline.ref}
        style={trackOutline.style}
      />
    </SwitchPrimitive.Root>
  )
}

const SWITCH_SIZES = [
  "sm",
  "default",
] as const satisfies readonly NonNullable<VariantProps<typeof switchVariants>["size"]>[]

export { Switch, switchVariants, SWITCH_SIZES }
