import { Tabs } from "@base-ui/react/tabs";
import { CopyButton } from "./copy-button";

const REGISTRY_URL = "https://sketchcn.chuwii.com/r";

const PACKAGE_MANAGERS = [
	{
		id: "npm",
		label: "npm",
		command: (url: string) => `npx shadcn@latest add ${url}`,
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: (url: string) => `pnpm dlx shadcn@latest add ${url}`,
	},
	{
		id: "bun",
		label: "bun",
		command: (url: string) => `bunx --bun shadcn@latest add ${url}`,
	},
] as const;

export function InstallTabs({ name }: { name: string }) {
	const url = `${REGISTRY_URL}/${name}.json`;

	return (
		<Tabs.Root defaultValue="npm" className="flex flex-col gap-2">
			<Tabs.List className="relative flex w-fit gap-1 rounded-lg border border-input bg-muted/40 p-1">
				{PACKAGE_MANAGERS.map((manager) => (
					<Tabs.Tab
						key={manager.id}
						value={manager.id}
						className="relative z-10 rounded-md px-3 py-1 text-muted-foreground text-sm transition-colors data-selected:text-foreground"
					>
						{manager.label}
					</Tabs.Tab>
				))}
				<Tabs.Indicator className="absolute inset-y-1 left-0 z-0 w-(--active-tab-width) translate-x-(--active-tab-left) rounded-md bg-background shadow-xs transition-all duration-200 ease-out" />
			</Tabs.List>
			{PACKAGE_MANAGERS.map((manager) => (
				<Tabs.Panel key={manager.id} value={manager.id}>
					<div className="flex items-center justify-between gap-2 rounded-lg border border-input bg-muted/40 px-3 py-2">
						<code className="overflow-x-auto whitespace-nowrap font-mono text-sm">
							{manager.command(url)}
						</code>
						<CopyButton value={manager.command(url)} />
					</div>
				</Tabs.Panel>
			))}
		</Tabs.Root>
	);
}
