import { Skeleton } from "../../registry/components/ui/skeleton";
import { ShowcaseCard } from "./showcase-card";

export function SkeletonShowcaseCard() {
	return (
		<ShowcaseCard
			title="Skeleton"
			description="A hand-drawn placeholder whose hachure shading sweeps while content loads."
		>
			<ShowcaseCard.Row label="Text lines">
				<div className="flex w-full flex-col gap-2">
					<Skeleton className="h-4 w-2/3" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-1/2" />
				</div>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Shapes">
				<div className="flex w-full items-center gap-4">
					<Skeleton className="size-12 rounded-full" />
					<Skeleton className="h-12 w-32" />
					<Skeleton className="h-12 flex-1" />
				</div>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Card placeholder">
				<div className="flex w-full flex-col gap-3">
					<Skeleton className="h-28 w-full" />
					<Skeleton className="h-4 w-1/3" />
					<Skeleton className="h-4 w-1/4" />
				</div>
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}
