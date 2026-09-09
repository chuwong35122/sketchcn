import type { ComponentType } from "react";
import { ButtonExamples } from "./button-examples";
import { ButtonShowcaseCard } from "./button-showcase-card";
import { CardExamples } from "./card-examples";
import { CardShowcaseCard } from "./card-showcase-card";
import { DialogExamples } from "./dialog-examples";
import { DialogShowcaseCard } from "./dialog-showcase-card";
import { InputExamples } from "./input-examples";
import { InputShowcaseCard } from "./input-showcase-card";
import { SketchProviderExamples } from "./sketch-provider-examples";
import { SketchProviderShowcaseCard } from "./sketch-provider-showcase-card";
import { SwitchExamples } from "./switch-examples";
import { SwitchShowcaseCard } from "./switch-showcase-card";
import { TabsExamples } from "./tabs-examples";
import { TabsShowcaseCard } from "./tabs-showcase-card";
import { TextareaExamples } from "./textarea-examples";
import { TextareaShowcaseCard } from "./textarea-showcase-card";
import { ToggleExamples } from "./toggle-examples";
import { ToggleShowcaseCard } from "./toggle-showcase-card";

export type ComponentShowcase = {
	slug: string;
	title: string;
	description: string;
	Showcase: ComponentType;
	Examples?: ComponentType;
};

export const COMPONENT_SHOWCASES = [
	{
		slug: "sketch-provider",
		title: "Sketch Provider",
		description:
			"The RoughJS provider and hooks every Sketchcn component draws through.",
		Showcase: SketchProviderShowcaseCard,
		Examples: SketchProviderExamples,
	},
	{
		slug: "button",
		title: "Button",
		description: "A hand-drawn Base UI button styled with shadcn conventions.",
		Showcase: ButtonShowcaseCard,
		Examples: ButtonExamples,
	},
	{
		slug: "card",
		title: "Card",
		description: "A hand-drawn card container styled with shadcn conventions.",
		Showcase: CardShowcaseCard,
		Examples: CardExamples,
	},
	{
		slug: "dialog",
		title: "Dialog",
		description: "A hand-drawn Base UI dialog styled with shadcn conventions.",
		Showcase: DialogShowcaseCard,
		Examples: DialogExamples,
	},
	{
		slug: "toggle",
		title: "Toggle",
		description: "A pressable Base UI toggle styled with shadcn conventions.",
		Showcase: ToggleShowcaseCard,
		Examples: ToggleExamples,
	},
	{
		slug: "switch",
		title: "Switch",
		description: "A hand-drawn Base UI switch styled with shadcn conventions.",
		Showcase: SwitchShowcaseCard,
		Examples: SwitchExamples,
	},
	{
		slug: "tabs",
		title: "Tabs",
		description: "A hand-drawn Base UI tabs styled with shadcn conventions.",
		Showcase: TabsShowcaseCard,
		Examples: TabsExamples,
	},
	{
		slug: "input",
		title: "Input",
		description: "A hand-drawn Base UI input styled with shadcn conventions.",
		Showcase: InputShowcaseCard,
		Examples: InputExamples,
	},
	{
		slug: "textarea",
		title: "Textarea",
		description: "A hand-drawn textarea styled with shadcn conventions.",
		Showcase: TextareaShowcaseCard,
		Examples: TextareaExamples,
	},
] as const satisfies readonly ComponentShowcase[];

export function findComponentShowcase(
	slug: string,
): ComponentShowcase | undefined {
	return COMPONENT_SHOWCASES.find((showcase) => showcase.slug === slug);
}
