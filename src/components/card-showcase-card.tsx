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
			<ShowcaseCard.Row label="Paper textures">
				<Card className="w-64">
					<CardHeader>
						<CardTitle>Paper</CardTitle>
						<CardDescription>
							{"Flecked, handmade paper grain."}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-muted-foreground text-sm">
							{"A subtle fiber texture behind the content."}
						</p>
					</CardContent>
				</Card>
				<Card variant="polkadots" className="w-64">
					<CardHeader>
						<CardTitle>Polka dots</CardTitle>
						<CardDescription>{"Bullet-journal dot paper."}</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-muted-foreground text-sm">
							{"Staggered dots tiled across the card."}
						</p>
					</CardContent>
				</Card>
				<Card variant="hexagons" className="w-64">
					<CardHeader>
						<CardTitle>Hexagons</CardTitle>
						<CardDescription>{"Honeycomb hexagon grid."}</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-muted-foreground text-sm">
							{"A seamless tiled honeycomb outline."}
						</p>
					</CardContent>
				</Card>
				<Card variant="graph" className="w-64">
					<CardHeader>
						<CardTitle>Graph</CardTitle>
						<CardDescription>{"Engineering graph paper."}</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-muted-foreground text-sm">
							{"A tiled plus-grid graph paper texture."}
						</p>
					</CardContent>
				</Card>
				<Card variant="plus" className="w-64">
					<CardHeader>
						<CardTitle>Plus</CardTitle>
						<CardDescription>{"Scattered plus-sign paper."}</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-muted-foreground text-sm">
							{"Small plus marks tiled across the card."}
						</p>
					</CardContent>
				</Card>
				<Card variant="filled-dots" className="w-64">
					<CardHeader>
						<CardTitle>Filled dots</CardTitle>
						<CardDescription>{"Fine speckled dot paper."}</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-muted-foreground text-sm">
							{"A dense, tiny dot texture behind the content."}
						</p>
					</CardContent>
				</Card>
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}
