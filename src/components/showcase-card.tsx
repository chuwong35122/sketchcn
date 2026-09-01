import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../../registry/components/ui/card";

function ShowcaseCardRoot({
	title,
	description,
	className,
	children,
}: {
	title: string;
	description: string;
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<Card className={className}>
			<CardHeader>
				<CardTitle className="text-xl">{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-5">{children}</CardContent>
		</Card>
	);
}

function ShowcaseCardRow({
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

export const ShowcaseCard = Object.assign(ShowcaseCardRoot, {
	Row: ShowcaseCardRow,
});
