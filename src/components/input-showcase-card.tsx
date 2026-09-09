import { Input } from "../../registry/components/ui/input";
import { ShowcaseCard } from "./showcase-card";

export function InputShowcaseCard() {
	return (
		<ShowcaseCard
			title="Input"
			description="A hand-drawn Base UI input across its types and states."
		>
			<ShowcaseCard.Row label="Default">
				<Input placeholder="Sketch something" />
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Types">
				<Input type="email" placeholder="hello@chuwii.com" />
				<Input type="password" placeholder="Password" />
				<Input type="file" />
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="With value">
				<Input defaultValue="Drawn by hand" />
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Invalid">
				<Input aria-invalid defaultValue="Not quite right" />
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Disabled">
				<Input disabled placeholder="Disabled" />
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}
