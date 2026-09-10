"use client"

import { cn } from "cn"
import type { ComponentProps } from "react"
import { useSketchBg, useSketchOutline } from "./sketch-provider"

const OUTLINE_OPACITY = 0.55

function Skeleton({ children, className, ...props }: ComponentProps<"div">) {
  const outline = useSketchOutline({ opacity: OUTLINE_OPACITY })
  const shading = useSketchBg()

  return (
    <div
      data-slot="skeleton"
      data-sketch-reveal
      aria-hidden="true"
      className={cn(
        "relative isolate min-h-4 rounded-md text-muted-foreground [--sketch-stroke-width:1.2]",
        className
      )}
      {...props}
    >
      {children}
      <svg
        aria-hidden="true"
        data-sketch-outline
        ref={outline.ref}
        style={outline.style}
      />
      <svg
        aria-hidden="true"
        data-sketch-bg
        ref={shading.ref}
        style={shading.style}
      />
    </div>
  )
}

export { Skeleton }
