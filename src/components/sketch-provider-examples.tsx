import { CodeBlock } from "./code-block";
import { ShowcaseCard } from "./showcase-card";

const SETUP_SNIPPET = `import { SketchProvider } from "@/components/ui/sketch-provider";

export function App({ children }: { children: React.ReactNode }) {
  return <SketchProvider>{children}</SketchProvider>;
}`;

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

export function SketchProviderExamples() {
	return (
		<ShowcaseCard
			title="Examples"
			description="Wiring the provider up and drawing your own elements with it."
		>
			<ShowcaseCard.Row label="Wrap your app once, at the root">
				<CodeBlock code={SETUP_SNIPPET} className="w-full" />
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Draw any element with useSketchOutline">
				<CodeBlock code={OUTLINE_SNIPPET} className="w-full" />
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}
