import { ArrowRight } from "@boxicons/react";
import { useId } from "react";
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
import { Input } from "../../registry/components/ui/input";
import { Switch } from "../../registry/components/ui/switch";
import { ShowcaseCard } from "./showcase-card";

const SIGN_IN_SNIPPET = `import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function SignInCard() {
  return (
    <Card variant="graph" className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Welcome back</CardTitle>
        <CardDescription>Sign in to keep sketching.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Input type="email" placeholder="hello@chuwii.com" />
        <Input type="password" placeholder="Password" />
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign in</Button>
      </CardFooter>
    </Card>
  );
}`;

const SETTINGS_SNIPPET = `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export function NotificationsCard() {
  const id = useId();

  return (
    <Card size="sm" className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Choose what lands in your inbox.</CardDescription>
        <CardAction>
          <Switch id={id} defaultChecked aria-label="Notifications" />
        </CardAction>
      </CardHeader>
      <CardContent className="text-muted-foreground text-sm">
        Weekly digests only, never more than one per week.
      </CardContent>
    </Card>
  );
}`;

const LINK_CARD_SNIPPET = `import { Link } from "@tanstack/react-router";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ComponentLinkCard() {
  return (
    <Link to="/components/$name" params={{ name: "button" }}>
      <Card className="h-full transition-transform hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="flex items-center justify-between gap-2">
            Button
            <ArrowRight className="size-4" />
          </CardTitle>
          <CardDescription>A hand-drawn Base UI button.</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}`;

export function CardExamples() {
	return (
		<ShowcaseCard
			title="Examples"
			description="Whole layouts built out of the card slots."
		>
			<ShowcaseCard.Example label="Sign-in card" code={SIGN_IN_SNIPPET}>
				<Card variant="graph" className="w-full max-w-sm">
					<CardHeader>
						<CardTitle>Welcome back</CardTitle>
						<CardDescription>{"Sign in to keep sketching."}</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col gap-3">
						<Input type="email" placeholder="hello@chuwii.com" />
						<Input type="password" placeholder="Password" />
					</CardContent>
					<CardFooter>
						<Button className="w-full">Sign in</Button>
					</CardFooter>
				</Card>
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Settings card" code={SETTINGS_SNIPPET}>
				<NotificationsCardPreview />
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Card as a link" code={LINK_CARD_SNIPPET}>
				<Card className="w-full max-w-sm transition-transform hover:-translate-y-1">
					<CardHeader>
						<CardTitle className="flex items-center justify-between gap-2">
							Button
							<ArrowRight className="size-4" />
						</CardTitle>
						<CardDescription>{"A hand-drawn Base UI button."}</CardDescription>
					</CardHeader>
				</Card>
			</ShowcaseCard.Example>
		</ShowcaseCard>
	);
}

function NotificationsCardPreview() {
	const id = useId();

	return (
		<Card size="sm" className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Notifications</CardTitle>
				<CardDescription>{"Choose what lands in your inbox."}</CardDescription>
				<CardAction>
					<Switch id={id} defaultChecked aria-label="Notifications" />
				</CardAction>
			</CardHeader>
			<CardContent className="text-muted-foreground text-sm">
				{"Weekly digests only, never more than one per week."}
			</CardContent>
		</Card>
	);
}
