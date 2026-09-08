import { Textarea } from "../../registry/components/ui/textarea";
import { ShowcaseCard } from "./showcase-card";

export function TextareaShowcaseCard() {
	return (
		<ShowcaseCard
			title="Textarea"
			description="A hand-drawn textarea that grows with its content."
		>
			<ShowcaseCard.Row label="Default">
				<Textarea placeholder="Sketch a longer thought" />
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="With value">
				<Textarea defaultValue={"Imperfections make us human."} />
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Invalid">
				<Textarea aria-invalid defaultValue="Not quite right" />
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Disabled">
				<Textarea disabled placeholder="Disabled" />
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}
