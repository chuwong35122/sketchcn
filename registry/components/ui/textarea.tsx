"use client"

import { cn } from "cn"
import type * as React from "react"
import { useSketchOutline } from "./sketch-provider"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  const sketchOutline = useSketchOutline()

  return (
    <div
      data-slot="textarea-wrapper"
      className="relative isolate w-full rounded-lg text-input transition-colors has-aria-invalid:text-destructive has-focus-visible:text-ring [&>[data-sketch-outline]]:-z-10 [--sketch-stroke:currentColor]"
    >
      <textarea
        data-slot="textarea"
        className={cn(
          "block field-sizing-content min-h-16 w-full rounded-lg border border-transparent bg-transparent px-2.5 py-2 text-base text-foreground transition-colors outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        {...props}
      />
      <svg
        aria-hidden="true"
        data-sketch-outline
        ref={sketchOutline.ref}
        style={sketchOutline.style}
      />
    </div>
  )
}

export { Textarea }
