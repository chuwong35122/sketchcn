import {
	SEPARATOR_VARIANTS,
	Separator,
} from "../../registry/components/ui/separator";
import { ShowcaseCard } from "./showcase-card";

export function SeparatorShowcaseCard() {
	return (
		<ShowcaseCard
			title="Separator"
			description="A hand-drawn rule that splits content, with or without a label."
		>
			<ShowcaseCard.Row label="Variants">
				<div className="flex w-full flex-col gap-6">
					{SEPARATOR_VARIANTS.map((variant) => (
						<div key={variant} className="flex flex-col gap-2">
							<span className="text-muted-foreground text-xs">{variant}</span>
							<Separator variant={variant} />
						</div>
					))}
				</div>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Vertical">
				<div className="flex h-8 items-center gap-4 text-sm">
					<span>Sketch</span>
					<Separator orientation="vertical" />
					<span>Trace</span>
					<Separator orientation="vertical" variant="dashed" />
					<span>Ink</span>
					<Separator orientation="vertical" variant="double" />
					<span>Erase</span>
				</div>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="With a label">
				<div className="flex w-full flex-col gap-6">
					<Separator>or</Separator>
					<Separator variant="dashed">tear here</Separator>
				</div>
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}
