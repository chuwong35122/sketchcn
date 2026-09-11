import { Bell, Folder, Home, Star } from "@boxicons/react";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarProvider,
	SidebarSeparator,
	SidebarTrigger,
} from "../../registry/components/ui/sidebar";
import { ShowcaseCard } from "./showcase-card";

const SHELL_SNIPPET = `import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>
                    <span>Sketchbook</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <SidebarTrigger className="m-3" />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}`;

const GAP_SNIPPET = `<SidebarProvider
  style={{ "--sidebar-gap": "1.5rem", "--sidebar-width": "14rem" } as React.CSSProperties}
>
  <Sidebar>{/* ... */}</Sidebar>
</SidebarProvider>`;

const GROUP_SNIPPET = `<SidebarGroup collapsible defaultOpen>
  <SidebarGroupLabel>Workspace</SidebarGroupLabel>
  <SidebarGroupContent>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <Star />
          <span>Favourites</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroupContent>
</SidebarGroup>`;

const COLLAPSIBLE_SNIPPET = `<Sidebar collapsible="icon">
  <SidebarContent>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton isActive tooltip="Overview">
          <Home />
          <span>Overview</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarContent>
</Sidebar>`;

const SUB_SNIPPET = `<SidebarMenuItem collapsible defaultOpen>
  <SidebarMenuButton>
    <Folder />
    <span>Projects</span>
  </SidebarMenuButton>
  <SidebarMenuSub>
    <SidebarMenuSubItem>
      <SidebarMenuSubButton href="#" isActive>
        <span>Hand-drawn icons</span>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  </SidebarMenuSub>
</SidebarMenuItem>`;

function ExampleShell({
	children,
	gap,
}: {
	children: React.ReactNode;
	gap?: string;
}) {
	return (
		<SidebarProvider
			className="h-80 min-h-0 w-full overflow-hidden rounded-xl"
			style={
				gap ? ({ "--sidebar-gap": gap } as React.CSSProperties) : undefined
			}
		>
			<Sidebar collapsible="none">{children}</Sidebar>
			<div className="flex flex-1 items-center justify-center p-6 text-muted-foreground text-sm">
				Canvas
			</div>
		</SidebarProvider>
	);
}

const RAIL_ITEMS = [
	{ icon: Home, label: "Overview" },
	{ icon: Star, label: "Favourites" },
	{ icon: Folder, label: "Projects" },
	{ icon: Bell, label: "Reminders" },
] as const;

/*
  `collapsible="icon"` pins the panel with `position: fixed`. The transform on
  the outer div makes that box the containing block, so the preview stays
  inside the card instead of escaping to the viewport.

  The rail is also a desktop affordance: under `md` the sidebar switches to a
  sheet that covers the viewport and leaves this card empty, so the preview is
  swapped for a note at that width.
*/
function IconRailPreview() {
	return (
		<>
			<div className="hidden h-80 w-full transform-gpu overflow-hidden rounded-xl md:block">
				<SidebarProvider className="h-full min-h-0">
					<Sidebar collapsible="icon" className="h-full">
						<SidebarContent>
							<SidebarGroup>
								<SidebarGroupContent>
									<SidebarMenu>
										{RAIL_ITEMS.map(({ icon: Icon, label }) => (
											<SidebarMenuItem key={label}>
												<SidebarMenuButton
													isActive={label === "Overview"}
													tooltip={label}
												>
													<Icon />
													<span>{label}</span>
												</SidebarMenuButton>
											</SidebarMenuItem>
										))}
									</SidebarMenu>
								</SidebarGroupContent>
							</SidebarGroup>
						</SidebarContent>
					</Sidebar>
					<SidebarInset>
						<div className="flex items-center gap-2 p-3">
							<SidebarTrigger />
							<span className="text-muted-foreground text-sm">
								Toggle the rail
							</span>
						</div>
						<div className="flex flex-1 items-center justify-center pb-10 text-muted-foreground text-sm">
							Canvas
						</div>
					</SidebarInset>
				</SidebarProvider>
			</div>
			<p className="text-muted-foreground text-sm md:hidden">
				{
					"The icon rail is a desktop affordance. On narrow screens the sidebar opens as a sheet instead, so this preview only runs from the md breakpoint up."
				}
			</p>
		</>
	);
}

export function SidebarExamples() {
	return (
		<ShowcaseCard
			title="Examples"
			description="App shells, roomier gaps, and nested navigation."
		>
			<ShowcaseCard.Example label="App shell" code={SHELL_SNIPPET}>
				<ExampleShell>
					<SidebarHeader>
						<span className="font-medium text-sm">Studio</span>
					</SidebarHeader>
					<SidebarSeparator />
					<SidebarContent>
						<SidebarGroup>
							<SidebarGroupLabel>Pinned</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton isActive>
											<Home />
											<span>Overview</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton>
											<Star />
											<span>Favourites</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton>
											<Bell />
											<span>Notifications</span>
										</SidebarMenuButton>
										<SidebarMenuBadge>4</SidebarMenuBadge>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					</SidebarContent>
				</ExampleShell>
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Collapsible groups" code={GROUP_SNIPPET}>
				<ExampleShell>
					<SidebarContent>
						<SidebarGroup collapsible defaultOpen>
							<SidebarGroupLabel>Workspace</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton isActive>
											<Home />
											<span>Overview</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton>
											<Star />
											<span>Favourites</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
						<SidebarGroup collapsible defaultOpen={false}>
							<SidebarGroupLabel>Archive</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>
											<Folder />
											<span>Old sketches</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton>
											<Bell />
											<span>Reminders</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					</SidebarContent>
				</ExampleShell>
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Roomier gap" code={GAP_SNIPPET}>
				<ExampleShell gap="1.5rem">
					<SidebarContent>
						<SidebarGroup>
							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton isActive>
											<Home />
											<span>Overview</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					</SidebarContent>
				</ExampleShell>
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Nested pages" code={SUB_SNIPPET}>
				<ExampleShell>
					<SidebarContent>
						<SidebarGroup>
							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuItem collapsible defaultOpen>
										<SidebarMenuButton>
											<Folder />
											<span>Projects</span>
										</SidebarMenuButton>
										<SidebarMenuSub>
											<SidebarMenuSubItem>
												<SidebarMenuSubButton href="#" isActive>
													<span>Hand-drawn icons</span>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
											<SidebarMenuSubItem>
												<SidebarMenuSubButton href="#">
													<span>Paper textures</span>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										</SidebarMenuSub>
									</SidebarMenuItem>
									<SidebarMenuItem collapsible defaultOpen={false}>
										<SidebarMenuButton>
											<Star />
											<span>Favourites</span>
										</SidebarMenuButton>
										<SidebarMenuSub>
											<SidebarMenuSubItem>
												<SidebarMenuSubButton href="#">
													<span>Pinned palettes</span>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										</SidebarMenuSub>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					</SidebarContent>
				</ExampleShell>
			</ShowcaseCard.Example>
			<ShowcaseCard.Example
				label="Collapse to icons"
				code={COLLAPSIBLE_SNIPPET}
			>
				<IconRailPreview />
			</ShowcaseCard.Example>
		</ShowcaseCard>
	);
}
