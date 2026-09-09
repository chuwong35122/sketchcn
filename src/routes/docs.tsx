import { ArrowLeft } from "@boxicons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "../../registry/components/ui/button";
import { CodeBlock } from "../components/code-block";
import type { DocsReferenceRow } from "../components/docs-section";
import { DocsSection } from "../components/docs-section";
import { InstallTabs } from "../components/install-tabs";
import { BgPreview, OutlinePreview } from "../components/sketch-docs-previews";

export const Route = createFileRoute("/docs")({ component: DocsPage });

const SETUP_SNIPPET = `import { SketchProvider } from "@/components/ui/sketch-provider";

export function App({ children }: { children: React.ReactNode }) {
  return <SketchProvider>{children}</SketchProvider>;
}`;

const PROVIDER_OPTIONS_SNIPPET = `<SketchProvider seed={1234}>
  <div className="[--sketch-roughness:2] [--sketch-bowing:2]">{children}</div>
</SketchProvider>`;

const OUTLINE_SNIPPET = `import { useSketchOutline } from "@/components/ui/sketch-provider";

export function Panel({ children }: { children: React.ReactNode }) {
  const sketchOutline = useSketchOutline();

  return (
    <div className="relative isolate rounded-lg px-4 py-3">
      {children}
      <svg
        aria-hidden="true"
        data-sketch-outline
        className="-z-10"
        ref={sketchOutline.ref}
        style={sketchOutline.style}
      />
    </div>
  );
}`;

const BG_SNIPPET = `import { useSketchBg } from "@/components/ui/sketch-provider";

export function Highlight({ children }: { children: React.ReactNode }) {
  const sketchBg = useSketchBg({ hachureGap: 6 });

  return (
    <div className="relative isolate rounded-lg px-4 py-3 text-primary">
      {children}
      <svg
        aria-hidden="true"
        data-sketch-bg
        className="-z-10"
        ref={sketchBg.ref}
        style={sketchBg.style}
      />
    </div>
  );
}`;

const CSS_VARIABLES_SNIPPET = `<div className="[--sketch-roughness:2.6] [--sketch-bowing:2.4]">
  <Button>Rougher button</Button>
</div>`;

const PROVIDER_PROPS = [
	{
		name: "children",
		type: "ReactNode",
		description: "The tree that can read sketch settings.",
	},
	{
		name: "seed",
		type: "number",
		defaultValue: "20260828",
		cssVariable: "--sketch-seed",
		description:
			"Base seed for the wobble. Every hook mixes it with its own id, so one seed change reshuffles the whole page deterministically.",
	},
] as const satisfies readonly DocsReferenceRow[];

const OUTLINE_OPTIONS = [
	{
		name: "shape",
		type: '"rectangle" | "underline"',
		defaultValue: '"rectangle"',
		description:
			"Rectangle follows the element border radius; underline draws a single stroke along the bottom edge.",
	},
	{
		name: "id",
		type: "string",
		defaultValue: "useId()",
		description:
			"Seeds the wobble. Because useId() shifts with tree position, pass a stable id when the geometry must not change, such as shared shapes or visual snapshots.",
	},
	{
		name: "opacity",
		type: "number",
		description:
			"Applied to the returned svg style. Style the svg directly in CSS instead when you want a hover or state transition.",
	},
	{
		name: "...roughOptions",
		type: "Partial<Options>",
		cssVariable: "--sketch-*",
		description:
			"Any RoughJS option except seed: roughness, bowing, stroke, strokeWidth, strokeLineDash, fill, fillStyle, and friends.",
	},
] as const satisfies readonly DocsReferenceRow[];

const BG_DEFAULTS = [
	{
		name: "fill",
		type: "color",
		defaultValue: "currentColor",
		cssVariable: "--sketch-bg-fill",
		description: "Fill colour of the hachure strokes.",
	},
	{
		name: "fillStyle",
		type: "string",
		defaultValue: "hachure",
		cssVariable: "--sketch-bg-fill-style",
		description: "RoughJS fill style used for the shading.",
	},
	{
		name: "fillWeight",
		type: "number",
		defaultValue: "0.4",
		cssVariable: "--sketch-bg-fill-weight",
		description: "Thickness of each hachure stroke.",
	},
	{
		name: "hachureGap",
		type: "number",
		defaultValue: "4",
		cssVariable: "--sketch-bg-hachure-gap",
		description: "Distance between hachure strokes.",
	},
	{
		name: "stroke",
		type: "color",
		defaultValue: "transparent",
		cssVariable: "--sketch-bg-stroke",
		description: "No outline is drawn, only the fill.",
	},
	{
		name: "opacity",
		type: "number",
		defaultValue: "0.5",
		cssVariable: "--sketch-bg-opacity",
		description: "Keeps the shading behind the content readable.",
	},
] as const satisfies readonly DocsReferenceRow[];

