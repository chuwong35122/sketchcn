import { Bold, Italic, Pencil } from "@boxicons/react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "../../registry/components/ui/button";
import { Toggle } from "../../registry/components/ui/toggle";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="p-8">
			<Button>
				<Pencil />
				Try the sketch button
			</Button>
			<div className="flex flex-wrap items-center gap-2">
				<Toggle aria-label="Toggle italic">
					<Italic />
					Italic
				</Toggle>
				<Toggle aria-label="Toggle bold">
					<Bold />
					Bold
				</Toggle>
			</div>
		</div>
	);
}
