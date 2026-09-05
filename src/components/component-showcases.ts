import type { ComponentType } from "react";
import { ButtonShowcaseCard } from "./button-showcase-card";
import { CardShowcaseCard } from "./card-showcase-card";
import { DialogShowcaseCard } from "./dialog-showcase-card";
import { ToggleShowcaseCard } from "./toggle-showcase-card";

export type ComponentShowcase = {
	slug: string;
	title: string;
	description: string;
	Showcase: ComponentType;
};

export const COMPONENT_SHOWCASES = [
	{
		slug: "button",
		title: "Button",
		description: "A hand-drawn Base UI button styled with shadcn conventions.",
		Showcase: ButtonShowcaseCard,
	},
	{
		slug: "card",
		title: "Card",
		description: "A hand-drawn card container styled with shadcn conventions.",
		Showcase: CardShowcaseCard,
	},
	{
		slug: "dialog",
		title: "Dialog",
		description: "A hand-drawn Base UI dialog styled with shadcn conventions.",
		Showcase: DialogShowcaseCard,
	},
	{
		slug: "toggle",
		title: "Toggle",
		description: "A pressable Base UI toggle styled with shadcn conventions.",
		Showcase: ToggleShowcaseCard,
	},
] as const satisfies readonly ComponentShowcase[];

export function findComponentShowcase(slug: string) {
	return COMPONENT_SHOWCASES.find((showcase) => showcase.slug === slug);
}