const CSS_VARIABLES = [
	{
		name: "--sketch-seed",
		type: "quoted number",
		defaultValue: '"20260828"',
		description:
			"Base seed for the wobble, mixed with each instance id, overriding the SketchProvider seed for the subtree. Quote it, because CSS minifiers round bare numbers to six significant digits.",
	},
	{
		name: "--sketch-roughness",
		type: "number",
		defaultValue: "1.1",
		description: "How far strokes stray from the ideal path.",
	},
	{
		name: "--sketch-bowing",
		type: "number",
		defaultValue: "1.4",
		description: "How much straight lines bend.",
	},
	{
		name: "--sketch-stroke",
		type: "color",
		defaultValue: "currentColor",
		description: "Stroke colour of the outline.",
	},
	{
		name: "--sketch-stroke-width",
		type: "number",
		defaultValue: "1.6",
		description: "Stroke width in pixels.",
	},
	{
		name: "--sketch-min-stroke-width",
		type: "number",
		defaultValue: "1",
		description:
			"Floor applied to the stroke width, which also insets the path so the wobble stays inside the box.",
	},
	{
		name: "--sketch-disable-multi-stroke",
		type: '"true" | "false"',
		defaultValue: "true",
		description: "Draw one pass instead of the doubled pencil pass.",
	},
	{
		name: "--sketch-preserve-vertices",
		type: '"true" | "false"',
		defaultValue: "true",
		description:
			"Keep corners anchored so shapes stay aligned with the layout box.",
	},
	{
		name: "--sketch-fill",
		type: "color",
		description:
			"Fill colour, also used by the CSS fill transition on drawn paths.",
	},
	{
		name: "--sketch-fill-style",
		type: "string",
		defaultValue: "solid",
		description: "RoughJS fill style, such as solid, hachure, or zigzag.",
	},
	{
		name: "--sketch-fill-weight",
		type: "number",
		description: "Thickness of each fill stroke for hatched fill styles.",
	},
	{
		name: "--sketch-hachure-gap",
		type: "number",
		description: "Distance between hachure strokes.",
	},
	{
		name: "--sketch-hachure-angle",
		type: "number",
		description: "Angle of the hachure lines in degrees.",
	},
	{
		name: "--sketch-max-randomness-offset",
		type: "number",
		description: "Upper bound on how far a point may be displaced.",
	},
	{
		name: "--sketch-curve-fitting",
		type: "number",
		description: "How closely curves follow the original shape.",
	},
	{
		name: "--sketch-curve-tightness",
		type: "number",
		description: "Tension of the curve through its control points.",
	},
	{
		name: "--sketch-curve-step-count",
		type: "number",
		description: "Number of segments used to draw a curve.",
	},
	{
		name: "--sketch-simplification",
		type: "number",
		description:
			"Drops points from the path, where 0 keeps them all and 1 is the flattest.",
	},
	{
		name: "--sketch-dash-offset",
		type: "number",
		description: "Dash length for the dashed fill style.",
	},
	{
		name: "--sketch-dash-gap",
		type: "number",
		description: "Gap between dashes for the dashed fill style.",
	},
	{
		name: "--sketch-zigzag-offset",
		type: "number",
		description: "Zigzag amplitude for the zigzag-line fill style.",
	},
	{
		name: "--sketch-dash",
		type: "string",
		defaultValue: "none",
		description:
			"CSS stroke-dasharray on the drawn outline, separate from the RoughJS dashed fill.",
	},
	{
		name: "--sketch-dash-animation",
		type: "string",
		defaultValue: "none",
		description:
			"CSS animation shorthand for the outline, used by the boil and alternate keyframes.",
	},
	{
		name: "--sketch-fill-opacity",
		type: "number",
		defaultValue: "1",
		description: "CSS fill-opacity on the drawn path, transitioned over 150ms.",
	},
] as const satisfies readonly DocsReferenceRow[];

