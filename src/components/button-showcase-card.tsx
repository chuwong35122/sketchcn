import { Pencil, Plus, Trash } from "@boxicons/react";
import {
	BUTTON_SIZES,
	BUTTON_VARIANTS,
	Button,
	ICON_BUTTON_SIZES,
} from "../../registry/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../../registry/components/ui/card";

function ShowcaseRow({
	label,
	children,
}: {
	label: string;
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col gap-2">
			<span className="text-muted-foreground text-xs">{label}</span>
			<div className="flex flex-wrap items-center gap-2">{children}</div>
		</div>
	);
}

export function ButtonShowcaseCard() {
	return (
		<Card className="sm:col-span-2 lg:col-span-3">
			<CardHeader>
				<CardTitle>Button</CardTitle>
				<CardDescription>
					{"Every hand-drawn button variant, size and state."}
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-5">
				<ShowcaseRow label="Variants">
					{BUTTON_VARIANTS.map((variant) => (
						<Button key={variant} variant={variant}>
							{variant}
						</Button>
					))}
				</ShowcaseRow>
				<ShowcaseRow label="Sizes">
					{BUTTON_SIZES.map((size) => (
						<Button key={size} size={size}>
							{size}
						</Button>
					))}
				</ShowcaseRow>
				<ShowcaseRow label="Icon sizes">
					{ICON_BUTTON_SIZES.map((size) => (
						<Button key={size} size={size} aria-label={`Edit (${size})`}>
							<Pencil />
						</Button>
					))}
				</ShowcaseRow>
				<ShowcaseRow label="With icons">
					<Button>
						<Plus />
						New sketch
					</Button>
					<Button variant="outline">
						Continue
						<Pencil />
					</Button>
					<Button variant="destructive">
						<Trash />
						Delete
					</Button>
				</ShowcaseRow>
				<ShowcaseRow label="Disabled">
					{BUTTON_VARIANTS.map((variant) => (
						<Button key={variant} variant={variant} disabled>
							{variant}
						</Button>
					))}
				</ShowcaseRow>
			</CardContent>
		</Card>
	);
}
