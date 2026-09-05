import { ArrowRight, Bold, Heart, Palette, Star } from "@boxicons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "../../registry/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../../registry/components/ui/card";
import { Toggle } from "../../registry/components/ui/toggle";
import { COMPONENT_SHOWCASES } from "../components/component-showcases";
import { FloatingComponent } from "../components/floating-component";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24">
			<FloatingComponents />
			<div className="relative z-10 flex flex-col items-center gap-6 text-center">
				<h1 className="animate-wobble text-6xl leading-none motion-reduce:animate-none sm:text-8xl lg:text-9xl">
					Sketchcn
				</h1>
				<p className="max-w-md text-lg text-muted-foreground">
					{
						"Hand-drawn shadcn components that look like someone sketched them on a napkin."
					}
				</p>
				<div className="flex flex-wrap items-center justify-center gap-3">
					<Link to="/components">
						<Button size="lg">
							Browse components
							<ArrowRight />
						</Button>
					</Link>
					<Link to="/components/$name" params={{ name: "button" }}>
						<Button size="lg" variant="outline">
							Start with Button
						</Button>
					</Link>
				</div>
				<span className="text-muted-foreground text-sm">
					{`${COMPONENT_SHOWCASES.length} components and counting`}
				</span>
			</div>
		</main>
	);
}

function FloatingComponents() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<FloatingComponent className="top-[12%] left-[8%] hidden [--float-tilt:-8deg] [animation-duration:7s] lg:block">
				<Button>
					<Heart />
					Click me
				</Button>
			</FloatingComponent>

			<FloatingComponent className="top-[22%] right-[10%] hidden [--float-drift:18px] [--float-tilt:6deg] [animation-delay:0.6s] [animation-duration:8s] md:block">
				<Toggle variant="outline" defaultPressed>
					<Bold />
					Bold
				</Toggle>
			</FloatingComponent>

			<FloatingComponent className="top-[8%] right-[22%] hidden [--float-tilt:-5deg] [animation-delay:1.2s] [animation-duration:9s] xl:block">
				<Card size="sm" className="w-52">
					<CardHeader>
						<CardTitle>Sketch card</CardTitle>
						<CardDescription>{"Rough edges on purpose."}</CardDescription>
					</CardHeader>
				</Card>
			</FloatingComponent>

			<FloatingComponent className="bottom-[14%] left-[14%] hidden [--float-drift:-20px] [--float-tilt:7deg] [animation-delay:0.3s] [animation-duration:10s] xl:block">
				<Card size="sm" className="w-56">
					<CardHeader>
						<CardTitle>Copy and paste</CardTitle>
					</CardHeader>
					<CardContent className="text-muted-foreground text-sm">
						{"Every component ships as plain source you own."}
					</CardContent>
				</Card>
			</FloatingComponent>

			<FloatingComponent className="right-[14%] bottom-[16%] hidden [--float-tilt:-6deg] [animation-delay:0.9s] [animation-duration:6.5s] lg:block">
				<Button variant="destructive">
					<Star />
					Star it
				</Button>
			</FloatingComponent>

			<FloatingComponent className="bottom-[26%] left-[6%] hidden [--float-drift:14px] [--float-tilt:10deg] [animation-delay:1.5s] [animation-duration:7.5s] md:block">
				<Button variant="outline" size="icon-lg" aria-label="Palette">
					<Palette />
				</Button>
			</FloatingComponent>

			<FloatingComponent className="top-[46%] left-[2%] hidden [--float-tilt:-12deg] [animation-delay:2s] [animation-duration:8.5s] 2xl:block">
				<Toggle size="lg">Ghost</Toggle>
			</FloatingComponent>
		</div>
	);
}
