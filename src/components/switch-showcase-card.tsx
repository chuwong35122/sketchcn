import { SWITCH_SIZES, Switch } from "../../registry/components/ui/switch";
import { ShowcaseCard } from "./showcase-card";

export function SwitchShowcaseCard() {
	return (
		<ShowcaseCard
			title="Switch"
			description="Every hand-drawn switch size and state."
		>
			<ShowcaseCard.Row label="Sizes">
				{SWITCH_SIZES.map((size) => (
					<Switch key={size} size={size} aria-label={`Toggle ${size}`} />
				))}
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Checked">
				<Switch defaultChecked aria-label="Checked" />
				<Switch size="sm" defaultChecked aria-label="Checked small" />
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Invalid">
				<Switch aria-invalid aria-label="Invalid" />
				<Switch aria-invalid defaultChecked aria-label="Invalid checked" />
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Disabled">
				<Switch disabled aria-label="Disabled" />
				<Switch disabled defaultChecked aria-label="Disabled checked" />
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}
