import { Pencil } from "@boxicons/react";
import { Button } from "../../registry/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../../registry/components/ui/card";
import { ShowcaseCard } from "./showcase-card";

export function CardShowcaseCard() {
	return (
		<ShowcaseCard
			className="sm:col-span-2 lg:col-span-3"
			title="Card"
			description="Every hand-drawn card composition and size."
		>
			<ShowcaseCard.Row label="Sizes">
				<Card className="w-64">
					<CardHeader>
						<CardTitle>Default size</CardTitle>
						<CardDescription>
							{"Comfortable spacing for most content."}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-muted-foreground text-sm">
							{"Sketchy borders drawn at the default scale."}
						</p>
					</CardContent>
				</Card>
				<Card size="sm" className="w-64">
					<CardHeader>
						<CardTitle>Small size</CardTitle>
						<CardDescription>
							{"Tighter spacing for dense layouts."}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-muted-foreground text-sm">
							{"Sketchy borders drawn at the small scale."}
						</p>
					</CardContent>
				</Card>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="With action">
				<Card className="w-64">
					<CardHeader>
						<CardTitle>Sketch #12</CardTitle>
						<CardDescription>{"Last edited a moment ago."}</CardDescription>
						<CardAction>
							<Button variant="ghost" size="icon" aria-label="Edit sketch">
								<Pencil />
							</Button>
						</CardAction>
					</CardHeader>
					<CardContent>
						<p className="text-muted-foreground text-sm">
							{"An action sits beside the header content."}
						</p>
					</CardContent>
				</Card>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="With footer">
				<Card className="w-64">
					<CardHeader>
						<CardTitle>Publish sketch</CardTitle>
						<CardDescription>
							{"Share it with the rest of the team."}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-muted-foreground text-sm">
							{"A footer anchors actions to the bottom of the card."}
						</p>
					</CardContent>
					<CardFooter className="justify-end gap-2">
						<Button variant="ghost">Cancel</Button>
						<Button>Publish</Button>
					</CardFooter>
				</Card>
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}
