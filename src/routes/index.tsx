import { Bold, Italic } from "@boxicons/react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "../../registry/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../../registry/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../../registry/components/ui/dialog";
import { Toggle } from "../../registry/components/ui/toggle";
import { ButtonShowcaseCard } from "../components/button-showcase-card";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="grid gap-4 p-8 sm:grid-cols-2 lg:grid-cols-3">
			<ButtonShowcaseCard />
			<Card>
				<CardHeader>
					<CardTitle>Toggle</CardTitle>
					<CardDescription>{"A pressable hand-drawn toggle."}</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-wrap items-center gap-2">
					<Toggle aria-label="Toggle italic">
						<Italic />
						Italic
					</Toggle>
					<Toggle aria-label="Toggle bold">
						<Bold />
						Bold
					</Toggle>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Dialog</CardTitle>
					<CardDescription>{"A hand-drawn modal dialog."}</CardDescription>
				</CardHeader>
				<CardContent>
					<Dialog>
						<DialogTrigger render={<Button>Try the sketch dialog</Button>} />
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Are you sure?</DialogTitle>
								<DialogDescription>
									{"This dialog is hand-drawn just like the button."}
								</DialogDescription>
							</DialogHeader>
							<DialogFooter>
								<Button>Cancel</Button>
								<Button variant="default">Confirm</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</CardContent>
			</Card>
		</div>
	);
}
