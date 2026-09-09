import { Github } from "@boxicons/react";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { Button } from "../../registry/components/ui/button";
import { SketchProvider } from "../../registry/components/ui/sketch-provider";
import appCss from "../styles.css?url";

const GITHUB_URL = "https://github.com/chuwong35122/sketchcn";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body suppressHydrationWarning>
				<SketchProvider>
					<div
						data-paper="graph"
						className="relative isolate min-h-screen [--paper-opacity:0.25]"
					>
						<Button
							variant="ghost"
							size="icon"
							aria-label="Sketchcn on GitHub"
							className="fixed top-4 right-4 z-50"
							render={<a href={GITHUB_URL} target="_blank" rel="noreferrer" />}
						>
							<Github />
						</Button>
						{children}
					</div>
				</SketchProvider>
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
