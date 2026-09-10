import { Button } from "../../registry/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../../registry/components/ui/sheet";
import { ShowcaseCard } from "./showcase-card";

const SHEET_SIDES = [
	{ side: "right", label: "Right", trigger: "Open right" },
	{ side: "left", label: "Left", trigger: "Open left" },
	{ side: "top", label: "Top", trigger: "Open top" },
	{ side: "bottom", label: "Bottom", trigger: "Open bottom" },
] as const;

export function SheetShowcaseCard() {
	return (
		<ShowcaseCard
			title="Sheet"
			description="A hand-drawn panel that slides in from any edge."
		>
			<ShowcaseCard.Row label="Sides">
				{SHEET_SIDES.map(({ side, label, trigger }) => (
					<Sheet key={side}>
						<SheetTrigger
							render={<Button variant="outline">{trigger}</Button>}
						/>
						<SheetContent side={side}>
							<SheetHeader>
								<SheetTitle>{`${label} sheet`}</SheetTitle>
								<SheetDescription>
									{"The outline is drawn with RoughJS, just like the dialog."}
								</SheetDescription>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				))}
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="With footer actions">
				<Sheet>
					<SheetTrigger render={<Button>Edit sketch</Button>} />
					<SheetContent>
						<SheetHeader>
							<SheetTitle>Edit sketch</SheetTitle>
							<SheetDescription>
								{"Change the details, then save when you are happy."}
							</SheetDescription>
						</SheetHeader>
						<SheetFooter>
							<SheetClose render={<Button variant="outline" />}>
								Cancel
							</SheetClose>
							<Button>Save changes</Button>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Without close button">
				<Sheet>
					<SheetTrigger
						render={<Button variant="ghost">Open plain sheet</Button>}
					/>
					<SheetContent showCloseButton={false}>
						<SheetHeader>
							<SheetTitle>No close button</SheetTitle>
							<SheetDescription>
								{"Dismiss by clicking outside or pressing escape."}
							</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}
