import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "../../registry/components/ui/tabs";
import { ShowcaseCard } from "./showcase-card";

export function TabsShowcaseCard() {
	return (
		<ShowcaseCard
			title="Tabs"
			description="Every hand-drawn tabs variant and orientation."
		>
			<ShowcaseCard.Row label="Default">
				<Tabs defaultValue="sketch" className="min-w-64">
					<TabsList>
						<TabsTrigger value="sketch">Sketch</TabsTrigger>
						<TabsTrigger value="ink">Ink</TabsTrigger>
						<TabsTrigger value="pencil">Pencil</TabsTrigger>
					</TabsList>
					<TabsContent value="sketch">
						<p className="text-muted-foreground text-sm">
							{"A rough, hand-drawn pill sits behind the active tab."}
						</p>
					</TabsContent>
					<TabsContent value="ink">
						<p className="text-muted-foreground text-sm">
							{"Switching tabs redraws the sketchy outline."}
						</p>
					</TabsContent>
					<TabsContent value="pencil">
						<p className="text-muted-foreground text-sm">
							{"Every wobble is unique to this instance."}
						</p>
					</TabsContent>
				</Tabs>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Line variant">
				<Tabs defaultValue="sketch" className="min-w-64">
					<TabsList variant="line">
						<TabsTrigger value="sketch">Sketch</TabsTrigger>
						<TabsTrigger value="ink">Ink</TabsTrigger>
						<TabsTrigger value="pencil">Pencil</TabsTrigger>
					</TabsList>
					<TabsContent value="sketch">
						<p className="text-muted-foreground text-sm">
							{"A plain underline marks the active tab instead."}
						</p>
					</TabsContent>
					<TabsContent value="ink">
						<p className="text-muted-foreground text-sm">
							{"Useful for lighter, less boxed layouts."}
						</p>
					</TabsContent>
					<TabsContent value="pencil">
						<p className="text-muted-foreground text-sm">
							{"Pairs well with content-dense pages."}
						</p>
					</TabsContent>
				</Tabs>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Vertical">
				<Tabs defaultValue="sketch" orientation="vertical">
					<TabsList>
						<TabsTrigger value="sketch">Sketch</TabsTrigger>
						<TabsTrigger value="ink">Ink</TabsTrigger>
						<TabsTrigger value="pencil">Pencil</TabsTrigger>
					</TabsList>
					<TabsContent value="sketch">
						<p className="text-muted-foreground text-sm">
							{"Vertical orientation stacks the tab list on the side."}
						</p>
					</TabsContent>
					<TabsContent value="ink">
						<p className="text-muted-foreground text-sm">
							{"The active indicator moves to the trailing edge."}
						</p>
					</TabsContent>
					<TabsContent value="pencil">
						<p className="text-muted-foreground text-sm">
							{"Handy for settings panels and sidebars."}
						</p>
					</TabsContent>
				</Tabs>
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}
