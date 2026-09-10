"use client"

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator"
import { cva } from "class-variance-authority"
import { cn } from "cn"
import type { ComponentProps } from "react"
import { useSketchOutline } from "./sketch-provider"

const SEPARATOR_VARIANTS = ["solid", "dashed", "double"] as const

const DOUBLE_LINE_GAP = "3px"

const separatorLine = cva(
  "relative isolate shrink-0 text-border [--sketch-stroke:currentColor]",
  {
    variants: {
      orientation: {
        horizontal: "w-full",
        vertical: "self-stretch",
      },
      variant: {
        solid: "",
        dashed: "[--sketch-dash:6_5]",
        double: "",
      },
    },
    compoundVariants: [
      { orientation: "horizontal", variant: ["solid", "dashed"], class: "h-px" },
      { orientation: "horizontal", variant: "double", class: "h-1" },
      { orientation: "vertical", variant: ["solid", "dashed"], class: "w-px" },
      { orientation: "vertical", variant: "double", class: "w-1" },
    ],
    defaultVariants: { orientation: "horizontal", variant: "solid" },
  }
)

const separatorLabel = cva("flex items-center", {
  variants: {
    orientation: {
      horizontal: "w-full flex-row gap-3",
      vertical: "h-full flex-col gap-2",
    },
  },
  defaultVariants: { orientation: "horizontal" },
})

type SeparatorOrientation = "horizontal" | "vertical"

type SeparatorVariant = (typeof SEPARATOR_VARIANTS)[number]

type SketchLineProps = {
  orientation: SeparatorOrientation
  variant: SeparatorVariant
}

type SeparatorProps = ComponentProps<"div"> & {
  orientation?: SeparatorOrientation
  variant?: SeparatorVariant
}

function Separator({
  children,
  className,
  orientation = "horizontal",
  variant = "solid",
  ...props
}: SeparatorProps) {
  if (children === undefined) {
    return (
      <SeparatorPrimitive
        data-slot="separator"
        data-variant={variant}
        orientation={orientation}
        className={cn(separatorLine({ orientation, variant }), className)}
        {...props}
      >
        <SketchLines orientation={orientation} variant={variant} />
      </SeparatorPrimitive>
    )
  }

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      data-slot="separator"
      data-variant={variant}
      className={cn(separatorLabel({ orientation }), className)}
      {...props}
    >
      <SeparatorLine orientation={orientation} variant={variant} />
      <span
        data-slot="separator-label"
        className="shrink-0 text-muted-foreground text-xs"
      >
        {children}
      </span>
      <SeparatorLine orientation={orientation} variant={variant} />
    </div>
  )
}

function SeparatorLine({ orientation, variant }: SketchLineProps) {
  return (
    <span
      aria-hidden="true"
      data-slot="separator-line"
      className={cn(separatorLine({ orientation, variant }), "flex-1 self-auto")}
    >
      <SketchLines orientation={orientation} variant={variant} />
    </span>
  )
}

function SketchLines({ orientation, variant }: SketchLineProps) {
  const shape = orientation === "vertical" ? "vertical-line" : "underline"
  const line = useSketchOutline({ shape })
  const secondLine = useSketchOutline({ shape })
  const offset =
    orientation === "vertical"
      ? `translateX(-${DOUBLE_LINE_GAP})`
      : `translateY(-${DOUBLE_LINE_GAP})`

  return (
    <>
      <svg aria-hidden="true" data-sketch-outline ref={line.ref} style={line.style} />
      {variant === "double" && (
        <svg
          aria-hidden="true"
          data-sketch-outline
          ref={secondLine.ref}
          style={{ ...secondLine.style, transform: offset }}
        />
      )}
    </>
  )
}

export { Separator, SEPARATOR_VARIANTS }
