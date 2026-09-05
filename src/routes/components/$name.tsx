import { ArrowLeft } from "@boxicons/react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "../../../registry/components/ui/button";
import { findComponentShowcase } from "../../components/component-showcases";

export const Route = createFileRoute("/components/$name")({
	loader: ({ params }) => {
		if (!findComponentShowcase(params.name)) {
			throw notFound();
		}
	},
	component: ComponentPage,
	notFoundComponent: ComponentNotFound,
});

function ComponentPage() {
	const { name } = Route.useParams();
	const showcase = findComponentShowcase(name);

	if (!showcase) {
		return <ComponentNotFound />;
	}

	return (
		<div className="mx-auto flex w-full max-w-4xl flex-col gap-6 p-8">
			<Button
				variant="link"
				size="sm"
				className="w-fit px-0"
				render={<Link to="/components" />}
			>
				<ArrowLeft />
				All components
			</Button>
			<showcase.Showcase />
		</div>
	);
}

function ComponentNotFound() {
	return (
		<div className="mx-auto flex w-full max-w-4xl flex-col items-start gap-4 p-8">
			<h1 className="text-3xl">{"We haven't sketched that one yet"}</h1>
			<p className="text-muted-foreground">
				{"That component does not exist in the Sketchcn registry."}
			</p>
			<Link to="/components">
				<Button variant="outline">
					<ArrowLeft />
					Browse components
				</Button>
			</Link>
		</div>
	);
}
