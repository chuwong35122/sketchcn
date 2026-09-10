import { Skeleton } from "../../registry/components/ui/skeleton";
import { ShowcaseCard } from "./showcase-card";

const PROFILE_SNIPPET = `import { Skeleton } from "@/components/ui/skeleton";

export function ProfileLoading() {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="size-10 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-20" />
      </div>
    </div>
  );
}`;

const LIST_SNIPPET = `import { Skeleton } from "@/components/ui/skeleton";

export function NoteListLoading() {
  return (
    <ul className="flex w-full flex-col gap-3">
      {[0, 1, 2].map((row) => (
        <li key={row} className="flex flex-col gap-2">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-3 w-full" />
        </li>
      ))}
    </ul>
  );
}`;

const CALM_SNIPPET = `import { Skeleton } from "@/components/ui/skeleton";

export function CalmSkeleton() {
  return <Skeleton className="h-24 w-full [--sketch-bg-hachure-gap:8]" />;
}`;

const ANGLE_SNIPPET = `import { Skeleton } from "@/components/ui/skeleton";

export function UprightSkeleton() {
  return (
    <Skeleton className="h-24 w-full [--sketch-bg-hachure-angle:90]" />
  );
}`;

const LIST_ROWS = [0, 1, 2];

export function SkeletonExamples() {
	return (
		<ShowcaseCard
			title="Examples"
			description="Loading states for profiles, lists, and a slower drawing hand."
		>
			<ShowcaseCard.Example label="Profile loading" code={PROFILE_SNIPPET}>
				<div className="flex items-center gap-3">
					<Skeleton className="size-10 rounded-full" />
					<div className="flex flex-col gap-2">
						<Skeleton className="h-4 w-32" />
						<Skeleton className="h-3 w-20" />
					</div>
				</div>
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="List loading" code={LIST_SNIPPET}>
				<ul className="flex w-full flex-col gap-3">
					{LIST_ROWS.map((row) => (
						<li key={row} className="flex flex-col gap-2">
							<Skeleton className="h-4 w-1/2" />
							<Skeleton className="h-3 w-full" />
						</li>
					))}
				</ul>
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Wider hatching" code={CALM_SNIPPET}>
				<Skeleton className="h-24 w-full [--sketch-bg-hachure-gap:8]" />
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Upright hatching" code={ANGLE_SNIPPET}>
				<Skeleton className="h-24 w-full [--sketch-bg-hachure-angle:90]" />
			</ShowcaseCard.Example>
		</ShowcaseCard>
	);
}
