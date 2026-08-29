import { Pencil } from "@boxicons/react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "../../registry/components/ui/button";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="p-8">
			<Button>
				<Pencil />
				Try the sketch button
			</Button>
		</div>
	);
}