function DocsPage() {
	return (
		<div className="min-h-screen bg-paper">
			<div className="mx-auto flex w-full max-w-4xl flex-col gap-6 p-8">
				<Button
					variant="link"
					size="sm"
					className="w-fit px-0"
					render={<Link to="/components" />}
				>
					<ArrowLeft />
					All components
				</Button>
				<header className="flex flex-col gap-2">
					<h1 className="text-4xl">Sketch Provider</h1>
					<p className="text-muted-foreground">
						{
							"Every Sketchcn component draws its outline with RoughJS. SketchProvider holds the drawing settings, and the useSketchOutline and useSketchBg hooks turn any element into a hand-drawn one."
						}
					</p>
				</header>

				<DocsSection
					id="installation"
					title="Installation"
					description="Adding any component pulls sketch-provider in as a dependency, but you can install it on its own."
				>
					<InstallTabs name="sketch-provider" />
					<DocsSection.Block label="Wrap your app once, at the root">
						<CodeBlock code={SETUP_SNIPPET} />
					</DocsSection.Block>
					<p className="text-muted-foreground text-sm">
						{
							"The hooks throw when there is no provider above them, so a missing wrapper fails loudly instead of rendering unstyled boxes."
						}
					</p>
				</DocsSection>

				<DocsSection
					id="sketch-provider"
					title="SketchProvider"
					description="Shares the seed with every sketch component below it. Every other drawing option comes from the --sketch-* CSS variables."
				>
					<DocsSection.Reference rows={PROVIDER_PROPS} />
					<DocsSection.Block label="Draw the whole page rougher">
						<CodeBlock code={PROVIDER_OPTIONS_SNIPPET} />
					</DocsSection.Block>
					<DocsSection.Block label="Option precedence, lowest to highest">
						<p className="text-muted-foreground text-sm">
							{
								"CSS variables read from the element, then the options passed to the hook. The seed is the exception. It comes from --sketch-seed when the element sets one, otherwise from the provider, and is always mixed with the hook id."
							}
						</p>
					</DocsSection.Block>
				</DocsSection>

				<DocsSection
					id="use-sketch-outline"
					title="useSketchOutline"
					description="Returns a ref and a style for an absolutely positioned svg that traces the parent element."
				>
					<CodeBlock code={OUTLINE_SNIPPET} />
					<p className="text-muted-foreground text-sm">
						{
							"The parent needs position: relative and isolate so the svg can sit behind the content. The outline is measured from the padding box and redrawn whenever the element resizes or its class or style attribute changes."
						}
					</p>
					<DocsSection.Reference rows={OUTLINE_OPTIONS} />
					<DocsSection.Block label="Live">
						<div className="flex flex-wrap items-center gap-4 p-4">
							<OutlinePreview>Default</OutlinePreview>
							<OutlinePreview strokeLineDash={[6, 4]}>Dashed</OutlinePreview>
							<OutlinePreview className="[--sketch-roughness:2.8]">
								Rougher
							</OutlinePreview>
							<OutlinePreview shape="underline" className="px-1 py-1">
								Underline
							</OutlinePreview>
						</div>
					</DocsSection.Block>
				</DocsSection>

				<DocsSection
					id="use-sketch-bg"
					title="useSketchBg"
					description="useSketchOutline drawn from the --sketch-bg-* variables, giving a hatched fill and no stroke. Anything it does not define falls back to the shared --sketch-* value."
				>
					<CodeBlock code={BG_SNIPPET} />
					<DocsSection.Reference rows={BG_DEFAULTS} />
					<DocsSection.Block label="Live">
						<div className="flex flex-wrap items-center gap-4 p-4">
							<BgPreview className="text-primary">Hachure</BgPreview>
							<BgPreview className="text-primary" fillStyle="cross-hatch">
								Cross hatch
							</BgPreview>
							<BgPreview
								className="text-primary"
								fillStyle="zigzag"
								hachureGap={6}
							>
								Zigzag
							</BgPreview>
						</div>
					</DocsSection.Block>
				</DocsSection>

				<DocsSection
					id="css-variables"
					title="CSS variables"
					description="sketch.css ships defaults on :root, and any element can override them for its own outline."
				>
					<DocsSection.Reference rows={CSS_VARIABLES} />
					<DocsSection.Block label="Override on a subtree">
						<CodeBlock code={CSS_VARIABLES_SNIPPET} />
					</DocsSection.Block>
					<p className="text-muted-foreground text-sm">
						{
							"Variables are read from the drawn element itself, so they cascade like any other CSS custom property and work with Tailwind arbitrary properties, variants, and dark mode."
						}
					</p>
				</DocsSection>
			</div>
		</div>
	);
}
