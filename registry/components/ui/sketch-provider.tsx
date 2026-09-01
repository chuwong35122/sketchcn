"use client";

import "./sketch.css";

import {
  type ReactNode,
  useContext,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import rough from "roughjs";
import type { Options } from "roughjs/bin/core";
import {
  createRoundedRectanglePath,
  createSeed,
  DEFAULT_SEED,
  DEFAULT_STROKE_INSET,
  getBorderRadius,
  getCssSketchOptions,
  SketchContext,
  type SketchOutline,
  type SketchOutlineOptions,
  type SketchTheme,
} from "./utils/sketch";

export type SketchProviderProps = {
  children: ReactNode;
  options?: Partial<Options>;
  seed?: number;
};

export type { SketchOutline, SketchOutlineOptions } from "./utils/sketch";

export function SketchProvider({
  children,
  options,
  seed = DEFAULT_SEED,
}: SketchProviderProps) {

  const value = useMemo(
    () => ({
      options: options as Partial<Options>,
      seed,
    }),
    [options, seed],
  );

  return <SketchContext.Provider value={value}>{children}</SketchContext.Provider>;
}


export function useSketchOutline(options: SketchOutlineOptions = {}): SketchOutline {
  const { opacity, ...roughOptions } = options;
  const theme = useSketch();
  const svgRef = useRef<SVGSVGElement>(null);
  const instanceId = useId();

  const seed = useMemo(() => createSeed(theme.seed, instanceId), [instanceId, theme.seed]);

  useLayoutEffect(() => {
    const svg = svgRef.current;
    const target = svg?.parentElement;

    if (!svg || !target) {
      return;
    }

    let frame = 0;
    const draw = () => {
      const { height, width } = target.getBoundingClientRect();

      if (width === 0 || height === 0) {
        return;
      }

      const drawing = rough.svg(svg);
      const drawingOptions = {
        ...theme.options,
        ...getCssSketchOptions(target),
        ...roughOptions,
        seed,
      };
      const rectangle = drawing.path(
        createRoundedRectanglePath(
          width,
          height,
          getBorderRadius(target),
          drawingOptions.strokeWidth ?? DEFAULT_STROKE_INSET,
        ),
        drawingOptions,
      );

      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      svg.replaceChildren(rectangle);
    };

    const scheduleDraw = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(scheduleDraw);
    observer.observe(target);
    const attributeObserver = new MutationObserver(scheduleDraw);
    attributeObserver.observe(target, {
      attributeFilter: ["class", "style"],
      attributes: true,
    });
    scheduleDraw();

    return () => {
      cancelAnimationFrame(frame);
      attributeObserver.disconnect();
      observer.disconnect();
    };
  }, [seed]);

  return {
    ref: svgRef,
    style: {
      height: "100%",
      left: 0,
      opacity,
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      width: "100%",
    },
  };
}

export function useSketchBg(options: SketchOutlineOptions = {}): SketchOutline {
  return useSketchOutline({
    fill: "currentColor",
    fillStyle: "hachure",
    fillWeight: 0.4,
    hachureGap: 4,
    stroke: "transparent",
    opacity: 0.5,
    ...options,
  });
}

function useSketch(): SketchTheme {
  const theme = useContext(SketchContext);

  if (theme === null) {
    throw new Error("Sketch components must be rendered inside SketchProvider.");
  }

  return theme;
}
